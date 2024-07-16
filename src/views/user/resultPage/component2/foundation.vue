<template>
    <div class="wow animate__fadeInRight warn-box">
        <span class="iconfont icon-gantanhao"></span>
        本平台仅供研究软件风险、安全评估，禁止用于非法用途。由于展示的数据全面，请耐心等待加载完成。
    </div>
    <div class="wow animate__fadeInRight foundation-box">
        <div class="foundation">
            <div class="left-box">
                <div class="box-title">
                    <span class="iconfont icon-gou"></span>
                    APP评分
                </div>
                <div class="left-content">
                    <div class="left-img-box">
                        <img class="left-img" v-if="foundationList?.apkIconPath != ''"
                            :src="foundationList?.apkIconPath" />
                        <img class="left-img" v-else src="@/assets/img/title.png" />
                    </div>
                    <div class="left-score">
                        <div class="score-word score-word-green">安全评分</div>
                        <div class="score"><strong>42/100</strong></div>
                    </div>
                </div>
            </div>
            <div class="middle-box">
                <div class="box-title">
                    <span class="iconfont icon-box-open"></span>
                    文件信息
                </div>
                <div class="middle-content">
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
                </div>
            </div>
        </div>
        <div class="flux">
            <div class="flux-title">恶意流量分析</div>
            <div class="flux-content">
                <div class="flux-box">
                    <div class="flux-left"></div>
                    <div class="flux-right">
                        <el-collapse v-model="activeName" accordion>
                            <el-collapse-item title="benign" name="1">
                                <div>正常流量</div>
                            </el-collapse-item>
                            <el-collapse-item title="cridex" name="2">
                                <div>专注于金融领域，通过钓鱼攻击传播，目的是窃取受害者的银行账户信息和凭据。</div>
                            </el-collapse-item>
                            <el-collapse-item title="geodo" name="3">
                                <div>通过垃圾邮件和网络钓鱼攻击传播，主要目的是窃取银行账户凭据和其他敏感信息。</div>
                            </el-collapse-item>
                            <el-collapse-item title="htbot" name="4">
                                <div>主要通过网络钓鱼和漏洞利用进行传播，旨在远程控制受感染的计算机。</div>
                            </el-collapse-item>
                            <el-collapse-item title="miuref" name="5">
                                <div>广泛传播的恶意软件，通过下载和执行其他恶意软件来感染受害者的计算机。</div>
                            </el-collapse-item>
                            <el-collapse-item title="neris" name="6">
                                <div>僵尸网络和恶意软件家族，用于进行分布式拒绝服务（DDoS）攻击和其他网络犯罪活动。</div>
                            </el-collapse-item>
                            <el-collapse-item title="shifu" name="7">
                                <div>银行木马，通过恶意软件包和钓鱼攻击传播，旨在窃取金融数据和个人身份信息。</div>
                            </el-collapse-item>
                            <el-collapse-item title="tinba" name="8">
                                <div>也称为 Tiny Banker，专门针对金融服务进行攻击，专注于窃取银行账户信息。</div>
                            </el-collapse-item>
                            <el-collapse-item title="virut" name="9">
                                <div>多功能恶意软件家族，通过文件传播和漏洞利用进行传播，可用于执行DDoS攻击、窃取信息等。</div>
                            </el-collapse-item>
                            <el-collapse-item title="zeus" name="10">
                                <div>广为人知的银行木马和恶意软件家族，主要通过邮件和网络攻击进行传播，旨在窃取银行账户凭据和其他敏感信息。</div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
            </div>
        </div>
        <div class="compilation">
            <div class="compilation-title">信息</div>
            <div class="compilation-content">
                <div class="compilation-box">
                    <div class="box-left box-left1">
                        <span class="iconfont icon-HTTP"></span>
                    </div>
                    <div class="box-right">
                        <div>HTTP(S) Traffic</div>
                        <el-button color="#368eec" plain @click="trafficClick">
                            <span class="iconfont icon-eye"></span>
                            查看
                        </el-button>
                    </div>
                </div>
                <div class="compilation-box">
                    <div class="box-left box-left2">
                        <span class="iconfont icon-rizhi"></span>
                    </div>
                    <div class="box-right">
                        <div>Logcat Logs</div>
                        <el-button color="#368eec" @click="apkLoadClick">
                            <span class="iconfont icon-eye"></span>
                            查看
                        </el-button>
                    </div>
                </div>
                <div class="compilation-box">
                    <div class="box-left box-left3">
                        <span class="iconfont icon-dmg_"></span>
                    </div>
                    <div class="box-right">
                        <div>Dumpsys Logs</div>
                        <el-button color="#368eec" plain @click="javaLookClick">
                            <span class="iconfont icon-eye"></span>
                            查看
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
import { getTrafficFileAPI } from '@/apis/apkInfo.js'
const router = useRouter();
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
let foundationList = reactive({})
let myChart = ref()
onMounted(() => {
    //将apk数据赋值给foundationList
    const result = JSON.parse(localStorage.getItem('dynamicDataList'))
    console.log(result)
    Object.keys(result).forEach(key => {
        foundationList[key] = result[key];
    });
    console.log(foundationList)
    setChart()
});
//点击查看和下载
async function trafficClick() {
    const res = await getTrafficFileAPI('v', 'frida_web_traffic.txt')
    console.log(res.data)
    const htmlContent = res.data.message
    const newWindow = window.open('', `_blank`);
    newWindow.document.write(htmlContent);
}
function apkLoadClick() {
    loadFunction(foundationList.apkLinkUrl)
}
function javaLookClick() {
    router.push(`/userJavaDetail/${foundationList.fileMd5}`)
}
const setChart = () => {
    let chartDom = document.querySelector(".flux-left");
    myChart = echarts.init(chartDom);
    console.log(foundationList.trafficType)
    const trafficTypeArray = Object.keys(foundationList.trafficType).map(key => ({
        name: key,
        count: foundationList.trafficType[key]
    }));
    const typesArray = trafficTypeArray.map(obj => obj.name);
    const valuesArray = trafficTypeArray.map(obj => obj.count);
    console.log(typesArray);
    console.log(valuesArray);
    // 指定图表的配置项和数据
    let option = {
        polar: {
            radius: [30, '80%']
        },
        radiusAxis: {
            max: 10
        },
        angleAxis: {
            type: 'category',
            data: typesArray,
            startAngle: 75,
        },
        tooltip: {},
        series: {
            type: 'bar',
            data: valuesArray,
            coordinateSystem: 'polar',
            label: {
                show: false,
                position: 'middle',
                formatter: '{b}: {c}'
            },
            itemStyle: {
                color: function (params) {
                    var colorList = ['#fac95b', '#d76661', '#5470c6', '#ed8b31', '#c0ca6e', '#73c0de', '#a372df', '#ef6667', '#42b37d', '#ed7bcf'];
                    return colorList[params.dataIndex];
                }
            }
        },
        animation: false
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", () => {
        myChart.resize();
    });
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
onUnmounted(() => {
    myChart.dispose();
});
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

    .flux {
        .flux-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .flux-content {
            padding: 10px 7px;
            padding-bottom: 0;
            display: flex;
            flex-wrap: wrap;

            .flux-box {
                width: 100%;
                display: flex;

                .flux-left {
                    margin-right: 60px;
                    width: 480px;
                    height: 480px;
                }

                .flux-right {
                    flex: 1;
                    width: 100%;

                    .el-collapse {
                        width: 100%;
                    }
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

                    .icon-rizhi {
                        font-size: 27px;
                    }

                    .icon-HTTP {
                        font-size: 30px;
                    }

                    .icon-dmg_ {
                        font-size: 26px;
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
