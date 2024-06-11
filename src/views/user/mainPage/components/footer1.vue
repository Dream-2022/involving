<template>
    <div class="box">
        <div class="footer-title">
            <el-divider direction="vertical" />
            <div class="title-box">范本库</div>
            <div class="more-view">查看更多<span class="iconfont icon-Rightyou"></span></div>
        </div>
        <div class="template-boxes">
            <div class="template-box" v-for="item in templateList.slice(0, 6)" :key="item">
                <div class="template-title">{{ item.essayTitle }}</div>
                <div class="template-bottom">
                    <div class="first-label">{{ item.labelList[0] }}</div>
                    <div class="second-label">{{ item.labelList[1] }}</div>
                    <div class="name-label">{{ item.essayWriter }}</div>
                    <div class="time-label">{{ item.publicationTime }}</div>
                </div>
            </div>
        </div>
        <div>
            <img src="@/assets/img/book.png" class="template-img">
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { getTemplateAPI } from '@/apis/mainPage.js'
//获取范本库
const res = await getTemplateAPI('1', 'v')
templateList.value = res.data.data.records
console.log(templateList.value)
templateList.value.forEach(item => {
    item.labelList = item.essayLabel.split(';');
})
onMounted(() => {
    //范本库超出范围
    displayWindowSize()
})
//监听页面
window.addEventListener("resize", displayWindowSize);
function displayWindowSize() {
    let footer1 = null
    let templateBoxes = null
    setTimeout(() => {
        footer1 = document.querySelector('.footer1');
        templateBoxes = document.querySelector('.template-boxes');
        if (templateBoxes.offsetHeight + 20 + 70 < footer1.offsetHeight) {
            const templateBoxItems = templateBoxes.querySelectorAll('.display-none');
            if (templateBoxItems.length > 0) {
                templateBoxItems[0].classList.remove('display-none')
            }
        }
        if (templateBoxes.offsetHeight + 20 + 70 < footer1.offsetHeight) {
            const templateBoxItems = templateBoxes.querySelectorAll('.display-none');
            if (templateBoxItems.length > 0) {
                templateBoxItems[0].classList.remove('display-none')
            }
        }
        if (templateBoxes.offsetHeight + 20 > footer1.offsetHeight) {
            const templateBoxItems = templateBoxes.querySelectorAll('.template-box:not(.display-none)');
            if (templateBoxItems.length > 0) {
                templateBoxItems[templateBoxItems.length - 1].classList.add('display-none')
            }
        }
        if (templateBoxes.offsetHeight + 20 > footer1.offsetHeight) {
            const templateBoxItems = templateBoxes.querySelectorAll('.template-box:not(.display-none)');
            if (templateBoxItems.length > 0) {
                templateBoxItems[templateBoxItems.length - 1].classList.add('display-none')
            }
        }
    }, 0)
}
</script>
<style lang="scss" scoped>
.box {
    border-radius: 10px;
    position: relative;
    grid-area: footer1;

    .footer-title {
        display: flex;
        align-items: center;
        border-radius: 10px 10px 0 0;
        height: 40px;
        line-height: 25px;
        border-bottom: 1px solid #ccc;

        .el-divider {
            height: 13px;
            border-left: 5px solid $title-color;
            margin-right: 4px;
        }

        .title-box {
            color: $title-color;
            font-weight: 600;
            margin-right: auto
        }

        .more-view {
            font-size: 12px;
            color: #7a7a7a;
            margin-right: 8px;
            cursor: pointer;
        }

        .iconfont::before {
            font-size: 12px;
        }
    }

    .template-boxes {
        word-wrap: break-word;
        font-size: 14px;
        padding: 15px 10px 0 15px;

        .template-box {
            margin-bottom: 6px;
            padding-bottom: 10px;
            // border-bottom: 1px solid #ccc;

            .template-title {
                margin-bottom: 5px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
            }

            .template-bottom {
                font-size: 12px;
                display: flex;
                flex-wrap: wrap;
                line-height: 20px;
                align-items: center;

                .first-label {
                    background-color: $button-color;
                    color: #fff;
                    border-radius: 5px;
                    padding: 0 5px;
                }

                .second-label {
                    margin-left: 5px;
                    margin-right: 8px;
                    background-color: #e6eaf2;
                    color: $button-color;
                    border-radius: 5px;
                    padding: 0 5px;
                }

                .name-label {
                    margin-right: auto;
                }

                .time-label {
                    @media (max-width: 765px) {}

                    @media (min-width: 765px) and (max-width: 1024px) {
                        display: none;
                    }

                    @media (min-width: 1024px) {}
                }
            }

        }
    }

    .template-img {
        height: 60px;
        position: absolute;
        bottom: 0;
        right: 10%;
    }
}
</style>