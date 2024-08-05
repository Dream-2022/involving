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
                <div v-if="!isDynamic">
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
                    <!-- <el-sub-menu index="4">
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
                    </el-sub-menu> -->
                    <el-sub-menu index="5">
                        <template #title>
                            <span class="iconfont icon-plus"></span>
                            <span v-if="!isCollapse">溯源取证</span>
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
                            <el-menu-item index="5-7" @click="handleMenuItemClick('traceabilityHeading7')">
                                邮箱
                            </el-menu-item>
                            <el-menu-item index="5-9" @click="handleMenuItemClick('traceabilityHeading9')">
                                密钥凭证
                            </el-menu-item>
                        </RouterLink>
                    </el-sub-menu>
                    <el-sub-menu index="6">
                        <template #title>
                            <span class="iconfont icon-thlarge"></span>
                            <span v-if="!isCollapse">组件信息</span>
                        </template>
                        <RouterLink :to="'subassembly'">
                            <el-menu-item index="6-1">Activity组件</el-menu-item>
                            <el-menu-item index="6-2">Service组件</el-menu-item>
                            <el-menu-item index="6-3">Receiver组件</el-menu-item>
                            <el-menu-item index="6-4">Provider组件</el-menu-item>
                        </RouterLink>
                    </el-sub-menu>
                    <el-menu-item index="7" @click="handleExport">
                        <span class="iconfont icon-buffer1"></span>
                        <template #title>导出为PDF</template>
                    </el-menu-item>
                    <el-menu-item index="8" @click="handleWordExport">
                        <span class="iconfont icon-copy"></span>
                        <template #title>导出为word</template>
                    </el-menu-item>
                    <el-menu-item index="9" @click="handleWordExport">
                        <span class="iconfont icon-shebeidongtai"></span>
                        <template #title>开启动态分析</template>
                    </el-menu-item>
                    <!-- <RouterLink :to="'unsullied'">
                        <el-menu-item index="9">
                            <span class="iconfont icon-bar-chart-2"></span>
                            <template #title>污点分析</template>
                        </el-menu-item>
                    </RouterLink> -->
                </div>
                <div v-else>
                    <RouterLink :to="'foundation'">
                        <el-menu-item index="1">
                            <span class="iconfont icon-info1"></span>
                            <template #title>基本信息</template>
                        </el-menu-item>
                    </RouterLink>
                    <RouterLink :to="'TLS'">
                        <el-menu-item index="2">
                            <span class="iconfont icon-jiesuo"></span>
                            <template #title>关键诈骗站点</template>
                        </el-menu-item>
                    </RouterLink>
                    <RouterLink :to="'run'">
                        <el-menu-item index="3">
                            <span class="iconfont icon-yunhangshipeizhi"></span>
                            <template #title>运行时权限</template>
                        </el-menu-item>
                    </RouterLink>
                    <!-- <RouterLink :to="'address'">
                        <el-menu-item index="4">
                            <span class="iconfont icon--map"></span>
                            <template #title>通联地址分析</template>
                        </el-menu-item>
                    </RouterLink> -->
                    <el-sub-menu index="4">
                        <template #title>
                            <span class="iconfont icon--map"></span>
                            <span v-if="!isCollapse">通联地址分析</span>
                        </template>
                        <RouterLink :to="'address'">
                            <el-menu-item index="4-1"
                                @click="handleMenuItemClick('traceabilityHeading1')">滥用权限</el-menu-item>
                            <el-menu-item index="4-2"
                                @click="handleMenuItemClick('traceabilityHeading2')">IP地图</el-menu-item>
                            <el-menu-item index="4-3"
                                @click="handleMenuItemClick('traceabilityHeading3')">域名</el-menu-item>
                            <el-menu-item index="4-4"
                                @click="handleMenuItemClick('traceabilityHeading4')">URL</el-menu-item>
                        </RouterLink>
                    </el-sub-menu>
                    <RouterLink :to="'screenshot'">
                        <el-menu-item index="5">
                            <span class="iconfont icon-jietu"></span>
                            <template #title>屏幕截图</template>
                        </el-menu-item>
                    </RouterLink>
                </div>
            </el-menu>
            <div class="static-class">
                <span class="iconfont icon-xueyedongtaifenxi" v-if="isDynamic && isCollapse"></span>
                <span class="iconfont icon-youjianico_jingtaimoban" v-if="!isDynamic && isCollapse"></span>
                <span style="margin-left: 40px" v-if="!isCollapse">{{ !isDynamic ? '静态分析' : '动态分析' }}</span>
            </div>
        </div>
        <div class="right-box">
            <div class="wow animate__fadeInDown navigation">
                <span class="iconfont icon-bars" @click="expandClick"></span>
                <div class="navigation-icon" v-if="userInfo != null">
                    <span class="iconfont icon-lingdang-xianxing"></span>
                    <span class="iconfont icon-wenhao-xianxingyuankuang"
                        @click="() => $router.push('/userIntroducePage')"></span>
                    <el-divider direction="vertical" class="divider" />
                    <el-col :span="8">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <span class="portrait-box">
                                    <span class="portrait-nickname">{{ userInfo?.userName }}</span>
                                    <span class="iconfont icon-down1"></span>
                                </span>
                            </span>
                            <template #dropdown>
                                <div class="avatar">
                                    <div class="avatar-box">
                                        <img :src="userInfo?.userIconPath == '' ? require('@/assets/img/title.png') : avatar"
                                            class="drop-img">
                                        <div>{{ userInfo?.userName }}</div>
                                    </div>
                                </div>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="personVisible = true">我的资料</el-dropdown-item>
                                    <el-dropdown-item @click="signOutClick"><span
                                            class="iconfont icon-exit"></span>退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-col>
                </div>
                <div class="navigation-icon" v-else>
                    <div>
                        <span class="iconfont icon-wenhao-xianxingyuankuang"></span>
                        <el-divider direction="vertical" class="divider" />
                        <span class="navigation-button" @click="signOutClick">登录&nbsp;</span>
                        <span style="font-size: 14px;">&nbsp;&nbsp;或&nbsp;&nbsp;</span>
                        <span class="navigation-button" @click="signOutClick">&nbsp;注册
                        </span>
                    </div>
                </div>
            </div>
            <div class="content-box" id="pdfRef">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
    <el-dialog v-model="personVisible" title="个人资料" width="500">
        <div class="bindBox">
            <table class="table">
                <tr class="tr">
                    <td class="td">头像</td>
                    <td class="td"><img class="iconImg" :src="avatar == '' ? require('@/assets/img/title.png') : avatar"
                            alt=""></td>
                    <td class="td">
                        <el-button type="small" color="#547BF1" @click="updateClick">更换头像</el-button>
                        <input class="fileInput" type="file" accept="image/*" style="display: none;"
                            @change="handleAvatarChange">
                    </td>
                </tr>
                <tr class="tr">
                    <td class="td">账号</td>
                    <td class="td">486465444545</td>
                    <td class="td"></td>
                </tr>
                <tr class="tr">
                    <td class="td">邮箱</td>
                    <td class="td">21712204141@qq.com</td>
                    <td class="td"></td>
                </tr>
            </table>
            <div style="line-height: 35px; margin-top: 20px;">已成功邀请 <strong style="font-size: 18px;">{{ friendNum
                    }}</strong>
                个好友，累计获得 <strong style="font-size: 18px;">{{ friendNum * 200 }}</strong> 积分
            </div>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="personVisible = false">关闭</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup>
