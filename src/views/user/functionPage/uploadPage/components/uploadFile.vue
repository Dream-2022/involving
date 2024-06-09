<template>
    <div class="upload-box">
        <el-upload class="upload-demo" drag multiple v-model="uploadValue" :on-change="handleChange">
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
        <el-switch size="large" v-model="value" active-text="开启动态分析" /><br>
        <div class="button-box">
            <el-button color="#547BF1" @click="uploadClick">
                {{ value ? '开始动态分析' : '开始静态分析' }}
            </el-button>
        </div>

    </div>
</template>
<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const router = useRouter();
const value = ref(false)
let uploadValue = ref(null);
function download(blobUrl) {
    const a = document.createElement('a');
    a.download = '123';
    a.href = blobUrl;
    a.click();
}
function handleChange() {
    console.log(uploadValue.value)
}
async function uploadClick() {
    console.log("点击")
    console.log(uploadClick.value)
    router.push('../../userResultPage')
    // const res = await URLDownloadApkAPI('https://static.yidianzixun.com/modules/build/download/images/pc_qrcode-5bd304e5.png', 'v')
    // console.log(res)
    // let link = document.createElement('a');
    // link.href = res.data
    // link.click();//模拟点击
    // URL.revokeObjectURL(link.href);
    // const linkElement = document.querySelector('link[href="' + link.href + '"]');
    // if (linkElement) {
    //     linkElement.remove();
    //     console.log('Link removed:', url);
    // }
}
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
