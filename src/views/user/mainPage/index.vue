<template>
    <div class="banner"></div>
    <div class="ground">
        <div class="navigation">
            <div class="wow fadeInDown navigation-tran">
                <div>
                    <img src="@/assets/img/logo2.png" class="navigation-logo"
                        @click="() => $router.push('../../userMainPage')" />
                </div>
                <div class="navigation-title" @click="() => $router.push('../../userMainPage')"></div>
            </div>
            <div class="blank-box"></div>
            <div class="wow fadeInDown navigation-icon" v-if="userInfo != null">
                <div>
                    <span class="iconfont icon-lingdang-xianxing"></span>
                    <span class="iconfont icon-wenhao-xianxingyuankuang"></span>
                    <el-divider direction="vertical" class="divider" />
                </div>
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
                            <el-dropdown-item @click="staticAnalysis('userMyAnalysisPage')">上传分析</el-dropdown-item>
                            <el-dropdown-item @click="signOutClick"><span
                                    class="iconfont icon-exit"></span>&nbsp;退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class="wow fadeInDown navigation-icon" v-else>
                <div>
                    <span class="iconfont icon-wenhao-xianxingyuankuang"></span>
                    <el-divider direction="vertical" class="divider" />
                </div>
                <div class="navigation-portrait">
                    <div class="navigation-button" @click="signOutClick">登录&nbsp;</div>
                    <span style="font-size: 14px;">&nbsp;&nbsp;或&nbsp;&nbsp;</span>
                    <div class="navigation-button" @click="signOutClick">&nbsp;注册
                    </div>
                </div>
            </div>
        </div>
        <div class="wow fadeInLeft component-box">
            <div class="search-word">
                <img src="@/assets/img/word-special.png" />
            </div>
            <div class="search-box">
                <el-input v-model="searchValue" @keyup.enter="searchClick" class="search-content"
                    placeholder="MD5，包名，文件名，APP名称" />
                <el-button color="#065fed" @click="searchClick">搜索</el-button>
            </div>
        </div>
        <div class="wow fadeInRight module-boxes">
            <div class="module-box">
                <img src="@/assets/3D/3-t.png" @click="staticAnalysis('userRecentPage')" />
                <div @click="staticAnalysis('userRecentPage')">最近分析</div>
            </div>
            <div class="module-box">
                <img src="@/assets/3D/private.png" @click="staticAnalysis('userMyAnalysisPage')" />
                <div @click="staticAnalysis('userMyAnalysisPage')">我的分析</div>
            </div>
            <div class="module-box">
                <img src="@/assets/3D/0-t.png" @click="Analysis('userUploadPage', false)" />
                <div @click="Analysis('userUploadPage', false)">静态分析</div>
            </div>
            <div class="module-box">
                <img src="@/assets/3D/1-t.png" @click="Analysis('userUploadPage', true)" />
                <div @click="Analysis('userUploadPage', true)">动态分析</div>
            </div>
            <div class="module-box">
                <img src="@/assets/3D/book-search.png" @click="staticAnalysis('userBlackWhitePage')" />
                <div @click="staticAnalysis('userBlackWhitePage')">黑白名单库</div>
            </div>
            <div class="module-box" @click="staticAnalysis('userMemberPage')">
                <img src="@/assets/3D/2-t.png" />
                <div @click="staticAnalysis('userMemberPage')">会员信息</div>
            </div>
        </div>
        <div class="middle-box">
            <div class="left-boxes">
                <div class="wow fadeInLeft pulse chart1" v-if="userInfo != null">
                    <div id="chart1-content"></div>
                    <el-dropdown @command="handleCommand1">
                        <span class="el-dropdown-link">{{ selectedOption1 }}
                            <span class="iconfont icon-down"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">近一周趋势图</el-dropdown-item>
                                <el-dropdown-item command="b">近两周趋势图</el-dropdown-item>
                                <el-dropdown-item command="c">近一月趋势图</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="wow fadeInLeft chart1" v-else>
                    <span class="chart-title1">检测数量</span>
                    <div class="none-data">暂无数据</div>
                </div>
                <div class="wow fadeInLeft chart2" v-if="userInfo != null">
                    <div id="chart2-content"></div>
                    <el-dropdown @command="handleCommand2">
                        <span class="el-dropdown-link">{{ selectedOption2 }}<span class="iconfont icon-down"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">近一周趋势图</el-dropdown-item>
                                <el-dropdown-item command="b">近两周趋势图</el-dropdown-item>
                                <el-dropdown-item command="c">近一月趋势图</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="wow fadeInLeft chart2" v-else>
                    <span class="chart-title2">会员积分</span>
                    <div class="none-data">暂无数据</div>
                </div>
                <div class="wow fadeInLeft chart3" v-if="userInfo != null">
                    <div id="chart3-content"></div>
                    <el-dropdown @command="handleCommand3">
                        <span class="el-dropdown-link">{{ selectedOption3 }}<span class="iconfont icon-down"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">近一周趋势图</el-dropdown-item>
                                <el-dropdown-item command="b">近两周趋势图</el-dropdown-item>
                                <el-dropdown-item command="c">近一月趋势图</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="wow fadeInLeft chart3" v-else>
                    <span class="chart-title3">邀请好友</span>
                    <div class="none-data">暂无数据</div>
                </div>
                <div class="wow fadeInLeft chart4" v-if="userInfo != null">
                    <div id="chart4-content"></div>
                    <el-dropdown @command="handleCommand4">
                        <span class="el-dropdown-link">{{ selectedOption4 }}<span class="iconfont icon-down"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">近一周趋势图</el-dropdown-item>
                                <el-dropdown-item command="b">近两周趋势图</el-dropdown-item>
                                <el-dropdown-item command="c">近一月趋势图</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="wow fadeInLeft chart4" v-else>
                    <span class="chart-title4">apk检测</span>
                    <div class="none-data">暂无数据</div>
                </div>
                <div class="wow fadeInUp footer1">
                    <div class="footer-title">
                        <el-divider direction="vertical" />
                        <div class="title-box">范本库</div>
                        <div class="more-view">查看更多<span class="iconfont icon-Rightyou"></span></div>
                    </div>
                    <div class="template-boxes">
                        <div class="template-box" v-for="(item, index) in templateList.slice(0, 6)" :key="item"
                            @mouseenter="isDisable[index] = false" @mouseleave="isDisable[index] = true">
                            <span style="display: flex;">
                                <span class="template-title" @click="templateClick(item.essayId)">{{ item?.essayTitle
                                    }}</span>
                                <span @click="temLoadClick(item.essayId)"
                                    style="z-index:10px; color: #4d4d4d;cursor: pointer;"
                                    :class="(isDisable[index] == true) ? 'disabled' : ''">
                                    下载
                                    <i class="iconfont icon-download1" style="margin-left: 5px;"></i>
                                </span>
                            </span>
                            <span class="template-bottom" @click="templateClick(item.essayId)">
                                <span class="first-label" v-if="item.labelList && item.labelList.length > 0">{{
                            item?.labelList[0] }}</span>
                                <span class="second-label" v-if="item.labelList && item.labelList.length > 0">{{
                            item?.labelList[1] }}
                                </span>
                                <span class="name-label">{{ item?.essayWriter }}
                                </span>
                                <span class="time-label">{{ item?.publicationTime }}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src="@/assets/img/book.png" class="template-img">
                    </div>
                </div>
                <div class="wow fadeInUp footer2">
                    <div class="footer-title">
                        <el-divider direction="vertical" />
                        <div class="title-box">最近分析记录</div>
                        <div class="more-view">查看更多<span class="iconfont icon-Rightyou"></span></div>
                    </div>
                    <div class="analysis-boxes">
                        <div class="analysis-box" v-for="item in recentAnalysisList.slice(0, 6)" :key="item">
                            <span class="analysis-top">
                                <span class="analysis-md5">{{ item.fileMd5 }}</span>
                                <span class="analysis-title">{{ item.fileName }}</span>
                            </span>
                            <span class="analysis-bottom">
                                <el-progress :percentage="percentage" :color="customColors" />
                                <span class="first-label" :class="getLabelColor(item.apkDesc)">{{ item.apkDesc }}
                                </span>
                                <span class="second-label">冒充领导、熟人类
                                </span>
                                <span class="time-label">{{ item.detectedTime }}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src="@/assets/img/book.png" class="template-img">
                    </div>
                </div>
            </div>
            <div class="wow fadeInRight right-boxes">
                <div class="footer-title">
                    <el-divider direction="vertical" />
                    <div class="title-box">签到</div>
                    <div class="iconfont icon-jinbi1"></div>
                    <div class="wow fadeInRight Gold">{{ nowPoints }}</div>
                </div>
                <el-calendar ref="calendar">
                    <template #header="{ }">
                        <el-button size="small" @click="selectDate('today')">
                            今天
                        </el-button>
                        <span class="date-content">{{ calendarString }}</span>
                        <div>
                            <el-button size="small" @click="selectDate('prev-month')">
                                上月
                            </el-button>
                        </div>
                        <div>
                            <el-button size="small" @click="selectDate('next-month')">
                                下月
                            </el-button>
                        </div>
                    </template>
                    <template #date-cell="{ data }">
                        <el-row :class="data.isSelected ? 'is-selected' : 'sds'">
                            {{ data.day.split('-').slice(2).join('-') }}
                        </el-row>
                        <div v-for="(item) in signData" :key=item>
                            <div v-if="data.day == item.time && item.data == 1">
                                <div class="iconfont icon-weibiaoti1"></div>
                            </div>
                        </div>
                    </template>
                </el-calendar>
                <div class="button-box">
                    <el-button :disabled="signInValue == true" @click="signInClick" color="#065fed"
                        class="wow fadeInRight">{{
                            signInValue ==
                                true ? '已签到' : '签到'
                        }}</el-button>
                    <div class="prompt">
                        <span>连续签到6天, </span>
                        <span>签到1天可获取100积分</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import "@/assets/fontIcon/iconfont.css";
