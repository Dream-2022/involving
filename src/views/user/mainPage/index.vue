<template>
    <div class="banner"></div>
    <div class="ground">
        <div class="navigation">
            <div class="navigation-tran">
                <div>
                    <img src="@/assets/img/logo2.png" class="navigation-logo"
                        @click="() => $router.push('../../userMainPage')" />
                </div>
                <div class="navigation-title" @click="() => $router.push('../../userMainPage')"></div>
            </div>
            <div class="blank-box"></div>
            <div class="navigation-icon">
                <span class="iconfont icon-lingdang-xianxing"></span>
                <span class="iconfont icon-wenhao-xianxingyuankuang"></span>
                <el-divider direction="vertical" class="divider" />
                <div class="navigation-portrait">
                    <div>
                        <img src="@/assets/img/avatar.jpeg" class="portrait-avatar" />
                    </div>
                    <div class="portrait-nickname">李华</div>
                </div>
            </div>
        </div>
        <div class="component-box">
            <div class="search-word">
                <img src="@/assets/img/word-special.png" />
            </div>
            <div class="search-box">
                <el-input v-model="searchValue" class="search-content" placeholder="URL，MD5，域名，ip" />
                <el-button color="#065fed">搜索</el-button>
            </div>
        </div>
        <div class="module-boxes">
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
                <div class="chart1">
                    <div id="chart1-content"></div>
                    <el-dropdown @command="handleCommand1">
                        <span class="el-dropdown-link">
                            近一周趋势图
                            <span class="iconfont icon-down"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">Action 1</el-dropdown-item>
                                <el-dropdown-item command="b">Action 2</el-dropdown-item>
                                <el-dropdown-item command="c">Action 3</el-dropdown-item>
                                <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
                                <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="chart2">
                    <div id="chart2-content"></div>
                    <el-dropdown @command="handleCommand2">
                        <span class="el-dropdown-link">
                            近一周趋势图
                            <span class="iconfont icon-down"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">Action 1</el-dropdown-item>
                                <el-dropdown-item command="b">Action 2</el-dropdown-item>
                                <el-dropdown-item command="c">Action 3</el-dropdown-item>
                                <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
                                <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="chart3">
                    <div id="chart3-content"></div>
                    <el-dropdown @command="handleCommand3">
                        <span class="el-dropdown-link">
                            近一周趋势图
                            <span class="iconfont icon-down"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">Action 1</el-dropdown-item>
                                <el-dropdown-item command="b">Action 2</el-dropdown-item>
                                <el-dropdown-item command="c">Action 3</el-dropdown-item>
                                <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
                                <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="chart4">
                    <div id="chart4-content"></div>
                    <el-dropdown @command="handleCommand4">
                        <span class="el-dropdown-link">
                            近一周趋势图
                            <span class="iconfont icon-down"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">Action 1</el-dropdown-item>
                                <el-dropdown-item command="b">Action 2</el-dropdown-item>
                                <el-dropdown-item command="c">Action 3</el-dropdown-item>
                                <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
                                <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="footer1">
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
                <div class="footer2">
                    <div class="footer-title">
                        <el-divider direction="vertical" />
                        <div class="title-box">最近分析记录</div>
                        <div class="more-view">查看更多<span class="iconfont icon-Rightyou"></span></div>
                    </div>
                    <div class="analysis-boxes">
                        <div class="analysis-box" v-for="item in recentAnalysisList.slice(0, 6)" :key="item">
                            <div class="analysis-top">
                                <div class="analysis-md5">{{ item.fileMd5 }}</div>
                                <div class="analysis-title">{{ item.fileName }}</div>
                            </div>
                            <div class="analysis-bottom">
                                <el-progress :percentage="percentage" :color="customColors" />
                                <div class="first-label" :class="getLabelColor(item.apkDesc)">{{ item.apkDesc }}</div>
                                <div class="second-label">冒充领导、熟人类</div>
                                <div class="time-label">{{ item.detectedTime }}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="@/assets/img/book.png" class="template-img">
                    </div>
                </div>
            </div>
            <div class="right-boxes">
                <div class="footer-title">
                    <el-divider direction="vertical" />
                    <div class="title-box">签到</div>
                    <div class="iconfont icon-jinbi1"></div>
                    <div class="Gold">
                        1200
                    </div>
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
                        <div class="iconfont icon-weibiaoti1"></div>
                        <!-- <div v-for="(item, index) in textContent(data.day)" :key="index">
                            <e-row>
                                <el-col class="center">
                                    <el-tag type="warning" class="tag">
                                        <el-row v-if="item.xianyue == 0">
                                            <el-col :span="17" class="tag">
                                                <span>当日限约</span>
                                            </el-col>
                                        </el-row>
                                    </el-tag>
                                </el-col>
                            </e-row>
                        </div> -->
                    </template>
                </el-calendar>
                <div class="button-box">
                    <el-button color="#065fed">签到</el-button>
                    <div class="prompt">
                        <span>连续签到6天, </span>
                        <span>再签到1天可获取100积分</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="footer-box">
            <div class="top-box">
                <div class="top-left">
                    <div>
                        <img src="@/assets/img/logo2.png" class="footer-img">
                        GoodAn
                    </div>
                    <div>
                        GoodAn 致力于
                    </div>
                </div>
                <div class="top-middle">

                </div>
                <div class="top-left"></div>
            </div>
        </div> -->
    </div>
