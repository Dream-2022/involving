<template>
    <div class="file-class">
        <div class="wow fadeInDown file-box">
            <div class="icon-box" @click="exitClick">
                <span class="iconfont icon-left"
                    style="border-radius:0 25px 25px 0;padding:22px;padding-left: 20px;"></span>
            </div>
            <span class="file-title">Manifest 文件</span>
        </div>
        <div class="wow fadeInUp file-content">
            <div class="file-content-main">
                <div class="main-title">Manifest 源代码</div>
                <highlightjs language="JavaScript" :autodetect="false" :code="code"></highlightjs>

            </div>
        </div>
    </div>

</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import 'highlight.js/styles/stackoverflow-light.css';// 可以切换其它样式风格，例如黑色主题
import 'highlight.js/lib/common';
import WOW from "wow.js";
const router = useRouter();
let code = ref('')
onMounted(() => {
    const wow = new WOW({})
    wow.init();
    code.value = `<div class="wow fadeInUp file-content">
            <div class="file-content-main">
                <div class="main-title">Manifest 源代码</div>
                <highlightjs language="JavaScript" :autodetect="false" :code="code"></highlightjs>

            </div>
        </div>`
})
function exitClick() {
    console.log('点击')
    router.push('/userResultPage/foundation')
}
</script>
<style lang="scss" scoped>
.file-class {
    background-color: rgb(235, 242, 255);
}

.file-box {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.1);

    .iconfont:hover {
        background-color: #ccc;
    }

    .file-title {
        width: 70%;
        margin: 0 auto;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-60px);
    }
}

.file-content {
    margin-top: 60px;
    padding: 60px;
    z-index: -5;
    min-height: 820px;

    .file-content-main {
        background-color: #fff;
        box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.1);
        width: 90%;
        margin: 0px auto;
        padding: 30px 35px;
        border-radius: 10px;

        .main-title {
            font-weight: 600;
            margin-left: 7px;
            margin-bottom: 10px;
        }
    }
}

.hljs-container {
    position: relative;
    display: block;
    width: 600px;
    padding: 30px 5px 2px;
    overflow-x: hidden;
    line-height: 20px;
    text-align: left;
    background: #21252b;
    box-shadow: 0 10px 30px 0 rgb(0 0 0 / 40%);
}

/** 3个点 */
.hljs-container::before {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 12px;
    height: 12px;
    overflow: visible;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;
    white-space: nowrap;
    text-indent: 75px;
    background-color: #fc625d;
    border-radius: 16px;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    content: attr(codetype);
}

/** 滚动条 */
:deep(.hljs) {
    overflow-x: auto;
}

:deep(.hljs::-webkit-scrollbar) {
    width: 12px !important;
    height: 12px !important;
}

:deep(.hljs::-webkit-scrollbar-thumb) {
    height: 30px !important;
    background: #d1d8e6;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 19px;
    opacity: 0.8;
}

:deep(.hljs::-webkit-scrollbar-thumb:hover) {
    background: #a5b3cf;
    background-clip: content-box;
    border: 2px solid transparent;
}

:deep(.hljs::-webkit-scrollbar-track-piece) {
    width: 30px;
    height: 30px;
    background: #333;
}

::-webkit-scrollbar-button {
    display: none;
}
</style>