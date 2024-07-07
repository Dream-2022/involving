<template>
    <div class="file-class">
        <div class="wow fadeInDown file-box">
            <div class="icon-box" @click="exitClick">
                <span class="iconfont icon-left"
                    style="border-radius:0 25px 25px 0;padding:22px;padding-left: 20px;"></span>
            </div>
            <span class="file-title">关于我们</span>
        </div>
        <div class="wow fadeInUp file-content">
            <div class="file-content-main">
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import WOW from "wow.js";
const router = useRouter();
onMounted(() => {
    const wow = new WOW({})
    wow.init();
})
function exitClick() {
    console.log('点击')
    router.push('/')
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
        width: 70%;
        margin: 0px auto;
        padding: 30px 35px;
        border-radius: 10px;

        @media (max-width: 765px) {
            width: 90%;
        }

        @media (min-width: 765px) and (max-width: 1024px) {
            width: 80%;
        }

        @media (min-width: 1024px) {}
    }
}
</style>