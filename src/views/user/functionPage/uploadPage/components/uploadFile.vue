<template>
    <div class="upload-box">
        <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple>
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
            <el-button color="#547BF1" :dark="isDark" @click="uploadClick">开始静态分析</el-button>
        </div>

    </div>
</template>
<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import axios from 'axios'
const router = useRouter();
const value = ref(false)
function uploadClick() {
    console.log("点击")
    // router.push('../../userResultPage')
    const http = axios.create({
        baseURL: 'http://192.168.50.32:10010',
        // timeout: 5000
    })
    http({
        url: '/apk-download/download',
        method: 'POST',
        params: {
            apkUrl: 'https://download.yidianzixun.com/',
            k: 'v'
        }
    }).then(res => {
        console.log(res.data)
    })
}
</script>
<style lang="scss" scoped>
.upload-box {
    padding: 20px 0 30px 0;


    .el-upload__tip {
        margin-top: 10px;
        margin-bottom: 20px;
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
