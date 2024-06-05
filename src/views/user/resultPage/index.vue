<template>
    <div class="result-page">
        <div class="left-box">
            <div class="navigation-tran">
                <div>
                    <img src="@/assets/img/logo2.png" class="navigation-logo"
                        @click="() => $router.push('../../userMainPage')" />
                </div>
                <div class="navigation-title" v-if="!isCollapse" @click="() => $router.push('../../userMainPage')">
                </div>
            </div>
            <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
                <RouterLink :to="'foundation'">
                    <el-menu-item index="1">
                        <span class="iconfont icon-info1"></span>
                        <template #title>基本信息</template>
                    </el-menu-item>
                </RouterLink>
                <RouterLink :to="'certificate'">
                    <el-menu-item index="2">
                        <span class="iconfont icon-Certificate"></span>
                        <template #title>证书信息</template>
                    </el-menu-item>
                </RouterLink>
                <RouterLink :to="'application'">
                    <el-menu-item index="3">
                        <span class="iconfont icon-list"></span>
                        <template #title>应用权限</template>
                    </el-menu-item>
                </RouterLink>
                <el-sub-menu index="4">
                    <template #title>
                        <span class="iconfont icon-safety1"></span>
                        <span>安全分析</span>
                    </template>
                    <RouterLink :to="'security'">
                        <el-menu-item index="4-1" @click="handleMenuItemClick('scrollspyHeading1')">
                            可浏览的Activity
                        </el-menu-item>
                        <el-menu-item index="4-2" @click="handleMenuItemClick('scrollspyHeading2')">
                            网络安全配置
                        </el-menu-item>
                        <el-menu-item index="4-3" @click="handleMenuItemClick('scrollspyHeading3')">
                            证书分析
                        </el-menu-item>
                        <el-menu-item index="4-4" @click="handleMenuItemClick('scrollspyHeading4')">
                            Manifest分析
                        </el-menu-item>
                        <el-menu-item index="4-5" @click="handleMenuItemClick('scrollspyHeading5')">
                            API调用分析
                        </el-menu-item>
                        <el-menu-item index="4-6" @click="handleMenuItemClick('scrollspyHeading6')">
                            源代码分析
                        </el-menu-item>
                        <el-menu-item index="4-7" @click="handleMenuItemClick('scrollspyHeading7')">
                            动态库分析
                        </el-menu-item>
                        <el-menu-item index="4-8" @click="handleMenuItemClick('scrollspyHeading8')">
                            文件分析
                        </el-menu-item>
                    </RouterLink>
                </el-sub-menu>
                <el-sub-menu index="5">
                    <template #title>
                        <span class="iconfont icon-plus"></span>
                        <span>溯源取证</span>
                    </template>
                    <RouterLink :to="'traceability'">
                        <el-menu-item index="5-1" @click="handleMenuItemClick('traceabilityHeading1')">
                            滥用权限
                        </el-menu-item>
                        <el-menu-item index="5-2" @click="handleMenuItemClick('traceabilityHeading2')">
                            IP地图
                        </el-menu-item>
                        <el-menu-item index="5-3" @click="handleMenuItemClick('traceabilityHeading3')">
                            域名检测
                        </el-menu-item>
                        <el-menu-item index="5-4" @click="handleMenuItemClick('traceabilityHeading4')">
                            手机号码
                        </el-menu-item>
                        <el-menu-item index="5-5" @click="handleMenuItemClick('traceabilityHeading5')">
                            网址
                        </el-menu-item>
                        <el-menu-item index="5-6" @click="handleMenuItemClick('traceabilityHeading6')">
                            Firebase实例
                        </el-menu-item>
                        <el-menu-item index="5-7" @click="handleMenuItemClick('traceabilityHeading7')">
                            邮箱
                        </el-menu-item>
                        <el-menu-item index="5-8" @click="handleMenuItemClick('traceabilityHeading8')">
                            追踪器
                        </el-menu-item>
                        <el-menu-item index="5-9" @click="handleMenuItemClick('traceabilityHeading9')">
                            密钥凭证
                        </el-menu-item>
                        <el-menu-item index="5-10" @click="handleMenuItemClick('traceabilityHeading10')">
                            字符串
                        </el-menu-item>
                    </RouterLink>
                </el-sub-menu>
                <el-sub-menu index="6">
                    <template #title>
                        <span class="iconfont icon-thlarge"></span>
                        <span>组件信息</span>
                    </template>
                    <RouterLink :to="'subassembly'">
                        <el-menu-item index="6-1">Activity组件</el-menu-item>
                        <el-menu-item index="6-2">Service组件</el-menu-item>
                        <el-menu-item index="6-3">Receiver组件</el-menu-item>
                        <el-menu-item index="6-4">Provider组件</el-menu-item>
                    </RouterLink>
                </el-sub-menu>
                <RouterLink :to="'thirdParty'">
                    <el-menu-item index="7">
                        <span class="iconfont icon-buffer1"></span>
                        <template #title>第三方SDK</template>
                    </el-menu-item>
                </RouterLink>
                <RouterLink :to="'listOfFiles'">
                    <el-menu-item index="8">
                        <span class="iconfont icon-copy"></span>
                        <template #title>文件列表</template>
                    </el-menu-item>
                </RouterLink>
                <RouterLink :to="'unsullied'">
                    <el-menu-item index="9">
                        <span class="iconfont icon-bar-chart-2"></span>
                        <template #title>污点分析</template>
                    </el-menu-item>
                </RouterLink>
            </el-menu>
        </div>
        <div class="right-box">
            <div class="navigation">
                <span class="iconfont icon-bars" @click="expandClick"></span>
                <div class="navigation-icon">
                    <span class="iconfont icon-lingdang-xianxing"></span>
                    <span class="iconfont icon-wenhao-xianxingyuankuang"></span>
                    <el-divider direction="vertical" class="divider" />
                    <el-col :span="8">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <span class="portrait-box">
                                    <span class="portrait-nickname">李华</span>
                                    <span class="iconfont icon-down1"></span>
                                </span>
                            </span>
                            <template #dropdown>
                                <div class="avatar">
                                    <div class="avatar-box">
                                        <img src="@/assets/img/avatar.jpeg" class="drop-img">
                                        <div>李华</div>
                                    </div>
                                </div>
                                <el-dropdown-menu>
                                    <el-dropdown-item>我的资料</el-dropdown-item>
                                    <el-dropdown-item>上传分析</el-dropdown-item>
                                    <el-dropdown-item><span class="iconfont icon-exit"></span>退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-col>
                </div>
            </div>
            <div class="content-box">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onUnmounted, onMounted, getCurrentInstance } from "vue";
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;

