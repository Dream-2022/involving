<template>
    <div class="background">
        <div class="banner bg-image1"></div>
        <div class="wow animate__fadeInDown navigation-box">
            <span>
                <img src="@/assets/img/logo2.png" @click="() => $router.push('../../userMainPage')" />
            </span>
            <span class="navigation-title" @click="() => $router.push('../../userMainPage')"></span>
            <span :class="widthValue == true ? '' : 'disabled'">
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
                        <RouterLink active-class="option-active" :to="'/userTemplatePage'" @click="backClick">范本库
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink active-class="option-active" :to="'/userMemberPage'" @click="backClick">会员信息
                        </RouterLink>
                    </li>
                </ul>
            </span>
            <div class="navigation-icon" v-if='userInfo != null'>
                <span class="iconfont icon-lingdang-xianxing"></span>
                <span class="iconfont icon-wenhao-xianxingyuankuang"
                    @click="() => $router.push('/userIntroducePage')"></span>
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
                                    <img :src="userInfo?.userIconPath == '' ? require('@/assets/img/title.png') : avatar"
                                        class="drop-img">
                                    <div>{{ userInfo.userName }}</div>
                                </div>
                            </div>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="personVisible = true">我的资料</el-dropdown-item>
                                <span :class="widthValue == true ? 'disabled' : ''">
                                    <el-dropdown-item>
                                        <RouterLink active-class="option-active" :to="'/userRecentPage'"
                                            @click="backClick">
                                            最近分析
                                        </RouterLink>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <RouterLink active-class="option-active" :to="'/userRecentPage'"
                                            @click="backClick">
                                            我的分析
                                        </RouterLink>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <RouterLink active-class="option-active" :to="'/userRecentPage'"
                                            @click="backClick">
                                            apk分析
                                        </RouterLink>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <RouterLink active-class="option-active" :to="'/userRecentPage'"
                                            @click="backClick">
                                            黑白名单库
                                        </RouterLink>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <RouterLink active-class="option-active" :to="'/userRecentPage'"
                                            @click="backClick">
                                            范本库
                                        </RouterLink>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <RouterLink active-class="option-active" :to="'/userRecentPage'"
                                            @click="backClick">
                                            会员信息
                                        </RouterLink>
                                    </el-dropdown-item>
                                </span>
                                <el-dropdown-item @click="signOutClick">
                                    <span class="iconfont icon-exit"></span>
                                    &nbsp;退出登录
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </span>
            </div>
            <div class="navigation-icon" v-else>
                <span>
                    <span class="iconfont icon-wenhao-xianxingyuankuang"></span>
                    <el-divider direction="vertical" class="divider" />
                </span>
                <span class="navigation-button" @click="signOutClick">登录&nbsp;</span>
                <span style="font-size: 14px;">&nbsp;或&nbsp;</span>
                <span class="navigation-button" @click="signOutClick">&nbsp;注册
                </span>
            </div>
        </div>
        <RouterView></RouterView>
        <el-dialog v-model="personVisible" title="个人资料" width="500">
            <div class="bindBox">
                <table class="table">
                    <tr class="tr">
                        <td class="td">头像</td>
                        <td class="td"><img class="iconImg" :src="avatar" alt=""></td>
                        <td class="td">
                            <el-button type="small" color="#547BF1" @click="updateClick">更换头像</el-button>
                            <input class="fileInput" type="file" accept="image/*" style="display: none;" @change="handleAvatarChange">
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
                <div style="line-height: 35px; margin-top: 20px;">已成功邀请 <strong style="font-size: 18px;">{{friendNum}}</strong>
                    个好友，累计获得 <strong style="font-size: 18px;">{{friendNum*200}}</strong> 积分
                </div>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="personVisible = false">关闭</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { onUnmounted, onMounted, getCurrentInstance, ref } from "vue";
import WOW from "wow.js";
import { useRouter } from 'vue-router';
import { useUserStore } from "@/stores/userStore";
import { getFriendAPI, editAvatarAPI } from '@/apis/mainPage.js'
import { ElMessage } from "element-plus";
const router = useRouter();
const userStore = useUserStore()
let userInfo = ref([])
let widthValue = ref(true)
let personVisible = ref(false)//个人资料的弹窗是否显示
let avatar=ref('')//头像
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
let friendNum=ref(0)
onMounted(async() => {
    handleResize()
    const wow = new WOW({})
    wow.init();
    userStore.initialize()
    userInfo.value = userStore.user
    avatar.value=userInfo.value.userIconPath
    setChart()
    //获取邀请好友个数
    const res=await getFriendAPI(userInfo.value.userMail,'v')
    friendNum.value=res.data.data
})
//点击更换头像
function updateClick(){
    let fileInput=document.querySelector('.fileInput')
      if (fileInput) {
        fileInput.click();
      }
}
const handleAvatarChange = (async(event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            avatar.value= e.target.result; // 更新头像图片
            console.log(avatar.value)
            var blob = new Blob([avatar.value], { type: 'image/jpeg' });
            const res =editAvatarAPI(new File([blob], '123.png', { type: 'image/jpeg' }),userInfo.value.userMail,'v')
            console.log(res.data)
            ElMessage.success('头像更换成功！')
            userInfo.value.userIconPath=avatar.value
            console.log(userInfo.value)
            localStorage.setItem("user",JSON.stringify(userInfo.value))
            userStore.initialize()
        };
        reader.readAsDataURL(file);
    }
});
window.addEventListener('resize', handleResize)
function handleResize() {
    if (window.innerWidth < 1370) {
        widthValue.value = false
    } else if (window.innerWidth >= 1370) {
        widthValue.value = true
    }
}
//点击登录或者退出登录
function signOutClick() {
    localStorage.removeItem('user')
    router.push('/login')
}
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

    a {
        display: inline-block;
        text-decoration: none;
        color: $word-black-color;
        width: 100px;
        padding: 0;
        text-align: center;
        cursor: pointer;
    }
}

.disabled {
    display: none;
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
            .iconImg{
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

        .fileTd {
            line-height: 10px;
            display: flex;
            align-items: center;
            justify-content: left;
        }
    }
}
</style>