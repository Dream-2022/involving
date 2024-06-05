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
                <el-input v-model="input" class="search-content" placeholder="URL，MD5，域名，ip" />
                <el-button color="#065fed" :dark="isDark">搜索</el-button>
            </div>
        </div>
        <div class="module-boxes">
            <div class="module-box">
                <img src="@/assets/3D/3-t.png" />
                <div>最近分析</div>
            </div>
            <div class="module-box">
                <img src="@/assets/3D/private.png" />
                <div>我的分析</div>
            </div>
            <div class="module-box">
                <img src="@/assets/3D/0-t.png" @click="staticAnalysis" />
                <div @click="staticAnalysis">静态分析</div>
            </div>
            <div class="module-box">
                <img src="@/assets/3D/1-t.png" />
                <div>动态分析</div>
            </div>
            <div class="module-box">
                <img src="@/assets/3D/book-search.png" />
                <div>黑白名单库</div>
            </div>
            <div class="module-box">
                <img src="@/assets/3D/2-t.png" />
                <div>会员信息</div>
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
                </div>
                <div class="footer2">
                    <div class="footer-title">
                        <el-divider direction="vertical" />
                        <div class="title-box">最近分析记录</div>
                        <div class="more-view">查看更多<span class="iconfont icon-Rightyou"></span></div>
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
                <el-calendar>
                    <template #header="{ date }">
                        <el-button size="small" @click="selectDate('prev-month')">
                            上个月
                        </el-button>
                        <span class="date-content">{{ date }}</span>
                        <el-button-group>
                            <el-button size="small" @click="selectDate('today')">
                                今天
                            </el-button>
                            <el-button size="small" @click="selectDate('next-month')">
                                下个月
                            </el-button>
                        </el-button-group>
                    </template>
                    <template #date-cell="{ data }">
                        <el-row :class="data.isSelected ? 'is-selected' : 'sds'">
                            {{ data.day.split('-').slice(2).join('-') }}
                            <!-- {{ data.day }} -->
                            <!-- {{ data.isSelected ? '✔️' : '' }} -->
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
                    <el-button color="#065fed" :dark="isDark">签到</el-button>
                    <div class="prompt">
                        <span>连续签到6天, </span>
                        <span>再签到1天可获取100积分</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import "@/assets/fontIcon/iconfont.css";
import { useRouter } from 'vue-router';
import { onUnmounted, onMounted, getCurrentInstance } from "vue";
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
const router = useRouter();

onMounted(() => {
    setChart()
    setChart1()
    setChart2()
    setChart3()
    setChart4()
});
//点击静态分析
function staticAnalysis() {
    //跳转页面
    console.log("点击")
    router.push('../userUploadPage')
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
                            data: [110, 120, 230, 134, 150, 225, 210],
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
                            data: [120, 132, 101, 134, 90, 230, 210],
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: "#ed8b31",
                    borderRadius: [50, 50, 0, 0]
                }
            },
            barGap: '90%',
            barCategoryGap: '65%',/*多个并排柱子设置柱子之间的间距*/
        }
    };
    // 使用刚指定的配置项和数据显示图表。
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
        series: {
            name: '检测apk占比',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            padAngle: 5,
            center: ['70%', '65%'],
            itemStyle: {
                borderRadius: 10
            },
            label: {
                show: false,
                position: 'center',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 10,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: '危险apk', itemStyle: { color: '#F56C6C' } },
                { value: 735, name: '安全apk', itemStyle: { color: '#7ab25f' } }
            ]
        }

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
                "footer1 footer1 footer1 footer1 footer2 footer2 footer2 footer2";
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

        }

        .footer2 {
            grid-area: footer2;
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
</style>
