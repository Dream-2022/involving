<template>
    <div class="upload-box">
        <div class="iconfont icon-networks"></div>
        <el-input v-model="inputContent" style="width: 95%" placeholder="输入 akp 下载链接（支持直接下载链接，内嵌二维码下载链接）" />
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
        <el-switch size="large" v-if="selectValue" v-model="value" active-text="开启动态分析" />
        <div class="button-box">
            <el-button color="#547BF1" @click="confirmClick">{{ selectValue ? value ? '开始动态分析' : '开始静态分析' : '开始下载'
                }}</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { URLDownloadApkAPI } from '@/apis/analysis.js'
const value = ref(false)
const selectValue = ref(false)
let inputContent = ref('')
async function confirmClick() {
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
    // 'https://static.yidianzixun.com/modules/build/download/images/pc_qrcode-5bd304e5.png'
    const res = await URLDownloadApkAPI(inputContent.value, 'v')
    console.log(res)
    let link = document.createElement('a');
    link.href = res.data
    link.click();//模拟点击
    URL.revokeObjectURL(link.href);
    const linkElement = document.querySelector('link[href="' + link.href + '"]');
    if (linkElement) {
        linkElement.remove();
        console.log('Link removed:', url);
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
