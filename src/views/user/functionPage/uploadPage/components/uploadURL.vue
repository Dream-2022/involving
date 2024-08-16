<template>
    <div class="upload-box">
        <div class="iconfont icon-networks"></div>
        <el-input v-model="inputContent" style="width: 95%" placeholder="akp 下载链接（支持下载链接，内嵌二维码链接，网页点击下载按钮链接）" />
        <div style="margin-bottom: 20px;">
            <el-button-group style="margin: 10px 0 10px 5px" v-model="selectValue">
                <el-button @click="selectValue = false" style="border-top-left-radius:15px;"
                    :class="!selectValue ? 'active-button' : 'grey-button'">
                    下载apk文件
                </el-button>
                <el-button @click="selectValue = true" style="border-bottom-right-radius:15px;"
                    :class="selectValue ? 'active-button' : 'grey-button'">
                    分析apk文件
                </el-button>
            </el-button-group>
        </div>
        <div class="button-box">
            <el-button color="#547BF1" @click="confirmClick">{{ selectValue ? '开始静态分析' : '开始下载' }}</el-button>
        </div>
        <div class="wow fadeInUp" style="margin-top: 20px;" v-if="isProgress != -1">
            <div style="margin-bottom: 10px; font-size: 14px;">正在分析请耐心等待...</div>
            <div style="display: flex;">
                <span style="font-size: 14px;">分析进度：</span>
                <el-progress :percentage="isProgress" style="flex:1;" :stroke-width="18" :text-inside="true" striped
                    striped-flow :duration="10" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore.js'
import { useStaticDataStore } from '@/stores/staticDataStore.js';
import { useWebSocketStore } from '@/stores/webSocketStore.js';
import { URLDownloadApkAPI, URLAnalysisApkAPI } from '@/apis/download.js'
import { finishUploadAPI } from '@/apis/multipartUpload.js'
const userStore = useUserStore()
const webSocketStore = useWebSocketStore();
const staticDataStore = useStaticDataStore();
const router = useRouter();
const selectValue = ref(false)
const isProgress = ref(-1)//下载进度
const webSocket = ref(null)
let inputContent = ref('')
onMounted(async () => {
    userStore.initialize()
    if (userStore.user != null) {
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
    } else {
        ElMessage.warning('请登录后进行分析...')
    }
})
async function confirmClick() {
    // https://static.yidianzixun.com/modules/build/download/images/pc_qrcode-5bd304e5.png
    if (inputContent.value == '') {
        ElMessage({
            message: '请输入apk下载链接', type: 'warning',
        })
        return;
    }
    const linkRegex = /https?:\/\/\S+/gi;
    if (!inputContent.value.match(linkRegex)) {
        ElMessage({
            message: '请输入apk下载链接的正确格式', type: 'warning',
        })
        return;
    }
    //静态分析
    if (selectValue.value == true) {
        const res0 = await URLAnalysisApkAPI(inputContent.value, 'v')
        console.log(res0.data.data)
        const res = await finishUploadAPI(res0.data.data, 'v')
        if (res.data.code == 415) {
            setTimeout(() => {
                ElMessage.warning(res.data.message)
            }, 1000)
            return
        }
        if (res.data.code == 504 || res.data.code == 500) {
            setTimeout(() => {
                ElMessage.warning('服务器繁忙，请稍后再试！')
            }, 1000)
            return
        }
        if (res.data.code != 200) {
            setTimeout(() => {
                ElMessage.warning('请登录后进行操作！')
            }, 1000)
            return
        }
        console.log(res.data.data)
        staticDataStore.staticDataList = res.data.data
        localStorage.setItem('staticDataList', JSON.stringify(res.data.data))
        ElMessage.success('apk 解析完毕')
        router.push('/userResultPage')
        isUploadClick.value = false
    }
    //下载APK
    else {
        const res = await URLDownloadApkAPI(inputContent.value, 'v')
        console.log(res)
        let link = document.createElement('a');
        link.href = res.data.data
        link.click();//模拟点击
        ElMessage.success("正在下载...")
        inputContent.value = ''
        URL.revokeObjectURL(link.href);
        const linkElement = document.querySelector('link[href="' + link.href + '"]');
        if (linkElement) {
            linkElement.remove();
            console.log('Link removed:', url);
        }
    }
}
</script>
<style lang="scss" scoped>
.upload-box {
    margin: 30px 0;

    .icon-networks {
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
    }

    .icon-networks::before {
        color: #C0C4CC;
        font-size: 120px;
        padding-bottom: 30px;
    }

    .el-switch {
        margin-bottom: 10px;
    }


    .el-input {
        margin: 10px 0;
        height: 38px;
    }

    .el-button-group {
        .el-button {
            height: 30px;

        }

        .grey-button {
            color: #547BF1;
            border: 1px solid #547BF1;
        }

        .grey-button:hover {
            background-color: #e8edff;
        }

        .active-button {
            border: 1px solid #547BF1;
            background-color: #547BF1;
            color: #fff;
        }

        .active-button:hover {
            background-color: #6b8df5;
        }
    }

    .el-switch {
        transform: translateY(-15px);
    }

    .button-box {
        text-align: center;

        .prompt {
            font-size: 12px;
            color: $word-black-color;
        }

        .el-button {
            height: 35px;
            width: 200px;
            display: inline-block;
        }
    }
}
</style>
