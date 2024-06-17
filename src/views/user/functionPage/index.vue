<template>
    <div class="background">
        <div class="banner bg-image1"></div>
        <div class="navigation-box">
            <span>
                <img src="@/assets/img/logo2.png" @click="() => $router.push('../../userMainPage')" />
            </span>
            <span class="navigation-title" @click="() => $router.push('../../userMainPage')"></span>
            <ul class="navigation-options">
                <li>
                    <RouterLink active-class="option-active" :to="'/userRecentPage'" @click="backClick">最近分析
                    </RouterLink>
                </li>
                <li>
                    <RouterLink active-class="option-active" :to="'/userMyAnalysisPage'" @click="backClick">我的分析
                    </RouterLink>
                </li>
                <li>
                    <RouterLink active-class="option-active" :to="'/userUploadPage'" @click="backClick">apk分析
                    </RouterLink>
                </li>
                <li>
                    <RouterLink active-class="option-active" :to="'/userBlackWhitePage'" @click="backClick">黑白名单库
                    </RouterLink>
                </li>
                <li>
                    <RouterLink active-class="option-active" :to="'/userMemberPage'" @click="backClick">会员信息
                    </RouterLink>
                </li>
            </ul>
            <div class="navigation-icon" v-if='userInfo!=null'>
                <span class="iconfont icon-lingdang-xianxing"></span>
                <span class="iconfont icon-wenhao-xianxingyuankuang"></span>
                <el-divider direction="vertical" class="divider" />
                <span>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <span class="portrait-box">
                                <span class="portrait-nickname">{{ userInfo.userName }}</span>
                                <span class="iconfont icon-down1"></span>
                            </span>
                        </span>
                        <template #dropdown>
                            <div class="avatar">
                                <div class="avatar-box">
                                    <img :src="imgPath" class="drop-img">
                                    <div>{{ userInfo.userName }}</div>
                                </div>
                            </div>
                            <el-dropdown-menu>
                                <el-dropdown-item>我的资料</el-dropdown-item>
                                <el-dropdown-item>上传分析</el-dropdown-item>
                                <el-dropdown-item><span class="iconfont icon-exit"></span>&nbsp;退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </span>
                <!-- <span class="portrait-box">
                    <span class="portrait-nickname">李华</span>
                    <span class="iconfont icon-down1"></span>
                </span> -->
            </div>
            <div class="navigation-icon" v-else>
                <span>
                    <span class="iconfont icon-wenhao-xianxingyuankuang"></span>
                    <el-divider direction="vertical" class="divider" />
                </span>
                    <span class="navigation-button" @click="loginClick">登录&nbsp;</span>
                    <span style="font-size: 14px;">&nbsp;或&nbsp;</span>
                    <span class="navigation-button" @click="loginClick">&nbsp;注册
                    </span>
            </div>
        </div>
        <RouterView></RouterView>
    </div>
</template>
<script setup>
import { onUnmounted, onMounted, getCurrentInstance, ref } from "vue";
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore()
let userInfo = ref([])
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
onMounted(() => {
    userStore.initialize()
    userInfo.value = userStore.user
    setChart()
})
function backClick() {
    console.log("点击")
    // 获取.banner元素
    var banner = document.querySelector('.banner');

    // 定义背景图片类数组
    var backgroundImageClasses = ['bg-image1', 'bg-image2', 'bg-image3', 'bg-image4', 'bg-image5', 'bg-image6'];
    backgroundImageClasses.forEach(function (className) {
        banner.classList.remove(className);
    });
    // 随机选择一个背景图片类
    var randomIndex = Math.floor(Math.random() * backgroundImageClasses.length);
    var randomImageClass = backgroundImageClasses[randomIndex];

    // 添加背景图片类到.banner元素
    banner.classList.add(randomImageClass);
}
const setChart = () => {
    let chartDom = document.querySelector(".navigation-title");
    let myChart = echarts.init(chartDom);
    // 指定图表的配置项和数据
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

    window.addEventListener("resize", () => {
        myChart.resize();
    });

    onUnmounted(() => {
        myChart.dispose();
    });
}

</script>
<style lang="scss" scoped>
.background {
    position: relative;
    overflow: hidden;
    min-height: 880px;
    background-color: #F2F6FD;

    .navigation-box {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        padding-left: 60px;
        background-color: #fff;
        height: 60px;
        box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.05);

        img {
            height: 40px;
            width: 40px;
        }

        .navigation-title {
            display: inline-block;
            transform: translateY(8px);
            height: 50px;
            width: 120px;
        }

        .navigation-options {
            margin-left: 20px;
            margin-right: auto;
            display: inline-block;
            transform: translateY(-15px);

            ul {
                list-style: none;
            }

            li {
                height: 60px;
                display: inline-block;
                list-style-type: none; //去掉标签默认的左边符号
                text-align: center;
                cursor: pointer;
                margin-left: 30px;

                a {
                    display: inline-block;
                    line-height: 58px;
                    text-decoration: none;
                    color: $word-black-color;
                    width: 100px;
                    text-align: center;
                    cursor: pointer;
                }
            }

            .option-active {
                color: $title-color;
                border-bottom: 3px solid $title-color;
            }
        }

        .navigation-icon {
            position: absolute;
            right: 150px;
            display: inline-block;
            flex: 1;
            line-height: 60px;

            .el-dropdown {
                margin-top: 23px;
            }

            .el-divider {
                background-color: #000;
                height: 40px;
                margin-right: 20px;
                margin-left: 10px;
                border-left: 2px solid #000;
            }

            .iconfont {
                margin-right: 15px;
            }

            .iconfont::before {
                cursor: pointer;
                font-size: 20px;
            }

            .portrait-box {
                cursor: pointer;

                .icon-down1::before {
                    font-size: 14px;
                    margin-left: 8px;
                    color: #767676;
                }

                .portrait-nickname {
                    display: inline-block;
                    transform: translateY(-2px);
                    cursor: pointer;
                    font-size: 15px;
                    margin-left: 10px;
                }
            }
                .navigation-button {
                    cursor: pointer;
                }
        }
    }

    .banner {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 500px;
        /* 设置背景图片高度 */
        // background-image: url("@/assets/upload_back/svg1.png");
        background-size: cover;
        z-index: 0;
    }

    .bg-image1 {
        background-image: url("@/assets/upload_back/svg.png");
    }

    .bg-image2 {
        background-image: url("@/assets/upload_back/svg1.png");
    }

    .bg-image3 {
        background-image: url("@/assets/upload_back/svg2.png");
    }

    .bg-image4 {
        background-image: url("@/assets/upload_back/svg3.png");
    }

    .bg-image5 {
        background-image: url("@/assets/upload_back/svg4.png");
    }

    .bg-image6 {
        background-image: url("@/assets/upload_back/svg5.png");
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