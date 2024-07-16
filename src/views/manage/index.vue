<template>
    <div class="result-page">
        <div class="wow animate__fadeInLeft left-box">
            <div class="navigation-tran">
                <div>
                    <img src="@/assets/img/logo2.png" class="navigation-logo"
                        @click="() => $router.push('../../userMainPage')" />
                </div>
                <div class="navigation-title" v-if="!isCollapse" @click="() => $router.push('../../userMainPage')">
                </div>
            </div>
            <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
                <RouterLink :to="'userManage'">
                    <el-menu-item index="1">
                        <span class="iconfont icon-user" style="font-size: 21px;"></span>
                        <template #title>用户管理</template>
                    </el-menu-item>
                </RouterLink>
                <RouterLink :to="'analysisManage'">
                    <el-menu-item index="2">
                        <span class="iconfont icon-analysis"></span>
                        <template #title>分析管理</template>
                    </el-menu-item>
                </RouterLink>
                <RouterLink :to="'templateView'">
                    <el-menu-item index="3">
                        <span class="iconfont icon-book"></span>
                        <template #title>范本管理</template>
                    </el-menu-item>
                </RouterLink>
                <RouterLink :to="'blackWhite'">
                    <el-menu-item index="4">
                        <span class="iconfont icon-cangkukucun"></span>
                        <template #title>黑白名单库</template>
                    </el-menu-item>
                </RouterLink>
            </el-menu>
        </div>
        <div class="right-box">
            <div class="wow animate__fadeInDown navigation">
                <span class="iconfont icon-bars" @click="expandClick"></span>
                <div class="navigation-icon">亲爱的管理员，欢迎进入 GoodAn 管理端</div>
            </div>
            <div class="content-box">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onUnmounted, onMounted, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router';
