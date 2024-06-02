<template>
    <div class="upload-box">
        <div class="iconfont icon-networks"></div>
        <el-input v-model="input" style="width: 95%" placeholder="选择或扫描一个URL" />
        <el-switch size="large" v-model="value" active-text="开启动态分析" /><br>
        <div class="button-box">
            <el-button color="#547BF1" :dark="isDark">开始静态分析</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(false)
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
