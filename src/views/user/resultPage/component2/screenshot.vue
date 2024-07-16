<template>
    <div id="pdfRef" class="wow animate__fadeInRight certificate-box pdfRef1">
        <div class="grade">
            <div class="grade-title">屏幕截图</div>
            <div class="grade-content">
                <span v-for="(item) in shotList" :key="item" class="img-box">
                    <img :src="item" class="itemImg">
                </span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
let shotList = reactive([])
onMounted(async () => {
    const result = JSON.parse(localStorage.getItem('dynamicDataList'))
    console.log(result)
    if (result != null && result != undefined && result != '' && result && result.screenshotPathList) {
        shotList.splice(0, shotList.length, ...result.screenshotPathList);
    }
    console.log(shotList)
})
</script>
<style lang="scss" scoped>
.grade {
    box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.1);
    padding: 20px 20px 30px 20px;
    border-radius: 5px;
    width: 94%;
    margin: 20px auto;
    color: $word-black-color;
    background-color: #fff;

    @media (max-width: 765px) {
        padding: 10px 10px;
        width: 90%;
    }

    @media (min-width: 765px) and (max-width: 1024px) {
        width: 92%;
    }

    @media (min-width: 1024px) {}

    .grade-title {
        font-weight: 600;
        margin-left: 7px;
    }

    .grade-content {
        font-size: 15px;
        padding-bottom: 10px;
        margin-left: 7px;
        margin-top: 10px;
        line-height: 24px;
        overflow-x: auto;

        .img-box {
            margin: 0 50px 30px 5px;

            .itemImg {
                width: 200px;
            }

        }

        strong {
            margin-right: 5px;
        }

        div {
            margin-top: 5px;
        }
    }
}
</style>