import WOW from "wow.js";
import { useStaticDataStore } from '@/stores/staticDataStore.js'
const staticDataStore = useStaticDataStore()
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
const router = useRouter();
let staticDataList = ref([])
const isCollapse = ref(false)//导航栏
let disposed = ref(false)//判断图表是否显示
let myChart = null
onMounted(() => {
    const wow = new WOW({})
    wow.init();
    if (staticDataStore.staticDataList != null) {
        staticDataList.value = staticDataStore.staticDataList
    }
    else if (localStorage.getItem('staticDataList') != null) {
        staticDataList.value = JSON.parse(localStorage.getItem('staticDataList'))
    }
    //判断导航栏是否展开
    let diva = document.querySelector(".navigation-icon")
    var w = document.documentElement.clientWidth;
    if (diva && w > 800) {
        diva.classList.remove('navigation-icon-length')
    } else if (diva && w <= 800) {
        diva.classList.add('navigation-icon-length')
    }
    if (isCollapse.value == false) {
        setChart()
    }
})
//导航栏的自动收缩
function displayWindowSize() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    let diva = document.querySelector(".navigation-icon")
    if (w < 800) {//如果页面宽度小于，点击展开导航按钮
        isCollapse.value = true
        if (disposed.value == true) {
            console.log(diva)
            if (diva) {
                console.log(diva)
                diva.classList.add('navigation-icon-length')
            }
            myChart.dispose()
            disposed.value = false
        }
    } else if (w >= 800) {
        isCollapse.value = false
        if (disposed.value == false) {
            if (diva) {
                diva.classList.remove('navigation-icon-length')
                setChart()
            }
        }
    }
}
// 监听页面宽度（调整页面导航）
displayWindowSize();
window.addEventListener("resize", displayWindowSize);
let setChart = () => {
    let chartDom = document.querySelector(".navigation-title");
    myChart = echarts.init(chartDom);
    let option = {
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: 'GoodAn',
                        fontSize: 24,
                        fontWeight: 'bold',
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: 'transparent',
                        stroke: '#116DFF',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 8000,
                        loop: true,
                        keyframes: [
                            {
                                percent: 0.5,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 200,
                                    lineDash: [200, 0]
                                }
                            },
                            {
                                // Stop for a while.
                                percent: 0.1,
                                style: {
                                    fill: '#116DFF'
                                }
                            },
                            {
                                percent: 1,
                                style: {
                                    fill: '#116DFF'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    onUnmounted(() => {
        myChart.dispose();
        myChart = null;
    });
}
//导航栏的展开/关闭
function expandClick() {
    //设置右侧昵称的右边距
    let diva = document.querySelector(".navigation-icon")
    if (isCollapse.value == false) {
        diva.classList.add('navigation-icon-length')
    } else {
        diva.classList.remove('navigation-icon-length')
    }
    isCollapse.value = !isCollapse.value
    //将goodan图表隐藏
    let chartDom = null
    setTimeout(() => {
        chartDom = document.querySelector(".navigation-title");
        if (chartDom) {
            setChart()
            disposed.value = true
        }
    }, 1000);
}
</script>
<style lang="scss" scoped>
.result-page {
    background-color: rgb(235, 242, 255);
    display: flex;
    height: 100vh;

    .left-box {
        background-color: #fff;
        box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
        height: 100vh;
        overflow-y: auto;
        z-index: 20;

        .navigation-tran {
            padding: 15px 17px;
            height: 40px;
            display: flex;
            flex: 0.9;


            @media (max-width: 765px) {
                flex: 1.5;
            }

            @media (min-width: 765px) and (max-width: 1024px) {}

            @media (min-width: 1024px) {}

            .navigation-logo {
                margin-top: 6px;
                width: 30px;
                height: 30px;
                border-radius: 10px;
            }

            .navigation-title {
                height: 50px;
                width: 120px;
            }
        }

        .el-menu {
            height: 100%;
            border: none;

            a {
                text-decoration: none;
                text-align: center;
                cursor: pointer;
            }

            .el-menu-item.is-active {
                border-right: 1.5px solid $title-color;
                background-color: rgb(227, 240, 255);
                color: $title-color;
            }

            .el-sub-menu__title {
                .iconfont {
                    overflow: visible;
                    visibility: visible;
                    height: auto;
                }

                color: #fff;
            }

            .is-active {
                background-color: rgb(243, 249, 254);

                span {
                    color: $title-color;
                }

                .el-icon {
                    color: $title-color;
                }
            }
        }

        .iconfont {
            color: #065fed;
            font-size: 20px;
            margin-right: 12px;
        }

        .icon-safety1,
        .icon-copy {
            font-size: 18px;
        }
    }

    .right-box {
        background-color: rgb(235, 242, 255);
        flex: 1;
        height: 100vh;
        overflow-y: auto;

        .navigation {
            display: flex;
            height: 70px;
            width: 100%;
            background-color: $back-color;
            line-height: 70px;
            padding: 0 20px;
            position: fixed;
            top: 0;
            z-index: 9;
            box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.05);

            .icon-bars {
                font-size: 24px;
                color: $title-color;
                cursor: pointer;
                color: #fff;
            }

            .navigation-icon {
                display: inline-block;
                color: #fff;
                line-height: 70px;
                flex: auto;
                margin-right: 260px;
                text-align: right;

                .el-divider {
                    background-color: $title-color;
                    height: 40px;
                    margin-right: 20px;
                    margin-left: 10px;
                    border-left: 1px solid $title-color;
                }

                .iconfont {
                    margin-right: 15px;
                }

                .iconfont::before {
                    color: $title-color;
                    cursor: pointer;
                    font-size: 20px;
                }

                .portrait-box {
                    cursor: pointer;

                    .icon-down1::before {
                        font-size: 14px;
                        margin-left: 8px;
                        color: $title-color;
                    }

                    .portrait-nickname {
                        display: inline-block;
                        transform: translateY(-2px);
                        cursor: pointer;
                        font-size: 15px;
                        margin-left: 10px;
                    }
                }

                .el-col {
                    display: inline-block;
                    transform: translateY(27px);

                    .el-dropdown-menu:hover {
                        border: none;
                    }
                }

                .navigation-button:hover {
                    cursor: pointer;
                }
            }

            .navigation-icon-length {
                margin-right: 130px;
            }
        }

        .content-box {
            padding-top: 70px;
        }
    }

    ::-webkit-scrollbar {
        width: 2.5px;
    }

    /* 滚动条轨道 */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* 滚动条滑块 */
    ::-webkit-scrollbar-thumb {
        background: rgb(189, 198, 207);
    }

    /* 当鼠标移上滚动条时，滑块的样式 */
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(67, 144, 233);
    }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu-item-group__title {
    padding: 0px;
}

.el-dropdown-menu {
    padding: 0 5px 15px 5px;
}

.el-dropdown-menu__item {
    width: 150px;
    display: inline;
    color: #fff;
    text-align: center;

    .iconfont {
        margin-right: 5px;
    }
}

.el-scrollbar {
    .avatar {
        display: flex;
        text-align: center;

        .avatar-box {
            margin: 5px auto;
            margin-top: 20px;

            .drop-img {
                width: 50px;
                height: 50px;
                text-align: center;
                border-radius: 50px;
            }
        }

        .menu-item {
            margin-left: 20px;
        }

    }


}
</style>