import { ref, onUnmounted, onMounted, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router';
import WOW from "wow.js";
import { ElMessage } from "element-plus";
import { useUserStore } from '@/stores/userStore.js'
import { useStaticDataStore } from '@/stores/staticDataStore.js'
import { getFriendNumAPI, editAvatarAPI } from '@/apis/mainPage.js'
const userStore = useUserStore()
const staticDataStore = useStaticDataStore()
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
const router = useRouter();
let userInfo = ref(null)
let staticDataList = ref([])
const isCollapse = ref(false)//导航栏
let disposed = ref(false)//判断图表是否显示
let myChart = null
let personVisible = ref(false)//个人资料的弹窗
let avatar = ref('')//头像
let friendNum = ref(0)//邀请好友个数
let isDynamic = ref(true)
function handleMenuItemClick(scrollId) {
    // 通过 Vue Router 导航到了目标页面  
    setTimeout(() => {
        const element = document.getElementById(scrollId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 0);
}
onMounted(async () => {
    //获取是动态分析还是动态分析的地址
    var pathSegments = router.currentRoute.value.href.split('/');
    var secondLast = pathSegments[pathSegments.length - 2];
    if (secondLast == 'dynamic') {
        isDynamic.value = true
    } else {
        isDynamic.value = false
    }
    const wow = new WOW({})
    wow.init();
    if (staticDataStore.staticDataList != null) {
        staticDataList.value = staticDataStore.staticDataList
    }
    else if (localStorage.getItem('staticDataList') != null) {
        staticDataList.value = JSON.parse(localStorage.getItem('staticDataList'))
    }
    //判断导航栏是否展开
    userStore.initialize()
    userInfo.value = userStore.user
    avatar.value = userInfo.value.userIconPath
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
    //获取邀请好友个数
    const res = await getFriendNumAPI(userInfo.value.userMail, 'v')
    friendNum.value = res.data.data
});
import { htmlPdf } from "@/utils/htmlToPDF.js"
// 导出成PDF
const handleExport = (name) => {
    var fileName = '静态分析报告'
    const fileList = document.getElementsByClassName('pdfRef1')   // 很重要
    htmlPdf(fileName, document.querySelector('#pdfRef'), fileList)
}
//导出word
// import 'https://cdn.jsdelivr.net/npm/html-docx-js/dist/html-docx.js'
// import 'https://cdn.jsdelivr.net/npm/file-saver/dist/FileSaver.min.js'
// const handleWordExport = (fileName = 'exported-document.docx') => {
//     let htmlContent = document.querySelector('#pdfRef')
//     // 构建包含 HTML 内容的完整 HTML 文档字符串
//     const fullHtmlContent = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
//       </head>
//       <body>
//         ${htmlContent}
//       </body>
//     </html>
//   `;

//     // 使用 html-docx-js 将 HTML 转换为 Word 文档的 Blob 对象
//     const converted = htmlDocx.asBlob(fullHtmlContent);

//     // 使用 file-saver 保存 Blob 对象为 Word 文档文件
//     FileSaver.saveAs(converted, fileName);
// };
//点击更换头像
function updateClick() {
    let fileInput = document.querySelector('.fileInput')
    if (fileInput) {
        fileInput.click();
    }
}
const handleAvatarChange = (async (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            avatar.value = e.target.result; // 更新头像图片
            console.log(avatar.value)
            var blob = new Blob([avatar.value], { type: 'image/jpeg' });
            const res = editAvatarAPI(new File([blob], '123.png', { type: 'image/jpeg' }), userInfo.value.userMail, 'v')
            console.log(res.data)
            ElMessage.success('头像更换成功！')
            userInfo.value.userIconPath = avatar.value
            console.log(userInfo.value)
            localStorage.setItem("user", JSON.stringify(userInfo.value))
            userStore.initialize()
        };
        reader.readAsDataURL(file);
    }
});
//点击登录或者退出登录
function signOutClick() {
    console.log('login')
    localStorage.removeItem('user')
    router.push('/login')
}
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
    let chartDom = document.querySelector(".navigation-title")
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

        .static-class {
            line-height: 50px;
            margin-left: 20px;
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
            box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.05);

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
        width: 8px;
    }

    /* 滚动条轨道 */
    ::-webkit-scrollbar-track {
        background: #bebebe;
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

.table {
    border: 1px solid #eceffe;
    border-radius: 10px;
    border-collapse: collapse;
    box-sizing: border-box;
    width: 100%;

    .tr:last-child {
        border: 0px;
    }

    .tr {
        display: flex;
        justify-content: space-between;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #eceffe;
        margin-left: 20px;
        margin-right: 20px;

        .td {
            flex: 1;

            .iconImg {
                border-radius: 50px;
            }
        }

        .td:nth-child(1),
        .td:nth-child(2) {
            display: flex;
            justify-content: left;
        }

        .td:nth-child(3) {
            display: flex;
            justify-content: right;
            align-items: center;
        }

        .homeUserInfoAvatar {
            width: 50px;
            height: 50px;
            margin-top: 15px;
            border-radius: 50%;
        }
    }
}
</style>