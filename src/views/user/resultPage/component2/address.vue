<template>
    <div class="wow animate__fadeInRight traceability-box">
        <div class="abuseAuthority">
            <div id="traceabilityHeading1"></div>
            <div class="abuseAuthority-title">滥用权限</div>
            <div class="abuseAuthority-content">
                <div class="content-left">
                    <div class="content-top">
                        <div>恶意软件常用权限</div>
                        <div class="content-top-number">{{ safeItemNum + '/' + permissionInfo?.length
                            }}</div>
                    </div>
                    <el-progress :percentage="percentage1" :color="customColors1" />
                    <div class="permission-list">
                        <div v-for="item in permissionInfo" :key="item">
                            <div v-if="item.abc">
                                {{ item.permissionApplication }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-right">
                    <div class="content-top">
                        <div>其它常用权限</div>
                        <div class="content-top-number">{{ permissionInfo?.length - safeItemNum + '/'
                            + permissionInfo?.length }}</div>
                    </div>
                    <el-progress :percentage="percentage2" :color="customColors" />
                    <div class="permission-list">
                        <div v-for="item in permissionInfo" :key="item">
                            <div v-if="!item.abc">
                                {{ item.permissionApplication }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <el-divider>
                <el-icon><star-filled /></el-icon>
            </el-divider>
            <div class="abuseAuthority-bottom">
                <div>
                    <strong>恶意软件常用权限 : </strong> 是被已知恶意软件广泛滥用的权限。
                </div>
                <div><strong>其它常用权限 : </strong> 是已知恶意软件经常滥用的权限。</div>
            </div>
        </div>
        <div class="ipMap">
            <div id="traceabilityHeading2"></div>
            <div class="ipMap-title">IP地图</div>
            <div class="ipMap-content">
                <div id="container"></div>
            </div>
        </div>
        <div class="domain">
            <div id="traceabilityHeading3"></div>
            <div class="domain-title">域名</div>
            <div class="domain-content">
                <el-table :data="domainList" style="width: 100%" stripe>
                    <el-table-column prop="Dns" label="域名" :min-width="100" :max-width="350" />
                    <el-table-column label="中国境内" :min-width="80" :max-width="150">
                        <template #default="{ row }">
                            <div class="column" :class="getInfoClass2(row?.addr?.countryNameCN)">
                                {{ row.addr.countryNameCN == '中国' ? '是' : '否' }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="位置信息" :min-width="100">
                        <template #default="{ row }">
                            <div class="multiple-lines"
                                v-if="row?.addr?.countryNameCN != 'None' && row?.addr?.cityNameCN != 'None'">
                                <div v-if="row?.ip != ''"><strong>IP地址 : </strong>{{ row?.ip }}</div>
                                <div><strong>国家 : </strong>{{ row?.addr?.countryNameCN }}</div>
                                <div><strong>城市 : </strong>{{ row?.addr?.cityNameCN }}</div>
                                <div v-if="row?.addr?.latitude != 0 && row?.addr?.longitude != 0">
                                    <strong>查看 : </strong>
                                    <a :href="'https://uri.amap.com/marker?position=' + row?.addr?.longitude + ',' + row?.addr?.latitude"
                                        target="_blank">
                                        高德地图
                                    </a>
                                </div>
                            </div>
                            <div v-else>没有可用的地理位置信息</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="解析" :min-width="80">
                        <template #default="{ row }">
                            <div><a :href="'https://whois.chinaz.com/' + row?.Dns" target="_blank">
                                    <el-button color="#e6a23c" size="small"
                                        style="margin-bottom: 10px; color:#fff;">注册信息</el-button>
                                </a></div>
                            <div><a :href="'https://viewdns.info/iphistory/?domain=' + row?.Dns" target="_blank">
                                    <el-button color="#368eec" size="small"
                                        style="margin-bottom: 10px;">解析历史</el-button>
                                </a></div>
                            <div><a :href="'https://www.wping.org/#' + row?.Dns" target="_blank">
                                    <el-button color="#7dc15b" size="small" style="color:#fff;">安全评级</el-button>
                                </a></div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="url">
            <div id="traceabilityHeading4"></div>
            <div class="url-title">URL</div>
            <div class="url-content">
                <el-table :data="urlList" style="width: 100%" stripe>
                    <el-table-column label="序号" :min-width="80">
                        <template v-slot="{ $index }">
                            <span>{{ $index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="arrLis[0]" label="网址信息" :min-width="400" />
                    <el-table-column label="分析" :min-width="100">
                        <template #default="{ row }">
                            <div :class="row.res == '正常请求' ? 'greenLabel' : 'redLabel'">{{ row.res }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" :min-width="100">
                        <el-button color="#368eec" @click="staticClick"
                            style="margin-bottom: 10px; color:#fff; height: 25px;">安全评分</el-button>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onUnmounted, onMounted, getCurrentInstance } from 'vue'
import { StarFilled } from '@element-plus/icons-vue';
import AMapLoader from "@amap/amap-jsapi-loader";
import 'echarts/extension/bmap/bmap';
import { getStaticPointAPI } from '@/apis/apkInfo.js'
const percentage1 = ref(0)
const percentage2 = ref(0)
const activeName = ref('1')
let domainList = ref([])
let appRemissionList = reactive({})//获取的动态分析数据
//进度条的颜色
const customColors = [
    { color: '#e6a23c', percentage: 50 },
    { color: '#F56C6C', percentage: 100 },
]
const customColors1 = [
    { color: '#368eec', percentage: 50 },
    { color: '#9a9a9a', percentage: 100 },
]
let urlList = ref([])
let permissionInfo = ref([])//滥用权限
let map = null;
let safeItemNum = ref(0)
onMounted(() => {
    const res = JSON.parse(localStorage.getItem('dynamicDataList'))
    console.log(res)
    Object.keys(res).forEach(key => {
        appRemissionList[key] = res[key];
    });
    urlList.value = appRemissionList.urlList
    for (let i = 0; i < urlList.value.length; i++) {
        let arr = urlList.value[i].url.split('?');
        urlList.value[i].arrLis = arr
    }
    console.log(urlList.value)
    let staticList = JSON.parse(localStorage.getItem('staticDataList'))
    console.log(staticList)
    let ipListMap = JSON.parse(staticList.dnsInfo.dnsDesc)
    //IP地图
    window._AMapSecurityConfig = {
        securityJsCode: "1ae21bcc8cbf0d57a400c60614c3632c",
    };
    AMapLoader.load({
        key: "420461bcd5b1f5c9ebac68d5e0437be0",
        version: "2.0",
        plugins: ["AMap.Scale"],
    }).then((AMap) => {
        map = new AMap.Map("container", {
            viewMode: "2D",
            showLabel: false,
            zoom: 2.3,
            center: [36.397428, 39.90923],
        });
        let markerList = [];
        // 循环 ipList 数组，创建 circleMarker 并添加到 markerList 数组
        ipListMap.forEach((item) => {
            if (item.addr.latitude == 0 || item.addr.longitude == 0) {
            } else {
                let circleMarker = new AMap.CircleMarker({
                    center: new AMap.LngLat(item.addr.longitude, item.addr.latitude),
                    radius: 10,
                    strokeColor: "white",
                    strokeWeight: 2,
                    strokeOpacity: 0.5,
                    fillColor: "rgba(0,0,255,1)",
                    fillOpacity: 0.5,
                    zIndex: 10,
                    cursor: "pointer"
                });
                markerList.push(circleMarker);
                const infoWindow = new AMap.InfoWindow({
                    offset: new AMap.Pixel(0, -10),
                });
                circleMarker.on("mouseover", function (e) {
                    infoWindow.setContent(
                        `${'<div>IP : ' + item.ip + '</div>' + (item.addr.countryNameCN == '' ? '未知' : item.addr.countryNameCN) + '/' + (item.addr.cityNameCN == '' ? '未知' : item.addr.cityNameCN)}`
                    );
                    infoWindow.open(map, [item.addr.longitude, item.addr.latitude]);
                });
                circleMarker.on("mouseout", function (e) {
                    infoWindow.close(map, [item.addr.longitude, item.addr.latitude]);
                });
            }
        });
        map.add(markerList);
    }).catch((e) => {
        console.log(e);
    });
    domainList.value = ipListMap
    console.log(ipListMap)
    //滥用权限
    permissionInfo.value = staticList.permissionInfo
    console.log(permissionInfo)
    let keyword = '危险权限'
    permissionInfo.value.forEach((item, index) => {
        if (item.isDangerous.includes(keyword)) {
            permissionInfo.value[index] = reactive({
                ...permissionInfo.value[index],
                abc: true
            });
            safeItemNum.value = safeItemNum.value + 1;
        } else {
            permissionInfo.value[index] = reactive({
                ...permissionInfo.value[index],
                abc: false
            });
        }
    })
    if (safeItemNum.value != 0) {
        percentage1.value = (safeItemNum.value * 100 / (permissionInfo.value.length)).toFixed(2)
    }
    if (safeItemNum.value != permissionInfo.value.length)
        percentage2.value = ((permissionInfo.value.length - safeItemNum.value) * 100 / permissionInfo.value.length).toFixed(2)
});
onUnmounted(() => {
    map?.destroy();
});
async function staticClick() {
    const res = await getStaticPointAPI('v', 'https://open.e.kuaishou.com/rest/e/v2/open/log/click')
    console.log(res.data)
    const htmlContent = res.data.message
    const newWindow = window.open('', `_blank`);
    newWindow.document.write(htmlContent);
}
//为不同的国家设置类名
function getInfoClass2(country) {
    if (country === '中国') {
        return 'info-column1';
    } else {
        return 'info-column3';
    }
}
</script>
<style lang="scss" scoped>
.traceability-box {
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

    .abuseAuthority {
        padding-bottom: 30px;

        .abuseAuthority-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .abuseAuthority-content {
            margin-left: 7px;
            display: flex;

            @media (max-width: 1024px) {
                display: block;
            }

            @media (min-width: 1024px) {}

            .content-top {
                display: flex;

                .content-top-number {
                    color: $word-black-color;
                    // margin-left: auto;
                    font-size: 14px;
                    margin-left: 10px;
                    // margin-right: 10px;
                }
            }

            .el-progress {
                height: 30px;
            }

            .permission-list {
                display: flex;
                flex-wrap: wrap;

                >div {
                    flex-basis: 100%;
                    line-height: 25px;
                    font-size: 14px;
                }
            }

            .content-left {
                padding: 20px 0;
                padding-bottom: 0px;
                padding-right: 30px;
                flex: 1;

                @media (max-width: 1024px) {
                    padding-right: 0px;
                }

                @media (min-width: 1024px) {}
            }

            .content-right {
                padding: 20px 0;
                padding-bottom: 0px;
                padding-left: 30px;
                flex: 1;

                @media (max-width: 1024px) {
                    padding-left: 0px;
                }

                @media (min-width: 1024px) {}
            }
        }

        .abuseAuthority-bottom {
            line-height: 25px;
        }
    }

    .ipMap {
        .ipMap-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .ipMap-content {
            margin-left: 7px;
            display: flex;

            #container {
                margin-top: 10px;
                width: 100%;
                height: 600px;
                border-radius: 5px;
            }
        }
    }

    .domain {
        .domain-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .domain-content {
            margin-left: 7px;
            display: flex;

        }
    }

    .url {
        .url-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .url-content {
            margin-left: 7px;
            display: flex;

            .greenLabel {
                background-color: $green;
                color: #fff;
                width: 80px;
                text-align: center;
                border-radius: 5px;
                height: 25px;
            }

            .redLabel {
                background-color: $red;
                color: #fff;
                width: 80px;
                text-align: center;
                border-radius: 5px;
                height: 25px;
            }
        }
    }

    #traceabilityHeading1,
    #traceabilityHeading2,
    #traceabilityHeading3,
    #traceabilityHeading4,
    #traceabilityHeading5,
    #traceabilityHeading5,
    #traceabilityHeading6,
    #traceabilityHeading7,
    #traceabilityHeading8,
    #traceabilityHeading9,
    #traceabilityHeading10 {
        transform: translateY(-103px);
    }

    .info-column1,
    .info-column2,
    .info-column3,
    .info-column4 {
        border-radius: 10px;
        width: 50px;
        text-align: center;
        margin-top: 3px;
        margin-bottom: 3px;
        color: #fff;
        font-size: 12px;
    }

    .info-column1 {
        background-color: $green;
    }

    .info-column2 {
        background-color: $red;
    }

    .info-column3 {
        background-color: $yellow;
    }

    .info-column4 {
        background-color: $grey;
    }
}
</style>