import { useRouter } from 'vue-router';
import { onUnmounted, onMounted, getCurrentInstance, ref } from "vue";
import { useUserStore } from '@/stores/userStore.js'
import { getTemplateAPI, getRecentAnalysisAPI } from '@/apis/mainPage.js'
import { getDetectionAPI, getMemberAPI, getFriendAPI, getApkAPI } from '@/apis/echarts.js'
import { getSearchAPI, getEssayPreviewAPI, getSignInAPI, getSignInDateAPI, getSignInSuccessAPI, getPointAPI, getEssayLoadAPI } from '@/apis/mainPage.js'
import WOW from "wow.js";
import { ElMessage } from "element-plus";
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
const userStore = useUserStore();
const router = useRouter();
//进度条的颜色
const customColors = [
    { color: 'linear-gradient(to right,#FFD4BD,#D6573E', percentage: 25 },
    { color: 'linear-gradient(to right,#F2DCAA,#e7823c', percentage: 50 },
    { color: 'linear-gradient(to right,#BDF1FF,#1B79D1', percentage: 75 },
    { color: 'linear-gradient(to right,#DDFA9D,#9BD420', percentage: 100 },
]
let percentage = ref(44)
let calendarDate = ref(new Date())
let calendarString = ref()
const calendar = ref()
let searchValue = ref('')//搜索框内容
let templateList = ref([])//范本库
let recentAnalysisList = ref([])//最近分析
//charts图表数据
let option1 = ref()
let option2 = ref()
let option3 = ref()
let option4 = ref()
//charts图标选中
let selectedOption1 = ref('近一周趋势图')
let selectedOption2 = ref('近一周趋势图')
let selectedOption3 = ref('近一周趋势图')
let selectedOption4 = ref('近一周趋势图')
let myChart1 = ref()
let myChart2 = ref()
let myChart3 = ref()
let myChart4 = ref()
let myChart = ref()
//图表
let detectionList = ref([])
let memberList = ref([])
let friendList = ref([])
let apkList = ref([])
let userInfo = ref(null)
let signInValue = ref(false)
let signData = ref([])
let nowPoints = ref(0)
let isDisable = ref([])
onMounted(async () => {
    const wow = new WOW({})
    wow.init();
    userStore.initialize()
    userInfo.value = userStore.user
    //日历上的年月
    const year = calendarDate.value.getFullYear();
    const month = calendarDate.value.getMonth() + 1;
    calendarString.value = year + '年' + month + '月'
    //范本库超出范围
    displayWindowSize()
    //获取范本库
    const res = await getTemplateAPI('1', 'v')
    templateList.value = res.data.data.records
    console.log(templateList.value)
    templateList.value.forEach((item, index) => {
        isDisable.value[index] = true
        if (item.essayLabel && item.essayLabel != '') {
            item.labelList = item.essayLabel.split(';');
        }
    })
    //获取最近分析
    const res1 = await getRecentAnalysisAPI('1', 'v')
    console.log(res1.data)
    recentAnalysisList.value = res1.data.data.records
    recentAnalysisList.value.forEach(item => {
        const date = new Date(item.detectedTime);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        item.detectedTime = formattedDate;
        if (item.apkDesc == 'scam') {
            item.apkDesc = '涉诈'
        } else if (item.apkDesc == 'sex') {
            item.apkDesc = '涉黄'
        } else if (item.apkDesc == 'gamble') {
            item.apkDesc = '涉赌'
        } else if (item.apkDesc == 'black') {
            item.apkDesc = '黑灰色'
        } else if (item.apkDesc == 'white') {
            item.apkDesc = '白名单'
        }
    });
    setChart()
    //如果登录了，就将显示表格
    if (userInfo.value != null) {
        //获取签到的天数
        await getSignInDate()
        //获取图表
        const res2 = await getDetectionAPI(userStore.user.userMail, '7', 'v')
        detectionList.value = res2.data.data
        const res4 = await getFriendAPI(userStore.user.userMail, '7', 'v')
        friendList = res4.data.data
        const res5 = await getApkAPI(userStore.user.userMail, '7', 'v')
        console.log(res5.data.data)
        apkList.value = res5.data.data
        setChart1()
        setChart2()
        setChart3()
        setChart4()
    }
    //获取今日该用户是否签到
    const res2 = await getSignInAPI(userStore.user.userMail, 'v')
    if (res2.data.message == "当天未签到") {
        signInValue.value = false
        console.log('当天未签到')
    } else {
        signInValue.value = true
        console.log('当天签到了')
    }
});
//获取签到的天数和会员积分
async function getSignInDate() {
    const year = calendarDate.value.getFullYear();
    const month = calendarDate.value.getMonth() + 1;
    const res1 = await getSignInDateAPI(year, month, userStore.user.userMail, 'v')
    signData.value = res1.data.data
    console.log(signData.value)
    const res2 = await getPointAPI(userStore.user.userMail, 'v')
    nowPoints.value = res2.data.data
    //获取第二个图表的内容
    const res3 = await getMemberAPI(userStore.user.userMail, '7', 'v')
    console.log(res3.data.data)
    memberList.value = res3.data.data
}
//点击查看范本
async function templateClick(id) {
    console.log(id)
    const res = await getEssayPreviewAPI('v', id)
    console.log(res)
    const htmlContent = res.data
    const newWindow = window.open('', `_blank/${id}`);
    newWindow.document.write(htmlContent);
}
//点击下载范本
async function temLoadClick(id) {
    const res = await getEssayLoadAPI('v', id)
    if (res.data.message == "下载范文成功") {
        ElMessage.success('下载中...')
        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.href = res.data.data
        a.click();
        document.body.removeChild(a);
    }
}
//点击签到
async function signInClick() {
    const res = await getSignInSuccessAPI(userStore.user.userMail, 'v')
    console.log(res.data)
    if (res.data.message == '签到成功') {
        ElMessage.success('签到成功！获得100积分')
    }
    //获取签到的天数,就是更改日历上面的已签到的日期
    await getSignInDate()
    //图表更新
    setChart2()
    //将今天的签到按钮禁用
    signInValue.value = true
}
//点击搜索
async function searchClick() {
    if (searchValue.value == '' || searchValue.value == null) {
        ElMessage.warning("输入内容不能为空！")
        return
    }
    const res = await getSearchAPI(searchValue.value, 'v', 1)
    console.log(res.data)
}
//退出登录
function signOutClick() {
    localStorage.removeItem('user')
    router.push('/login')
}
//范本库/最近分析记录超出或少于范围
function displayWindowSize() {
    let footer1 = null
    let templateBoxes = null
    let footer2 = null
    let analysisBoxes = null
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
        footer2 = document.querySelector('.footer2');
        analysisBoxes = document.querySelector('.analysis-boxes');
        if (analysisBoxes.offsetHeight + 60 < footer2.offsetHeight) {
            const templateBoxItems = analysisBoxes.querySelectorAll('.display-none1');
            if (templateBoxItems.length > 0) {
                templateBoxItems[0].classList.remove('display-none1')
            }
        }
        if (analysisBoxes.offsetHeight + 60 < footer2.offsetHeight) {
            const templateBoxItems = analysisBoxes.querySelectorAll('.display-none1');
            if (templateBoxItems.length > 0) {
                templateBoxItems[0].classList.remove('display-none1')
            }
        }
        if (analysisBoxes.offsetHeight > footer2.offsetHeight - 40) {
            const templateBoxItems = analysisBoxes.querySelectorAll('.analysis-box:not(.display-none1)');
            if (templateBoxItems.length > 0) {
                templateBoxItems[templateBoxItems.length - 1].classList.add('display-none1')
            }
        }
        if (analysisBoxes.offsetHeight > footer2.offsetHeight - 40) {
            const templateBoxItems = analysisBoxes.querySelectorAll('.analysis-box:not(.display-none1)');
            if (templateBoxItems.length > 0) {
                templateBoxItems[templateBoxItems.length - 1].classList.add('display-none1')
            }
        }
    }, 0)
}
//获取最近分析记录的标签颜色
function getLabelColor(word) {
    if (word == '黑灰色') {
        return 'greyLabel'
    } else if (word == '涉黄') {
        return 'yellowLabel'
    } else if (word == '涉诈') {
        return 'redLabel'
    } else if (word == '涉赌') {
        return 'purpleLabel'
    } else if (word == '白名单') {
        return 'greenLabel'
    }
}
//监听页面
window.addEventListener("resize", displayWindowSize);
//日历上的上月，下月和今天
const selectDate = (val) => {
    if (!calendar.value)
        return
    calendar.value.selectDate(val)
    console.log(val)
    let year = null
    let month = null
    if (val == 'next-month') {
        calendarDate.value.setMonth(calendarDate.value.getMonth() + 1);
        year = calendarDate.value.getFullYear();
        month = calendarDate.value.getMonth() + 1;
    } else if (val == 'prev-month') {
        calendarDate.value.setMonth(calendarDate.value.getMonth() - 1);
        year = calendarDate.value.getFullYear();
        month = calendarDate.value.getMonth() + 1;
    } else if (val == 'today') {
        calendarDate.value = new Date()
        year = calendarDate.value.getFullYear();
        month = calendarDate.value.getMonth() + 1;
    }
    calendarString.value = year + '年' + month + '月'
}
//点击快捷入口
function staticAnalysis(string) {
    //跳转页面
    console.log("点击")
    router.push(`../${string}`)
}
function Analysis(string, value) {
    console.log("点击")
    router.push(`../${string}/file/?value=${value}`)
}
//下拉框的改变
async function handleCommand1(command) {
    let flag = 0;
    switch (command) {
        case 'a':
            selectedOption1.value = '近一周趋势图'
            flag = 7
            break;
        case 'b':
            selectedOption1.value = '近两周趋势图'
            flag = 14
            break;
        case 'c':
            selectedOption1.value = '近一月趋势图'
            flag = 30
            break;
        default:
            console.log('未知命令');
    }
    const res = await getDetectionAPI(userStore.user.userMail, flag, 'v')
    detectionList.value = res.data.data
    let chartDom1 = document.getElementById("chart1-content");
    let myChart1 = echarts.init(chartDom1);
    option1.media[0].option.xAxis[0].data = detectionList.value[0]
    option1.media[0].option.series[0].data = detectionList.value[1]
    let average = 0
    detectionList.value[1].forEach((element) => {
        average = average + parseInt(element)
    });
    if (detectionList.value[1].length != 0) {
        average = average / detectionList.value[1].length;
    }
    average = average.toFixed(1)
    option1.media[0].option.title.subtext = `{value|平均}{titleSize| ${average} }{value|次}`
    myChart1.setOption(option1);
}
async function handleCommand2(command) {
    let flag = 0;
    switch (command) {
        case 'a':
            selectedOption2.value = '近一周趋势图'
            flag = 7
            break;
        case 'b':
            selectedOption2.value = '近两周趋势图'
            flag = 14
            break;
        case 'c':
            selectedOption2.value = '近一月趋势图'
            flag = 30
            break;
        default:
            console.log('未知命令');
    }
    const res = await getMemberAPI(userStore.user.userMail, flag, 'v')
    memberList.value = res.data.data
    let chartDom2 = document.getElementById("chart2-content");
    myChart2 = echarts.init(chartDom2);
    option2.media[0].option.xAxis[0].data = memberList.value[0]
    option2.media[0].option.series[0].data = memberList.value[1]
    let memberNum = 0
    memberList.value[1].forEach((element) => {
        memberNum = memberNum + parseInt(element)
    })
    memberNum = (memberNum / memberList.value[1].length).toFixed(1)
    option2.media[0].option.title.subtext = `{value|平均}{titleSize|${memberNum} }{value|分}`
    myChart2.setOption(option2);
}
async function handleCommand3(command) {
    let flag = 0;
    switch (command) {
        case 'a':
            selectedOption3.value = '近一周趋势图'
            flag = 7
            break;
        case 'b':
            selectedOption3.value = '近两周趋势图'
            flag = 14
            break;
        case 'c':
            selectedOption3.value = '近一月趋势图'
            flag = 30
            break;
        default:
            console.log('未知命令');
    }
    const res = await getFriendAPI(userStore.user.userMail, flag, 'v')
    friendList.value = res.data.data
    console.log(friendList.value)
    let chartDom3 = document.getElementById("chart3-content");
    myChart3 = echarts.init(chartDom3);
    option3.xAxis.data = friendList.value[0]
    option3.series.data = friendList.value[1]
    let friendNum = 0
    friendList[1].forEach((number) => {
        friendNum = friendNum + parseInt(number)
    })
    option3.title.subtext = `{titleSize|${friendNum} }{value|个}`
    console.log(option3)
    myChart3.setOption(option3);
}
async function handleCommand4(command) {
    let flag = 0;
    switch (command) {
        case 'a':
            selectedOption4.value = '近一周趋势图'
            flag = 7
            break;
        case 'b':
            selectedOption4.value = '近两周趋势图'
            flag = 14
            break;
        case 'c':
            selectedOption4.value = '近一月趋势图'
            flag = 30
            break;
        default:
            console.log('未知命令');
    }
    const res = await getApkAPI(userStore.user.userMail, flag, 'v')
    apkList.value = res.data.data
    console.log(apkList.value)
}
const setChart1 = () => {
    let chartDom1 = document.getElementById("chart1-content");
    myChart1 = echarts.init(chartDom1);
    console.log(detectionList.value)
    console.log(detectionList.value[0])
    console.log(detectionList.value[1])
    let average = 0
    detectionList.value[1].forEach((element) => {
        average = average + parseInt(element)
    });
    if (detectionList.value[1].length != 0) {
        average = average / detectionList.value[1].length;
    }
    average = average.toFixed(1)
    // 指定图表的配置项和数据
    option1 = {
        media: [
            {
                option: {
                    title: {
                        show: true,
                        text: `{value|检测数量}`,
                        subtext: `{value|平均}{titleSize| ${average} }{value|次}`,
                        textStyle: {
                            color: '#065fed',//文字颜色
                            fontSize: '18',//文字大小
                            rich: {
                                titleIcon: {
                                    backgroundColor: {
                                        image: '@/asset/img/echarts/bar-chart.png'
                                    },
                                    height: 15,// 可以只指定图片的高度，从而图片的宽度根据图片的长宽比自动得到。
                                    width: 16,
                                }
                            }
                        },
                        subtextStyle: {
                            fontSize: '14',
                            rich: {
                                titleSize: {
                                    fontSize: '18',
                                    fontWeight: '600'
                                }
                            }
                        }
                    },
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "cross",
                            label: {
                                backgroundColor: "#6a7985",
                            },
                        },
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                title: "下载该图表",
                            },
                        },
                    },
                    grid: {
                        left: "0%",
                        right: "0%",
                        bottom: "0%",
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: "category",
                            axisTick: {
                                show: false, // 坐标轴刻度线
                            },
                            axisLine: {
                                // 轴线
                                show: false,
                            },
                            splitLine: {
                                // 网格线
                                show: false,
                            },
                            axisLabel: {
                                // 坐标轴标签
                                show: false,
                            },
                            data: detectionList.value[0],
                            boundaryGap: false,
                        },
                    ],
                    yAxis: [
                        {
                            type: "value",
                            axisTick: {
                                show: false, // 坐标轴刻度线
                            },
                            axisLine: {
                                // 轴线
                                show: false,
                            },
                            splitLine: {
                                // 网格线
                                show: false,
                            },
                            axisLabel: {
                                // 坐标轴标签
                                show: false,
                            },
                            boundaryGap: false,
                        },
                    ],
                    series: [
                        {
                            type: "line",
                            stack: "Total",
                            smooth: true,
                            symbol: "none",
                            itemStyle: {
                                color: "#547BF1",
                            },
                            emphasis: {
                                focus: "series",
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "#547BF1",
                                    },
                                    {
                                        offset: 1,
                                        color: "#EDF1FE",
                                    },
                                ]),
                            },
                            symbolSize: 5,
                            data: detectionList.value[1],
                        },
                    ],
                }
            },
            {
                query: {
                    maxAspectRatio: 0.94,
                },
                option: {
                    title: {
                        text: "检测",
                        subtext: `平均 0 次`,
                        textStyle: {
                            color: '#065fed',//文字颜色
                            fontSize: '14'//文字大小
                        },
                        subtextStyle: {
                            fontSize: '12'
                        }
                    }
                }
            }
        ]
    };
    console.log(option1)
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    window.addEventListener("resize", () => {
        myChart1.resize();
    });
};
const setChart2 = () => {
    let chartDom2 = document.getElementById("chart2-content");
    myChart2 = echarts.init(chartDom2);
    let memberNum = 0
    memberList.value[1].forEach((element) => {
        memberNum = memberNum + parseInt(element)
    })
    memberNum = (memberNum / memberList.value[1].length).toFixed(1)
    // 指定图表的配置项和数据
    option2 = {
        media: [
            {
                option: {
                    title: {
                        show: true,
                        text: `{value|会员积分}`,
                        subtext: `{value|平均}{titleSize|${memberNum} }{value|分}`,
                        textStyle: {
                            color: '#6C54F1',//文字颜色
                            fontSize: '18',//文字大小
                            rich: {
                                titleIcon: {
                                    backgroundColor: {
                                        image: '@/asset/img/echarts/bar-chart.png'
                                    },
                                    height: 15,// 可以只指定图片的高度，从而图片的宽度根据图片的长宽比自动得到。
                                    width: 16,
                                }
                            }
                        },
                        subtextStyle: {
                            fontSize: '14',
                            rich: {
                                titleSize: {
                                    fontSize: '18',
                                    fontWeight: '600'
                                }
                            }
                        }
                    },
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "cross",
                            label: {
                                backgroundColor: "#6a7985",
                            },
                        },
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                title: "下载该图表",
                            },
                        },
                    },
                    grid: {
                        left: "0%",
                        right: "0%",
                        bottom: "0%",
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: "category",
                            axisTick: {
                                show: false, // 坐标轴刻度线
                            },
                            axisLine: {
                                // 轴线
                                show: false,
                            },
                            splitLine: {
                                // 网格线
                                show: false,
                            },
                            axisLabel: {
                                // 坐标轴标签
                                show: false,
                            },
                            data: memberList.value[0],
                            boundaryGap: false,
                        },
                    ],
                    yAxis: [
                        {
                            type: "value",
                            axisTick: {
                                show: false, // 坐标轴刻度线
                            },
                            axisLine: {
                                // 轴线
                                show: false,
                            },
                            splitLine: {
                                // 网格线
                                show: false,
                            },
                            axisLabel: {
                                // 坐标轴标签
                                show: false,
                            },
                            boundaryGap: false,
                        },
                    ],
                    series: [
                        {
                            type: "line",
                            stack: "Total",
                            smooth: true,
                            symbol: "none",
                            itemStyle: {
                                color: "#6C54F1",
                            },
                            emphasis: {
                                focus: "series",
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "#6C54F1",
                                    },
                                    {
                                        offset: 1,
                                        color: "#F9F8FE",
                                    },
                                ]),
                            },
                            data: memberList.value[1],
                        },
                    ],
                }
            },
            {
                query: {
                    maxAspectRatio: 0.94,
                },
                option: {
                    title: {
                        text: "检测",
                        subtext: "平均 8 次",
                        textStyle: {
                            color: '#065fed',//文字颜色
                            fontSize: '14'//文字大小
                        },
                        subtextStyle: {
                            fontSize: '12'
                        }
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);
    window.addEventListener("resize", () => {
        myChart2.resize();
    });
};
const setChart3 = () => {
    let chartDom3 = document.getElementById("chart3-content");
    myChart3 = echarts.init(chartDom3);
    let friendNum = 0
    friendList[1].forEach((number) => {
        friendNum = friendNum + parseInt(number)
    })
    option3 = {
        title: {
            show: true,
            text: `{value|邀请好友}`,
            subtext: `{titleSize|${friendNum} }{value|个}`,
            textStyle: {
                color: '#ed8b31',//文字颜色
                fontSize: '18',//文字大小
                rich: {
                    titleIcon: {
                        backgroundColor: {
                            image: '@/asset/img/echarts/bar-chart.png'
                        },
                        height: 15,// 可以只指定图片的高度，从而图片的宽度根据图片的长宽比自动得到。
                        width: 16,
                    }
                }
            },
            subtextStyle: {
                fontSize: '14',
                rich: {
                    titleSize: {
                        fontSize: '18',
                        fontWeight: '600'
                    }
                }
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#6a7985",
                },
            },
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    title: "下载该图表",
                },
            },
        },
        grid: {
            left: "5%",
            right: "5%",
            bottom: "0%",
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: friendList[0],
            axisTick: {
                show: false, // 坐标轴刻度线
            },
            axisLine: {
                // 轴线
                show: false,
            },
            splitLine: {
                // 网格线
                show: false,
            },
            axisLabel: {
                // 坐标轴标签
                show: false,
            },
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false, // 坐标轴刻度线
            },
            axisLine: {
                // 轴线
                show: false,
            },
            splitLine: {
                // 网格线
                show: false,
            },
            axisLabel: {
                // 坐标轴标签
                show: false,
            },
            boundaryGap: false,
        },
        series: {
            data: friendList[1],
            type: 'bar',
            itemStyle: {
                color: "#ed8b31",
                borderRadius: [50, 50, 0, 0]
            },
            barGap: '90%',
            barCategoryGap: '65%',/*多个并排柱子设置柱子之间的间距*/
            barMinHeight: 3, // 设置柱状图的最小高度，单位可以是像素或者百分比
        }
    };
    myChart3.setOption(option3);
    window.addEventListener("resize", () => {
        myChart3.resize();
    });
}
// 转换函数
function transformData(data) {
    const nameMap = {
        'scam': '涉诈',
        'black': '黑灰产',
        'sex': '涉黄',
        'gamble': '涉赌',
        'white': '安全',
    };
    return data.map(item => {
        const chineseName = nameMap[item.name] || item.name;
        const value = item.value || 0;
        const itemStyle = { color: '#000000' }
        switch (chineseName) {
            case '安全':
                itemStyle.color = '#7ab25f';
                break;
            case '黑灰产':
                itemStyle.color = '#cccccc';
                break;
            case '涉黄':
                itemStyle.color = '#FF915A';
                break;
            case '涉诈':
                itemStyle.color = '#5470C6';
                break;
            case '涉毒':
                itemStyle.color = '#FAC858';
                break;
            default:
                break;
        }
        return { value, name: chineseName, itemStyle };
    });
}
const setChart4 = () => {
    let chartDom4 = document.getElementById("chart4-content");
    myChart4 = echarts.init(chartDom4);
    const transformedData = transformData(apkList.value);
    console.log(transformedData);
    option4 = {
        title: {
            show: true,
            text: `{value|apk占比}`,
            subtext: "{value|安全}{titleSize| 39% }",
            textStyle: {
                color: '#7ab25f',//文字颜色
                fontSize: '18',//文字大小
                rich: {
                    titleIcon: {
                        backgroundColor: {
                            image: '@/asset/img/echarts/bar-chart.png'
                        },
                        height: 15,// 可以只指定图片的高度，从而图片的宽度根据图片的长宽比自动得到。
                        width: 16,
                    }
                }
            },
            subtextStyle: {
                fontSize: '14',
                rich: {
                    titleSize: {
                        fontSize: '18',
                        fontWeight: '600'
                    }
                }
            }
        },
        grid: {
            left: "0%",
            right: "0%",
            top: "10%",
            containLabel: true,
        },
        tooltip: {
            trigger: 'item'
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    title: "下载该图表",
                },
            },
        },
        series: [
            {
                name: '检测apk占比',
                type: 'pie',
                radius: ['35%', '60%'],
                avoidLabelOverlap: false,
                padAngle: 5,
                center: ['70%', '50%'],
                itemStyle: {
                    borderRadius: 6
                },
                label: {
                    show: false,
                    position: 'center',
                    fontSize: 12
                },
                emphasis: {
                    focus: 'none', // 强调时不放大
                    label: {
                        show: true,
                        fontSize: 10,
                        fontWeight: 'bold'
                    },
                    scale: false // 这里不放大其他数据项
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 300, name: '安全', itemStyle: { color: '#7ab25f' }, hoverOffset: 10 }, // 设置 hoverOffset
                    { value: 1000, name: '危险apk', itemStyle: { color: '#F56C6C' }, hoverOffset: 0 } // 设置 hoverOffset
                ]
            },
            {
                name: '',
                type: 'pie',
                radius: ['75%', '100%'],
                padAngle: 2,
                center: ['70%', '50%'],
                itemStyle: {
                    borderRadius: 6
                },
                emphasis: {
                    focus: 'none', // 强调时不放大
                    label: {
                        show: true,
                        fontSize: 10,
                        fontWeight: 'bold'
                    },
                },
                label: {
                    show: false,
                    position: 'center',
                    fontSize: 12
                },
                data: [
                    { value: 300, name: '安全', itemStyle: { color: '#7ab25f' } }, // 设置 hoverOffset
                    { value: 221, name: '黑灰产', itemStyle: { color: '#cccccc' } },
                    { value: 520, name: '涉黄', itemStyle: { color: '#FF915A' } },
                    { value: 100, name: '涉诈', itemStyle: { color: '#5470C6' } },
                    { value: 159, name: '涉赌', itemStyle: { color: '#FAC858' } },
                ]
            }
        ]
    };
    myChart4.setOption(option4);
    window.addEventListener("resize", () => {
        myChart4.resize();
    });
}
const setChart = () => {
    let chartDom = document.querySelector(".navigation-title");
    myChart = echarts.init(chartDom);
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
}
onUnmounted(() => {
    if (userInfo.value != null) {
        myChart1.dispose();
        myChart2.dispose();
        myChart3.dispose();
        myChart4.dispose();
    }
    myChart.dispose();
});
</script>
<style lang="scss" scoped>
@import '@/views/user/mainPage/scss/index.scss';
</style>
