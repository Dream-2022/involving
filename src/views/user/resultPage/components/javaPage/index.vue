<template>
    <div class="file-class">
        <div class="wow fadeInDown file-box">
            <div class="icon-box" @click="exitClick">
                <span class="iconfont icon-left"
                    style="border-radius:0 25px 25px 0;padding:22px;padding-left: 20px;"></span>
            </div>
            <span class="file-title">Java 文件</span>
        </div>
        <div class="wow fadeInUp file-content">
            <div class="file-content-main">
                <div class="main-title">Java 源代码</div>
                <div style="display: flex; width: 100%;">
                    <div class="content-left">
                        <div style="font-size: 14px;margin-bottom: 10px;">目录</div>
                        <el-tree style="max-width: 600px; " node-key="id" :default-checked-keys="treeArr"
                            @check="currentChecked" :data="userJavaDetail" :props="defaultProps" accordion
                            @node-click="handleNodeClick" />
                    </div>
                    <div class="content-right" v-if="isCode">
                        <div style="margin-right: 10px;">&nbsp;</div>
                        <highlightjs language="JavaScript" :autodetect="false" :code="code" style="max-width:900px">
                        </highlightjs>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import 'highlight.js/styles/stackoverflow-light.css';// 可以切换其它样式风格，例如黑色主题
import 'highlight.js/lib/common';
import WOW from "wow.js";
import { getJavaAPI, getJavaInfoAPI } from '@/apis/apkInfo.js'
const router = useRouter();
const route = useRoute();
const userJavaDetail = ref([])
let code = ref('')
let isCode = ref(false)
onMounted(async () => {
    const wow = new WOW({})
    wow.init();
    let md5 = route.params.md5;
    console.log(md5)
    const res = await getJavaAPI(md5, 'v')
    console.log(res.data)
    userJavaDetail.value = JSON.parse(res.data.data)
    userJavaDetail.value = userJavaDetail.value.children
    console.log(userJavaDetail.value)
})
//点击结点
async function handleNodeClick(SelectedObj) {
    let md5 = route.params.md5
    console.log(SelectedObj.path)
    if(SelectedObj.path.endsWith('.java')==true){
        const res = await getJavaInfoAPI('v', md5, SelectedObj.path)
        console.log(res.data.data)
        code.value = res.data.data
        isCode.value = true
    }
}
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
            margin-bottom: 20px;
        }

        .content-left {
            height:1000px;
            overflow-y:auto;
            padding: 10px 0;
            flex: 1;
            border-right: 1.5px solid #ccc;
        }

        .content-right {
            display: flex;
            height:1000px;
            overflow-y:auto;
            flex: 2;
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