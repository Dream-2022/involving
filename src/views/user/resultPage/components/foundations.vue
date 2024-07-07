<template>
    <div class="wow animate__fadeInRight warn-box">
        <span class="iconfont icon-gantanhao"></span>
        本平台仅供研究软件风险、安全评估，禁止用于非法用途。由于展示的数据过于全面，请耐心等待加载完成。
    </div>
    <div class="wow animate__fadeInRight foundation-box">
        <div class="foundation">
            <div class="left-box">
                <div class="box-title">
                    <span class="iconfont icon-gou"></span>
                    APP评分
                </div>
                <div class="left-content">
                    <div class="left-img-box"><img :src='foundationList.apkIconPath' class="left-img"></div>
                    <div class="left-score">
                        <div class="score-word score-word-green">安全评分</div>
                        <div class="score"><strong>{{ foundationList.secureScore }}/100</strong></div>
                    </div>
                    <div class="left-tracker">
                        <div class="tracker-word">APK类型</div>
                        <div class="tracker"><strong>涉诈APK</strong></div>
                    </div>
                    <el-button color="#065fed" plain>安全评分</el-button>
                </div>
            </div>
            <div class="middle-box">
                <div class="box-title">
                    <span class="iconfont icon-box-open"></span>
                    文件信息
                </div>
                <div class="middle-content">
                    <div>
                        <div class="middle-title">文件名称</div>
                        <div>{{ foundationList.fileName }}</div>
                    </div>
                    <div>
                        <div class="middle-title">文件大小</div>
                        <div>{{ foundationList.fileSize }}</div>
                    </div>
                    <div>
                        <div class="middle-title">MD5</div>
                        <div>{{ foundationList.fileMd5 }}</div>
                    </div>
                    <div>
                        <div class="middle-title">SHA1</div>
                        <div>{{ foundationList.fileSha1 }}</div>
                    </div>
                    <div>
                        <div class="middle-title">SHA256</div>
                        <div>{{ foundationList.fileSha256 }}</div>
                    </div>
                </div>
            </div>
            <div class="right-box">
                <div class="box-title">
                    <span class="iconfont icon-i"></span>
                    应用信息
                </div>
                <div class="right-content">
                    <div>
                        <div class="right-title">应用名称</div>
                        <div>{{ foundationList.apkName }}</div>
                    </div>
                    <div>
                        <div class="right-title">包名</div>
                        <div>{{ foundationList.apkPackageName }}</div>
                    </div>
                    <div>
                        <div class="right-title">主活动</div>
                        <div>{{ foundationList.primaryActivities }}</div>
                    </div>
                    <div>
                        <div class="right-title">目标SDK</div>
                        <div>{{ foundationList.targetSdkVersion }}</div>
                        <div class="right-title right-right">最小SDK</div>
                        <div>{{ foundationList.minSdkVersion }}</div>
                    </div>
                    <div>
                        <div class="right-title">版本号</div>
                        <div>{{ foundationList.versionName }}</div>
                        <div class="right-title right-right">子版本号</div>
                        <div>{{ foundationList.versionCode }}</div>
                    </div>
                    <div>
                        <div class="right-title">加固信息</div>
                        <div>未加固</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="export">
            <div class="export-title">组件导出信息</div>
            <div class="export-top">
                <div>Activity组件: {{ data[0]?.NotExportTotal + data[0]?.exportTotal }}</div>
                <div>Service组件: {{ data[1]?.NotExportTotal + data[1]?.exportTotal }}</div>
                <div>Receiver组件: {{ data[2]?.NotExportTotal + data[2]?.exportTotal }}</div>
                <div>Provider组件: {{ data[3]?.NotExportTotal + data[3]?.exportTotal }}</div>
            </div>
            <div class="export-chart"></div>
            <div class="export-bottom">
                <el-button color="#368eec" @click="() => $router.push('/userResultPage/subassembly')">
                    查看
                    <span class="iconfont icon-direction-down-circle"></span>
                </el-button>
                <el-button color="#368eec" @click="() => $router.push('/userResultPage/subassembly')">
                    查看
                    <span class="iconfont icon-direction-down-circle"></span>
                </el-button>
                <el-button color="#368eec" @click="() => $router.push('/userResultPage/subassembly')">
                    查看
                    <span class="iconfont icon-direction-down-circle"></span>
                </el-button>
                <el-button color="#368eec" @click="() => $router.push('/userResultPage/subassembly')">
                    查看
                    <span class="iconfont icon-direction-down-circle"></span>
                </el-button>
            </div>
        </div>
        <div class="compilation">
            <div class="compilation-title">反编译代码</div>
            <div class="compilation-content">
                <div class="compilation-box">
                    <div class="box-left box-left1">
                        <span class="iconfont icon-file-code"></span>
                    </div>
                    <div class="box-right">
                        <div>Manifest文件</div>
                        <el-button color="#368eec" plain @click="manifestLookClick">
                            <span class="iconfont icon-eye"></span>
                            查看
                        </el-button>
                        <el-button color="#368eec" @click="manifestLoadClick">
                            <span class="iconfont icon-download"></span>
                            下载
                        </el-button>
                    </div>
                </div>
                <div class="compilation-box">
                    <div class="box-left box-left2">
                        <span class="iconfont icon-android"></span>
                    </div>
                    <div class="box-right">
                        <div>APK文件</div>
                        <el-button color="#368eec" plain @click="apkLoadClick">
                            <span class="iconfont icon-download"></span>
                            下载
                        </el-button>
                    </div>
                </div>
                <div class="compilation-box">
                    <div class="box-left box-left3">
                        <span class="iconfont icon-java"></span>
                    </div>
                    <div class="box-right">
                        <div>Java源代码</div>
                        <el-button color="#368eec" plain @click="javaLookClick">
                            <span class="iconfont icon-eye"></span>
                            查看
                        </el-button>
                        <el-button color="#368eec" plain @click="javaLoadClick">
                            <span class="iconfont icon-download"></span>
                            下载
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onUnmounted, onMounted, getCurrentInstance, reactive } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
let foundationList = reactive({})
let targetData = ref([])
let data = ref([])
onMounted(() => {
    //将apk数据赋值给foundationList
    const result = JSON.parse(localStorage.getItem('staticDataList'))
    console.log(result)
    Object.keys(result).forEach(key => {
        foundationList[key] = result[key];
    });
    console.log(foundationList)
    //获取四个图表的数据
    foundationList.componentInfo.forEach(item => {
        let descObject = JSON.parse(item.componentDesc);
        let { NotExportTotal, exportTotal } = descObject;
        let newDataItem = { NotExportTotal, exportTotal };
        data.value.push(newDataItem);
    });
    const typeMapping = {
        activity: 'activity',
        service: 'service',
        receiver: 'receiver',
        provider: 'provider'
    };
    targetData.value = [
        ['export', 'Sales', 'type']
    ];
    console.log(data.value)
    console.log(data.value[0].NotExportTotal)
    data.value.forEach((item, index) => {
        const typeName = Object.keys(typeMapping)[index]
        targetData.value.push(['notExported', item.NotExportTotal, typeMapping[typeName]])
        targetData.value.push(['export', item.exportTotal, typeMapping[typeName]]);
    });
    console.log(targetData.value)
    setChart()
});
//点击查看和下载
function manifestLookClick() {
    router.push('/userFileDetail')
}
function manifestLoadClick() {
    loadFunction(foundationList.apkAndroidmanifestUrl)
}
function apkLoadClick() {
    loadFunction(foundationList.apkLinkUrl)
}
function javaLookClick() {
    console.log("跳转页面")
}
function javaLoadClick() {
    loadFunction(foundationList.apkSourceUrl)
}
//生成a标签，并下载的函数
function loadFunction(url) {
    const a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.href = url
    a.click();
    document.body.removeChild(a);
}
let setChart = () => {
    let chartDom = document.querySelector(".export-chart");
    console.log(chartDom)
    let myChart = echarts.init(chartDom);
    //共有的属性
    const defaultPieSeriesConfig = {
        type: 'pie',
        radius: 50,
        center: ['13%', '50%'],
        datasetIndex: 1,
        label: {
            show: false
        },
        tooltip: {
            trigger: 'item'
        },
        avoidLabelOverlap: false,
        padAngle: 5,
        labelLine: {
            show: false
        },
        itemStyle: {
            borderRadius: 10
        },
        radius: ['40%', '70%'],
    };
    const series = [];
    for (let i = 1; i <= 4; i++) {
        series.push({
            ...defaultPieSeriesConfig,
            center: [`${(i - 1) * 25 + 13}%`, '50%'],
            datasetIndex: i
        });
    }
    let source = targetData.value
    source = source.map(item => {
        return item.map(value => {
            if (value === 'notExported') {
                return '未导出';
            } else if (value === 'export') {
                return '导出';
            } else {
                return value;
            }
        });
    });
    let option = {
        dataset: [{
            source
        },
        {
            transform: {
                type: 'filter',
                config: { dimension: 'type', value: "activity" }
            }
        },
        {
            transform: {
                type: 'filter',
                config: { dimension: 'type', value: "service" }
            }
        },
        {
            transform: {
                type: 'filter',
                config: { dimension: 'type', value: "receiver" }
            }
        },
        {
            transform: {
                type: 'filter',
                config: { dimension: 'type', value: "provider" }
            }
        }
        ],
        series,
        color: ['#ED8B31', '#A969C6'],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    let tooltipOption = {
        trigger: 'item', // 触发类型，默认数据触发，可选为：'item'、'axis'  
        formatter: '{c}' // 格式化提示框内容  
    };
    myChart.setOption({
        tooltip: tooltipOption, // 添加 tooltip 组件  
        series: series // 添加 series  
    });
    let box = document.querySelector('.left-box')
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (entry.target === box) {
                console.log('Box的尺寸发生了变化');
                // 在这里执行相应的操作，比如重新渲染图表等
                myChart.resize();
            }
        }
    });
    // 观察.left-box
    resizeObserver.observe(box);
    window.addEventListener("resize", () => {
        myChart.resize();
    });
    onUnmounted(() => {
        myChart.dispose();
        myChart = null;
    });
}
</script>
<style lang="scss" scoped>
.warn-box {
    background-color: #FFF3E0;
    color: #cd871d;
    padding: 10px 20px;
    font-size: 14px;
    width: 94%;
    margin: 10px auto;
    border-radius: 5px;
    border: 1px solid #ffdb9e;

    @media (max-width: 765px) {
        padding: 10px 10px;
        width: 90%;
    }

    @media (min-width: 765px) and (max-width: 1024px) {
        width: 92%;
    }

    @media (min-width: 1024px) {}
}

