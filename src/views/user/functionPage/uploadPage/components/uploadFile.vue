<template>
    <div class="upload-box">
        <el-upload class="upload-demo" :auto-upload="false" :limit="1" drag multiple @exceed="handleExceed"
            @change="fileChange" :before-upload="handleBeforeUpload">
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
                <em>点击</em> 或 <em>拖拽</em><br>
                即可上传 apk 文件
            </div>
            <template #tip>
                <div class="el-upload__tip">
                    支持上传 apk 文件, 小于 500 MB
                </div>
            </template>
        </el-upload>
        <el-switch size="large" v-model="isActiveAnalysis" active-text="开启动态分析" /><br>
        <div class="button-box">
            <el-button color="#547BF1" @click="uploadClick">
                {{ isActiveAnalysis ? '开始动态分析' : '开始静态分析' }}
            </el-button>
        </div>
    </div>
</template>
<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router';
import { reactive, ref, onMounted } from 'vue'
import '@/utils/spark-md5.min.js'
const router = useRouter();
const route = useRoute();
const isActiveAnalysis = ref(false)
let fileX = ref(null)
const chunkSize = 1 * 1024 * 1024;
onMounted(() => {
    if (route.query.value == 'true') {
        isActiveAnalysis.value = true;
    } else if (route.query.value == 'false') {
        isActiveAnalysis.value = false;
    }
    console.log(isActiveAnalysis.value)
})
function handleExceed() {
    ElMessage({
        message: '最多只能上传一个文件',
        type: 'warning',
    });
}
const fileChange = (file) => {
    const extension = file.name.split('.').pop();
    if (extension !== 'apk') {
        ElMessage.error('只能上传后缀为 .apk 的文件！');
    }
    console.log(file)
    fileX.value = file
    console.log(fileX.value)
};
const handleBeforeUpload = (file) => {

};
async function getFileMd5(file) {
    return new Promise((resolve, reject) => {
        const sliceLength = 10;
        const chunkSize = Math.ceil(file.size / sliceLength);
        const fileReader = new FileReader();
        const md5 = new SparkMD5();
        let index = 0;
        const loadFile = () => {
            const slice = file.slice(index, index + chunkSize);
            fileReader.readAsBinaryString(slice);
        }
        loadFile();
        fileReader.onload = e => {
            md5.appendBinary(e.target.result);
            if (index < file.size) {
                index += chunkSize;
                loadFile();
            } else {
                let md5Value = md5.end();
                resolve(md5Value);
            }
        };
        fileReader.onerror = e => {
            reject(e.target.error);
        };
    });
}
function upload(data) {
    var xhr = new XMLHttpRequest();
    // 当上传完成时调用
    xhr.onload = function () {
        if (xhr.status === 200) {
            uploadResult.append('上传成功分片：' + data.get("chunkNumber") + '\t');
        }
    }
    xhr.onerror = function () {
        uploadResult.innerHTML = '上传失败';
    }
    // 发送请求
    xhr.open('POST', '/uploadBig', true);
    xhr.send(data);
}
function sliceFile(file) {
    if (!(file instanceof Blob)) {
        throw new TypeError('Parameter "file" must be a Blob object');
    }
    console.log(file)
    const chunks = [];
    let start = 0;
    let end;
    while (start < file.size) {
        end = Math.min(start + chunkSize, file.size);
        chunks.push(file.slice(start, end));
        start = end;
    }
    return chunks;
}
async function uploadClick() {
    if (!fileX.value || !fileX.value.raw || fileX.value.size === 0) {
        ElMessage.error('上传文件不能为空！');
        return;
    }
    console.log(fileX.value.raw);
    const file = fileX.value.raw;
    const extension = file.name.split('.').pop();
    if (extension !== 'apk') {
        ElMessage.error('只能上传后缀为 .apk 的文件！');
        return;
    }
    // 计算md5
    let fileMd5;
    try {
        fileMd5 = await getFileMd5(file);
    } catch (error) {
        console.error('获取文件MD5值出错：', error);
        return;
    }
    console.log(fileMd5)

    if (!file) return;
    if (!fileMd5) return;
    //获取到文件
    let fileArr = sliceFile(file);
    //保存文件名称
    let fileName = file.name;

    // 分片上传文件
    var uploadedChunks = [];
    var xhr = new XMLHttpRequest();
    // 处理上传进度
    xhr.upload.onprogress = function (event) {
        var percent = 100 * event.loaded / event.total;
        console.log('上传进度：' + percent + '%')
        uploadResult.innerHTML = '上传进度：' + percent + '%';
    };
    // 当上传完成时调用
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('上传成功' + xhr.responseText)
            uploadResult.innerHTML = '上传成功' + xhr.responseText;
            // 记录已上传的分片号
            uploadedChunks.push(chunkNumber);
            // 判断是否所有分片都已上传完成
            if (uploadedChunks.length === fileArr.length) {
                // 所有分片已上传完成，发送请求告知服务器所有分片已上传完毕
                console.log('所有分片已上传完毕');
                // TODO: 发送请求告知服务器所有分片已上传完毕

            }
        }
    }
    xhr.onerror = function () {
        uploadResult.innerHTML = '上传失败';
    }
    fileArr.forEach((e, i) => {
        //创建formdata对象
        console.log('创建formdata对象')
        let data = new FormData();
        data.append("totalNumber", fileArr.length)
        data.append("chunkSize", chunkSize)
        data.append("chunkNumber", i)
        data.append("md5", fileMd5)
        data.append("file", new File([e], fileName));
        upload(data, i); // 传入分片号
    })
    // 发送请求
    console.log('发送请求')
}
function handleChange(fileList) {
    console.log(fileList)
}

// async function uploadClick() {
//     console.log("点击")
//     console.log(uploadClick.value)
//     router.push('../../userResultPage')
// }
</script>
<style lang="scss" scoped>
.upload-box {
    padding: 20px 0 30px 0;


    .el-upload__tip {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .el-switch {
        margin-top: 20px;
    }

    .button-box {
        text-align: center;

        .el-button {
            height: 35px;
            width: 220px;
            margin-top: 30px;
            display: inline-block;
        }
    }

}
</style>