</template>
<script setup>
import "@/assets/fontIcon/iconfont.css";
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { onUnmounted, onMounted, getCurrentInstance } from "vue";
import { getTemplateAPI, getRecentAnalysisAPI } from '@/apis/mainPage.js'
import { getDetectionAPI, getMemberAPI, getFriendAPI, getApkAPI } from '@/apis/echarts.js'
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
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
let searchValue = ref('')
let templateList = ref([])//范本库
let recentAnalysisList = ref([])//最近分析
//图表
let detectionList = reactive([])
let memberList = reactive([])
let friendList = reactive([])
let apkList = reactive([])
onMounted(async () => {
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
    templateList.value.forEach(item => {
        item.labelList = item.essayLabel.split(';');
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
    //获取图表
    const res2 = await getDetectionAPI('2650874158@qq.com', '7', 'v')
    detectionList = res2.data.data
    console.log(detectionList[1][0])
    const res3 = await getMemberAPI('2650874158@qq.com', '7', 'v')
    memberList = res3.data.data
    const res4 = await getFriendAPI('2650874158@qq.com', '7', 'v')
    friendList = res4.data.data
    const res5 = await getApkAPI('2650874158@qq.com', '7', 'v')
    console.log(res5.data.data[0])
    apkList = res5.data.data[0]
    //获取签到的天数
    setChart()
    setChart1()
    setChart2()
    setChart3()
    setChart4()
});
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
    if (word == '黑灰产') {
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
const setChart1 = () => {
    let chartDom1 = document.getElementById("chart1-content");
    let myChart1 = echarts.init(chartDom1);
    // 指定图表的配置项和数据
    let option1 = {
        media: [
            {
                option: {
                    title: {
                        show: true,
                        text: `{value|检测数量}`,
                        subtext: "{value|平均}{titleSize| 8 }{value|次}",
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
                    legend: {
                        // data: ['Email']
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
                            data: detectionList[0][0],
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
                            // name: 'Email',
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
                            data: detectionList[1][0],
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
    myChart1.setOption(option1);
    window.addEventListener("resize", () => {
        myChart1.resize();
    });
    onUnmounted(() => {
        myChart1.dispose();
    });
};
const setChart2 = () => {
    let chartDom2 = document.getElementById("chart2-content");
    let myChart2 = echarts.init(chartDom2);
    // 指定图表的配置项和数据
    let option2 = {
        media: [
            {
                option: {
                    title: {
                        show: true,
                        text: `{value|会员积分}`,
                        subtext: "{titleSize|1200 }{value|分}",
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
                    legend: {
                        // data: ['Email']
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
                            data: memberList[0][0],
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
                            // name: 'Email',
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
                            data: memberList[1][0],
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
    onUnmounted(() => {
        myChart2.dispose();
    });
};
const setChart3 = () => {
    let chartDom3 = document.getElementById("chart3-content");
    let myChart3 = echarts.init(chartDom3);
    let option3 = {
        title: {
            show: true,
            text: `{value|邀请好友}`,
            subtext: "{titleSize|12 }{value|个}",
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
            data: friendList[0][0],
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
            data: friendList[1][0],
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
    onUnmounted(() => {
        myChart3.dispose();
    });
}
const setChart4 = () => {
    let chartDom4 = document.getElementById("chart4-content");
    let myChart4 = echarts.init(chartDom4);
    let option4 = {
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
                    { value: 159, name: '涉毒', itemStyle: { color: '#FAC858' } },
                ]
            }
        ]
    };
    myChart4.setOption(option4);

    window.addEventListener("resize", () => {
        myChart4.resize();
    });

    onUnmounted(() => {
        myChart4.dispose();
    });
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
.banner {
    padding-top: 30px;
    background-image: url("@/assets/img/home-bg.png");
    background-size: cover;
    background-position: top;
    height: 500px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
}

.ground {
    flex-wrap: wrap;
    position: absolute;
    top: 0%;
    // transform: translateY(-44.3%);
    background-size: cover;
    background: linear-gradient(rgba(0, 103, 221, 0.3) 0%,
            rgb(205, 226, 252) 45%,
            rgb(174, 208, 244) 100%);
    /* background-image: url('@/assets/img/ju.png'); */
}

.navigation {
    padding: 10px 0 10px 60px;
    display: flex;
    flex-flow: row;

    @media (max-width: 765px) {
        padding-left: 20px;
    }

    @media (min-width: 765px) and (max-width: 1024px) {
        padding-left: 20px;
    }

    @media (min-width: 1024px) {}

    .navigation-tran {
        height: 40px;
        display: flex;
        flex: 0.9;

        @media (max-width: 765px) {
            flex: 1.5;
        }

        @media (min-width: 765px) and (max-width: 1024px) {}

        @media (min-width: 1024px) {}

        .navigation-logo {
            width: 40px;
            height: 40px;
            border-radius: 10px;
        }

        .navigation-title {
            height: 50px;
            width: 120px;
        }
    }

    .blank-box {
        flex: 3;

        @media (max-width: 765px) {
            display: none;
        }

        @media (min-width: 765px) and (max-width: 1024px) {
            flex: 1;
        }

        @media (min-width: 1024px) {}
    }

    .navigation-icon {
        display: flex;
        flex: 1;
        line-height: 40px;

        .el-divider {
            background-color: #000;
            height: 40px;
            margin-right: 25px;
            border-left: 1px solid #000;
        }

        .iconfont {
            margin-right: 15px;
        }
    }

    .navigation-portrait {
        display: flex;
        line-height: 40px;
        height: 40px;

        .portrait-avatar {
            width: 40px;
            height: 40px;
            border-radius: 35px;
        }

        .portrait-nickname {
            font-size: 14px;
            margin-left: 10px;
        }
    }
}

.component-box {
    margin: 10px auto;
    width: 80%;
    height: 40px;
    line-height: 40px;
    display: flex;

    .search-word {
        margin-top: 5px;
        margin-right: 20px;

        @media (max-width: 765px) {}

        @media (min-width: 765px) and (max-width: 1024px) {}

        @media (min-width: 1024px) {}
    }

    .search-box {
        display: flex;
        width: 75%;

        @media (max-width: 765px) {}

        @media (min-width: 765px) and (max-width: 1024px) {
            width: 60%;
        }

        @media (min-width: 1024px) {}

        .search-content {
            --el-border-radius-base: 10px 0 0 10px;
        }

        .el-button {
            border-radius: 0 10px 10px 0;
            border: 0;
            height: 40px;
            width: 80px;
        }
    }
}

.module-boxes {
    width: 70%;
    font-size: 15px;
    margin: 0 auto;
    margin-top: 45px;
    display: grid;
    grid-template-columns: repeat(6, 10%);
    grid-gap: 10px 8%;

    @media (max-width: 765px) {
        margin-top: 45px;
        width: 70%;
        grid-template-columns: repeat(3, 23%);
        grid-gap: 15px 15%;
        grid-template-rows: repeat(2, 40%);
    }

    @media (min-width: 765px) and (max-width: 1024px) {
        grid-template-columns: repeat(6, 12%);
        grid-gap: 10px 5%;
        margin-top: 50px;
        width: 92%;
    }

    @media (min-width: 1024px) {}

    .module-box {
        background-color: #fff;
        border-radius: 10px;
        height: 65%;
        font-size: 14px;
        text-align: center;

        img {
            cursor: pointer;
            transform: translateY(-50%);
            width: 80%;
        }

        div {
            cursor: pointer;
            height: 100%;
            transform: translateY(-70%);

            @media (max-width: 765px) {
                transform: translateY(-90%);
            }

            @media (min-width: 765px) and (max-width: 1024px) {}

            @media (min-width: 1024px) {}
        }
    }
}

.middle-box {
    width: 97%;
    margin: 0 auto;
    transform: translateY(-15px);
    display: flex;
    background-color: rgb(174, 208, 244, 0);

    @media (max-width: 765px) {
        transform: translateY(-36px);
    }

    @media (min-width: 765px) and (max-width: 1024px) {}

    @media (min-width: 1024px) {}

    .left-boxes {
        flex: 10;
        display: grid;
        grid-template-areas:
            "chart1 chart1 chart2 chart2 chart3 chart3 chart4 chart4"
            "footer1 footer1 footer1 footer2 footer2 footer2 footer2 footer2";
        grid-template-rows: 175px 450px;
        grid-template-columns: repeat(8, 11%);
        grid-gap: 10px 1.7%;
        margin-right: 10px;
        background-color: #fff;
        background-color: rgb(174, 208, 244, 0);

        @media (max-width: 765px) {
            flex: 4;
            grid-template-rows: 175px 175px 500px;
            grid-template-areas:
                "chart1 chart1 chart1 chart1 chart2 chart2 chart2 chart2"
                " chart3 chart3 chart3 chart3 chart4 chart4 chart4 chart4"
                "footer1 footer1 footer1 footer1 footer1 footer1 footer1 footer1";
        }

        @media (min-width: 765px) and (max-width: 1024px) {
            flex: 4;
            grid-template-rows: 175px 175px 500px;
            grid-template-areas:
                "chart1 chart1 chart1 chart1 chart2 chart2 chart2 chart2"
                " chart3 chart3 chart3 chart3 chart4 chart4 chart4 chart4"
                "footer1 footer1 footer1 footer1 footer2 footer2 footer2 footer2";
        }

        @media (min-width: 1024px) {}

        div {
            background-color: #fff;
        }

        .el-dropdown {
            cursor: pointer;
        }

        .chart1,
        .chart2,
        .chart3,
        .chart4 {
            padding-bottom: 3%;
            border-radius: 10px;

            @media (max-width: 765px) {}

            @media (min-width: 765px) and (max-width: 1300px) {
                padding-bottom: 0%;
            }

            @media (min-width: 1300px) {}

            #chart1-content,
            #chart2-content,
            #chart3-content,
            #chart4-content {
                height: 75%;
                width: 94%;
                padding: 0 3%;
                margin-top: 3%;
                border-radius: 10%;
            }

            .el-dropdown {
                border-radius: 10px;
                margin: 3% 3% 0 3%;
                padding: 0px 5px 3px 5px;
                font-size: 12px;

                // display: flex;
                // justify-content: center;
                // align-content: center;
                #el-id-5859-0 {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                }

                .icon-down::before {
                    font-size: 12px;
                }
            }
        }

        .chart1 {
            grid-area: chart1;

            .el-dropdown {
                border: 1.5px solid #547BF1;
                color: #547BF1;
            }
        }

        .chart2 {
            grid-area: chart2;

            .el-dropdown {
                border: 1.5px solid #6C54F1;
                color: #6C54F1;
            }
        }

        .chart3 {
            grid-area: chart3;

            .el-dropdown {
                border: 1.5px solid #ed8b31;
                color: #ed8b31;
            }
        }

        .chart4 {
            grid-area: chart4;

            .el-dropdown {
                border: 1.5px solid #7ab25f;
                color: #7ab25f;
            }
        }

        .footer1,
        .footer2 {
            border-radius: 10px;
            position: relative;

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

            .template-img {
                height: 60px;
                position: absolute;
                bottom: 0;
                right: 10%;
            }

        }

        .footer1 {
            grid-area: footer1;

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
        }

        .footer2 {
            grid-area: footer2;

            @media (max-width: 765px) {
                display: none;
            }

            @media (min-width: 765px) and (max-width: 1024px) {}

            @media (min-width: 1024px) {}

            .analysis-boxes {
                word-wrap: break-word;
                font-size: 14px;
                padding: 15px 10px 0 15px;

                .analysis-box {
                    border-radius: 10px;
                    margin-bottom: 10px;
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

                    .analysis-top {
                        display: flex;
                        word-wrap: break-word;
                        flex-wrap: wrap;
                        /* 或者使用white-space属性 */
                        white-space: pre-wrap;

                        .analysis-md5 {
                            word-wrap: break-word;
                            white-space: pre-wrap;
                            margin-right: auto;
                        }

                        .analysis-title {
                            margin-right: 5px;
                        }
                    }

                    .analysis-bottom {
                        margin-top: 5px;
                        font-size: 12px;
                        display: flex;
                        flex-wrap: wrap;
                        line-height: 20px;
                        align-items: center;

                        .el-progress {
                            width: 250px;
                        }

                        .first-label {
                            color: #fff;
                            border-radius: 5px;
                            padding: 0 5px;
                        }

                        .purpleLabel {
                            background-color: $purple;
                        }

                        .yellowLabel {
                            background-color: $yellow;
                        }

                        .greenLabel {
                            background-color: $green;
                        }

                        .greyLabel {
                            background-color: $grey;
                        }

                        .redLabel {
                            background-color: $red;
                        }

                        .second-label {
                            margin-left: 5px;
                            margin-right: 8px;
                            background-color: #FFE5D6;
                            color: #ff5e00;
                            border-radius: 5px;
                            padding: 0 5px;
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
        }
    }

    .right-boxes {
        flex: 3;
        background-color: #fff;
        border-radius: 10px;

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
                font-size: 16px;
            }

            .icon-jinbi1 {
                color: #F6A71B;
            }

            .Gold {
                margin-left: 5px;
                margin-right: 20px;
                color: #EA8930;
            }
        }

        .icon-weibiaoti1 {
            text-align: center;
        }

        .icon-weibiaoti1::before {
            color: #86C368;
            font-size: 6px;
        }


        .el-calendar {
            .is-selected {
                color: #1989fa;
            }

            .tag {
                display: flex;
                align-items: center;
                // height: 10px;
                justify-content: center;
            }

            .tag2 {
                display: flex;
                align-items: center;
                // height: 10px;
                justify-content: center;
                font-size: 18px;
            }

            .aaa {
                .is-selected {
                    .yuyue {
                        color: #E6F3FF;
                    }

                    .datastyle {
                        color: #E6F3FF;
                    }
                }

                .datastyle {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 3rem;
                    color: #353636;
                    font-weight: 600;
                }

                .prev .datastyle {
                    color: #c4c5c8;
                }

                .next .datastyle {
                    color: #c4c5c8;
                }
            }



            :deep {
                --el-calendar-selected-bg-color: #E6F3FF;
                --el-calendar-cell-width: 60px;

                .date-content {
                    margin-left: auto;
                    margin-right: auto;
                    font-size: 14px;

                    @media (max-width: 765px) {
                        font-size: 12px;
                    }

                    @media (min-width: 765px) {}
                }

                .el-row {
                    align-items: center;
                    justify-content: center;
                }

                .el-calendar__header {
                    justify-content: center;
                    align-items: center;
                    padding-top: 20px;

                    @media (max-width: 765px) {
                        padding-left: 10px;
                        padding-right: 10px;
                    }

                    @media (min-width: 765px) {}

                    .el-button--small {
                        @media (max-width: 765px) {
                            padding-left: 3px;
                            padding-right: 3px;
                        }

                        @media (min-width: 765px) {}
                    }
                }

                .el-calendar__body {
                    padding-bottom: 30px;

                    @media (max-width: 765px) {
                        padding-left: 10px;
                        padding-right: 10px;
                    }

                    @media (min-width: 765px) {}

                }


                .el-calendar-table {
                    .el-calendar-day:hover {
                        background-color: #E6F3FF;
                    }

                    thead th {
                        color: $title-color;
                        font-weight: bold;
                        font-size: 14px;
                    }
                }
            }

            .center {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .center2 {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #E6F3FF;
                margin-left: 5px;
                font-size: 20px;
            }
        }

        .button-box {
            text-align: center;

            .prompt {
                font-size: 12px;
                color: $word-black-color;
            }

            .el-button {
                width: 200px;
                display: inline-block;
                margin-bottom: 10px;
            }
        }
    }
}

.footer-box {
    margin-top: 50px;
    height: 250px;
    color: #fff;
    background-color: #304a76;

    .footer-img {
        width: 30px;
    }
}

@font-face {
    font-family: "iconfont";
    /* Project id 4533157 */
    src: url("//at.alicdn.com/t/c/font_4533157_qzpmw0z66r9.woff2?t=1715863438264") format("woff2"),
        url("//at.alicdn.com/t/c/font_4533157_qzpmw0z66r9.woff?t=1715863438264") format("woff"),
        url("//at.alicdn.com/t/c/font_4533157_qzpmw0z66r9.ttf?t=1715863438264") format("truetype");
}

.iconfont::before {
    font-size: 20px;
    font-weight: 600;
}

.display-none {
    display: none;
}

.display-none1 {
    display: none;
}
</style>