const isCollapse = ref(false)//导航栏
let disposed = ref(false)//判断图表是否显示
let myChart = null
function handleMenuItemClick(scrollId) {
    // 通过 Vue Router 导航到了目标页面  
    setTimeout(() => {
        const element = document.getElementById(scrollId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 0);
}
onMounted(() => {
    //判断导航栏是否展开
    let diva = document.querySelector(".navigation-icon")
    var w = document.documentElement.clientWidth;
    console.log(diva)
    if (diva && w > 800) {
        console.log(diva)
        diva.classList.remove('navigation-icon-length')
    } else if (diva && w <= 800) {
        diva.classList.add('navigation-icon-length')
    }
    if (isCollapse.value == false) {
        setChart()
    }
});
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
            console.log(diva)
            if (diva) {
                console.log(diva)
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
    console.log(chartDom)
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
    display: flex;
    height: 100vh;

    .left-box {
        box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
        height: 100vh;
        overflow-y: auto;
        z-index: 10;

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
            background-color: rgb(255, 255, 255);
            line-height: 70px;
            padding: 0 20px;
            position: fixed;
            top: 0;
            z-index: 9;

            .icon-bars {
                font-size: 24px;
                color: $title-color;
                cursor: pointer;
            }

            .navigation-icon {
                display: inline-block;
                color: $title-color;
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
        background: rgb(104, 174, 255);
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

// D:/javaj/Involving/involvingFraud/node_modules/element-plus/dist/index.css</style>