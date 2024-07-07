<template>
    <div class="upload-box">
        <el-upload class="upload-demo" :on-remove="handleRemove" :auto-upload="false" :limit="1" drag multiple
            @exceed="handleExceed" @change="fileChange" :file-list="uploadList">
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
            <el-button color="#547BF1" @click="uploadClick" :disabled="isUploadClick">
                {{ isActiveAnalysis ? '开始动态分析' : '开始静态分析' }}
            </el-button>
        </div>
        <div class="wow fadeInUp" style="margin-top: 20px;" v-if="isProgress != -1">
            <div style="margin-bottom: 10px; font-size: 14px;">正在分析请耐心等待...</div>
            <div style="display: flex;">
                <span style="font-size: 14px;">分析进度：</span>
                <el-progress style="flex:1;" :text-inside="true" :stroke-width="17" :percentage="isProgress"
                    :color="customColors" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore.js'
import { useWebSocketStore } from '@/stores/webSocketStore.js';
import { useStaticDataStore } from '@/stores/staticDataStore.js';
import { multipartUploadAPI, finishUploadAPI } from '@/apis/multipartUpload.js'
import '@/utils/spark-md5.min.js'
const router = useRouter();
const route = useRoute();
const staticDataStore = useStaticDataStore();
const userStore = useUserStore()
const webSocketStore = useWebSocketStore();
const isActiveAnalysis = ref(false)
const uploadList = ref([])//el-upload组件中的文件列表
const isUploadClick = ref(false)
let fileX = ref(null)
//是否显示进度条
let isProgress = ref(-1)
const chunkSize = 1 * 1024 * 1024;
const webSocket = ref(null)
onMounted(async () => {
    userStore.initialize()
    //判断有没有连接webSocket
    webSocket.value = await webSocketStore.initialize(userStore.user.userMail)
    console.log(webSocket.value)
    webSocket.value.onmessage = function (event) {
        console.log("websocket.onmessage: " + event.data);
        if (!isNaN(parseInt(event.data))) {
            isProgress.value = event.data
            if (isProgress.value == 100) {
                setTimeout(() => {
                    isProgress.value = -1
                })
            }
        }
    }
    webSocket.value.onclose = function () {
        console.log("websocket.onclose: WebSocket连接关闭");
    }
    if (route.query.value == 'true') {
        isActiveAnalysis.value = true;
    } else if (route.query.value == 'false') {
        isActiveAnalysis.value = false;
    }
    console.log(isActiveAnalysis.value)
})
const customColors = [
    { color: 'linear-gradient(to right,#7dc15b,#3d801b', percentage: 100 },
    { color: 'linear-gradient(to right,#DDFA9D,#9BD420', percentage: 80 },
    { color: 'linear-gradient(to right,#BDF1FF,#1B79D1', percentage: 60 },
    { color: 'linear-gradient(to right,#F2DCAA,#e7823c', percentage: 40 },
    { color: 'linear-gradient(to right,#FFD4BD,#D6573E', percentage: 20 },
]
//点击上传文件
async function uploadClick() {
    if (!fileX.value || !fileX.value.raw || fileX.value.size === 0) {
        ElMessage.error('上传文件不能为空！');
        return;
    }
    isUploadClick.value = true
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
    //断点续传,判断是否中断传输，中断的话从中断处开始
    let flag = 0
    const res = await finishUploadAPI(fileMd5, 'v')
    console.log(res)
    console.log(res.data)
    if (res.data && res.data.data) {
        const dataArray = res.data.data;
        console.log(dataArray)
        flag = dataArray[0]
    }
    console.log(flag)
    //获取到文件
    let fileArr = sliceFile(file);
    //保存文件名称
    let fileName = file.name;
    console.log(fileName)
    const uploadPromises = [];
    for (let i = flag; i < fileArr.length; i++) {
        let data = new FormData();
        data.append("totalNumber", fileArr.length);
        data.append("chunkSize", chunkSize);
        data.append("chunkNumber", i);
        data.append("md5", fileMd5);
        data.append("file", new File([fileArr[i]], fileName));
        const uploadPromise = upload(fileArr.length, i, fileMd5, new File([fileArr[i]], fileName), 'v');
        uploadPromises.push(uploadPromise)
    }
    try {
        // 等待所有上传请求完成
        await Promise.all(uploadPromises)
        console.log('所有文件分片上传完毕')
        console.log(uploadList.value.length)
        console.log(uploadList.value)
        if (uploadList.value.length > 0) {
            uploadList.value = []
        }
        ElMessage.success("上传成功，等待分析. . .")
        isProgress.value = 0
        //静态分析的请求(上传文件完毕后)
        const res = await finishUploadAPI(fileMd5, 'v')
        if (res.data.code == 415) {
            setTimeout(() => {
                ElMessage.warning(res.data.message)
            }, 1000)
            return
        }
        if (res.data.code == 504) {
            setTimeout(() => {
                ElMessage.warning('服务器繁忙，请稍后再试！')
            }, 1000)
            return
        }
        console.log(res.data.data)
        staticDataStore.staticDataList = res.data.data
        localStorage.setItem('staticDataList', JSON.stringify(res.data.data))
        ElMessage.success('apk 解析完毕')
        router.push('/userResultPage')
        isUploadClick.value = false
    } catch (error) {
        console.error('上传过程中出现错误:', error);
    }
}
//文件个数过多触发事件
function handleExceed() {
    ElMessage({
        message: '最多只能上传一个文件',
        type: 'warning',
    });
}
//拖拽文件时触发事件
const fileChange = (file) => {
    const extension = file.name.split('.').pop();
    if (extension !== 'apk') {
        ElMessage.error('只能上传后缀为 .apk 的文件！');
    }
    console.log(file)
    fileX.value = file
    console.log(fileX.value)
    uploadList.value.push(file);
    console.log(uploadList.value)
};
//处理文件列表，以便后续清空文件列表
const handleRemove = (file, fileList) => {
    uploadList.value = fileList;
};
//获取md5
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
//分片上传的请求
async function upload(totalNumber, chunkNumber, md5, file, k) {
    const res = await multipartUploadAPI(totalNumber, chunkNumber, md5, file, k);
    return res
}
//文件分片后上传
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
</script>
<style lang="scss" scoped>
.upload-box {
    padding: 20px 0 10px 0;

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
