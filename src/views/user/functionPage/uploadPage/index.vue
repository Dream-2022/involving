<template>
    <div class="middle-box">
        <div class="wow animate__jello middle-title">APK分析</div>
        <div class="wow fadeInUp content-box">
            <div class="content-title">
                <RouterLink active-class="title-active" :to="'/userUploadPage/file'">文件</RouterLink>
                <RouterLink active-class="title-active" :to="'/userUploadPage/URL'">URL</RouterLink>
                <RouterLink active-class="title-active" :to="'/userUploadPage/search'">搜索</RouterLink>
            </div>
            <RouterView></RouterView>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import WOW from "wow.js";
onMounted(() => {
    const wow = new WOW({})
    wow.init();
})
</script>
<style lang="scss" scoped>
.middle-box {
    width: 40%;
    min-width: 600px;
    margin: 120px auto;
    padding-bottom: 50px;
    position: relative;

    .middle-title {
        height: 120px;
        font-weight: 600;
        font-size: 24px;
        color: #404040;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content-box {
        border-radius: 5px;
        box-shadow: 2px 20px 50px 12px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
        background-color: #fff;
        padding: 40px 30px 25px 30px;

        .content-title {
            height: 40px;
            line-height: 40px;
            display: flex;
            border-bottom: 1px solid #ccc;

            a {
                text-decoration: none;
                color: $word-black-color;
                width: 100px;
                text-align: center;
                cursor: pointer;
            }

            .title-active {
                border-bottom: 3px solid $title-color;
            }
        }
    }
}
</style>
