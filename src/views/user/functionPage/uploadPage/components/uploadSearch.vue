<template>
    <div>
        <div class="upload-box">
            <div class="iconfont icon-fingerprint"></div>
            <el-input v-model="input" style="width: 95%" placeholder="请输入想要搜索的md5值" />
            <div class="button-box">
                <el-button color="#547BF1" @click="buttonClick">
                    开始静态分析
                </el-button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import { getApkInfoAPI } from '@/apis/apkInfo.js'
const router = useRouter();
let input = ref('')
async function buttonClick() {
    if (input.value == '') {
        ElMessage.warning('md5值不能为空！')
        return
    }
    const res = await getApkInfoAPI(input.value, 'v')
    console.log(res.data)//https://download.yidianzixun.com/
    if (res.data.code == 500) {
        ElMessage.warning('未找到相关apk信息')
        return
    }
    localStorage.setItem('staticDataList', JSON.stringify(res.data.data))
    router.push(`/userResultPage`)
}
</script>
<style lang="scss" scoped>
.upload-box {
    margin: 30px 0;

    .icon-fingerprint {
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
    }

    .icon-fingerprint::before {
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
        margin-bottom: 30px;
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