.foundation-box {

    //直属子div
    >div {
        box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.1);
        padding: 20px 20px 20px 20px;
        border-radius: 5px;
        width: 94%;
        margin: 20px auto;
        color: $word-black-color;
        background-color: #fff;

        @media (max-width: 765px) {
            padding: 20px 10px;
            width: 90%;
        }

        @media (min-width: 765px) and (max-width: 1024px) {
            padding: 20px 10px;
            width: 92%;
        }

        @media (min-width: 1024px) {}
    }

    .foundation {
        @media (max-width: 765px) {}

        @media (min-width: 765px) and (max-width: 1024px) {}

        @media (min-width: 1024px) {
            display: flex;
        }

        .box-title {
            font-weight: 600;

            .iconfont {
                font-weight: 300;
            }
        }

        .left-box {
            flex: 1;
            margin-right: 7px;
            margin-left: 7px;

            .left-content {
                font-size: 14px;
                align-items: center;

                @media (max-width: 765px) {
                    display: flex;
                    flex-wrap: wrap;
                }

                @media (min-width: 765px) and (max-width: 1024px) {
                    display: flex;
                    flex-wrap: wrap;
                }

                @media (min-width: 1024px) {}

                div {
                    @media (max-width: 765px) {
                        margin-left: 10px;
                        margin-right: 10px;
                    }

                    @media (min-width: 765px) and (max-width: 1024px) {
                        margin-left: 10px;
                        margin-right: 10px;
                    }

                    @media (min-width: 1024px) {}
                }

                .left-img-box {
                    padding-top: 15px;

                    .left-img {
                        border-radius: 8px;
                        width: 60px;
                        height: 60px;
                    }
                }

                .left-score {
                    margin: 10px 0;
                    display: flex;
                    height: 26px;
                    line-height: 26px;

                    .score-word {
                        font-size: 13px;
                        color: #fff;
                        margin-right: 6px;
                        padding-left: 10px;
                        padding-right: 10px;
                        border-radius: 10px;
                    }

                    .score-word-green {
                        background-color: $green;
                    }

                    .score-word-yellow {
                        background-color: $yellow;
                    }

                }

                .left-tracker {
                    display: flex;
                    height: 26px;
                    line-height: 26px;
                    margin: 10px 0;

                    .tracker-word {
                        font-size: 13px;
                        color: #fff;
                        background-color: #a372df;
                        margin-right: 6px;
                        padding-left: 10px;
                        padding-right: 10px;
                        border-radius: 10px;
                    }
                }

                .is-plain {
                    height: 26px;

                    @media (max-width: 765px) {
                        margin-left: 10px;
                    }

                    @media (min-width: 765px) and (max-width: 1024px) {
                        margin-left: 10px;
                    }

                    @media (min-width: 1024px) {}
                }
            }
        }

        .middle-box {
            flex: 2;
            margin-right: 7px;
            margin-left: 7px;

            @media (max-width: 1024px) {
                margin-top: 20px;
            }

            @media (min-width: 1024px) {}

            .middle-content {
                font-size: 13px;

                @media (max-width: 765px) {
                    display: flex;
                    flex-wrap: wrap;
                }

                @media (min-width: 765px) and (max-width: 1024px) {
                    display: flex;
                    flex-wrap: wrap;
                }

                @media (min-width: 1024px) {}

                >div {
                    margin: 10px 0;
                    display: flex;
                    line-height: 23px;
                    flex-wrap: wrap;
                    word-break: break-word;

                    @media (max-width: 1024px) {
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 0;
                    }

                    @media (min-width: 1024px) {}

                    .middle-title {
                        color: #fff;
                        margin-right: 10px;
                        padding: 0 15px;
                        border-radius: 5px;
                        background-color: $back-color;
                    }
                }

            }
        }

        .right-box {
            flex: 2;
            margin-right: 7px;
            margin-left: 7px;

            @media (max-width: 1024px) {
                margin-top: 20px;
            }

            @media (min-width: 1024px) {}

            .right-content {
                font-size: 13px;

                @media (max-width: 1024px) {
                    display: flex;
                    flex-wrap: wrap;
                }

                @media (min-width: 1024px) {}

                >div {
                    margin: 10px 0;
                    display: flex;
                    line-height: 23px;
                    flex-wrap: wrap;
                    word-break: break-word;

                    @media (max-width: 1024px) {
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 0;
                    }

                    @media (min-width: 1024px) {}

                    .right-title {
                        color: #fff;
                        margin-right: 10px;
                        padding: 0 15px;
                        border-radius: 5px;
                        background-color: $back-color;
                    }

                    .right-right {
                        margin-left: 30px;
                    }
                }
            }
        }
    }

    .export {
        .export-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .export-top {
            margin-top: 20px;
            color: #103EB3;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            @media (max-width: 765px) {
                font-size: 12px;
            }

            @media (min-width: 765px) and (max-width: 1024px) {
                font-size: 14px;
            }

            @media (min-width: 1024px) {}

            div {
                flex: 1;
            }
        }

        .export-chart {
            height: 210px;
            width: 100%;

            @media (max-width: 765px) {
                height: 130px;
            }

            @media (min-width: 765px) and (max-width: 1024px) {
                height: 180px;
            }

            @media (min-width: 1024px) {}
        }

        .export-bottom {
            display: flex;

            .el-button {
                color: #fff;
                margin-left: 10px;
                margin-right: 10px;
                border-radius: 5px;
                height: 26px;
                line-height: 26px;
                flex: 1;

                .icon-direction-down-circle {
                    margin-left: 5px;
                }
            }
        }
    }

    .compilation {
        .compilation-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .compilation-content {
            padding: 10px 7px;
            padding-bottom: 0;
            display: flex;
            flex-wrap: wrap;

            .compilation-box {
                display: flex;
                min-width: 250px;
                max-width: 44%;
                margin-bottom: 10px;
                flex: 1;
                padding: 10px;
                margin-right: 2%;
                box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                line-height: 26px;

                .box-left {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 5px;
                    margin-right: 10px;
                    color: #fff;

                    .icon-android {
                        font-size: 30px;
                    }

                    .icon-file-code {
                        font-size: 22px;
                    }

                    .icon-java {
                        font-size: 34px;
                    }
                }

                .box-left1 {
                    background-color: $green;
                }

                .box-left2 {
                    background-color: $purple;
                }

                .box-left3 {
                    background-color: $yellow;
                }

                .el-button {
                    height: 26px;

                    .iconfont {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}
</style>
