<template>
    <div class="wow animate__fadeInRight traceability-box">
        <div class="abuseAuthority">
            <div id="traceabilityHeading1"></div>
            <div class="abuseAuthority-title">滥用权限</div>
            <div class="abuseAuthority-content">
                <div class="content-left">
                    <div class="content-top">
                        <div>恶意软件常用权限</div>
                        <div class="content-top-number">1/20</div>
                    </div>
                    <el-progress :percentage="percentage1" :color="customColors" />
                    <div class="permission-list">
                        <div>android.permission.VIBRATE</div>
                    </div>
                </div>
                <div class="content-right">
                    <div class="content-top">
                        <div>其它常用权限</div>
                        <div class="content-top-number">5/8</div>
                    </div>
                    <el-progress :percentage="percentage2" :color="customColors" />
                    <div class="permission-list">
                        <div>android.permission.INTERNET</div>
                        <div>android.permission.WRITE_EXTERNAL_STORAGE</div>
                        <div>android.permission.READ_EXTERNAL_STORAGE</div>
                        <div>android.permission.ACCESS_NETWORK_STATE</div>
                        <div>android.permission.ACCESS_WIFI_STATE</div>
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
            <div class="domain-title">IP地图</div>
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
        <div class="phone">
            <div id="traceabilityHeading4"></div>
            <div class="phone-title">手机号码</div>
            <div class="phone-content">
            </div>
        </div>
        <div class="URL">
            <div id="traceabilityHeading5"></div>
            <div class="URL-title">网址</div>
            <div class="URL-content">
                <el-table :data="URLList" style="width: 100%" stripe>
                    <el-table-column prop="data1" label="网址信息" :min-width="200" />
                    <el-table-column label="源码文件" :min-width="200">
                        <template #default="{ row }">
                            <a :href="row.data2" target="_blank">{{ row.data2 }}</a>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="firebase">
            <div id="traceabilityHeading6"></div>
            <div class="firebase-title">Firebase实例</div>
            <div class="firebase-content">
            </div>
        </div>
        <div class="email">
            <div id="traceabilityHeading7"></div>
            <div class="email-title">邮箱</div>
            <div class="email-content">
                <el-table :data="URLList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column label="序号" :min-width="50" fixed>
                        <template v-slot="{ $index }">
                            <span>{{ $index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data1" label="邮箱" :min-width="200" />
                </el-table>
            </div>
        </div>
        <div class="tracker">
            <div id="traceabilityHeading8"></div>
            <div class="tracker-title">追踪器</div>
            <div class="tracker-content">
                <el-table :data="trackerList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column prop="data1" label="名称" :min-width="100" />
                    <el-table-column prop="data2" label="类别" :min-width="100" />
                    <el-table-column label="网址" :min-width="200">
                        <template #default="{ row }">
                            <a :href="row.data3" target="_blank">{{ row.data3 }}</a>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="key">
            <div id="traceabilityHeading9"></div>
            <div class="key-title">密钥凭证<div class="key-unfold">点击展开</div>
            </div>
            <div class="key-content">
                <div class="demo-collapse">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item v-for="(item) in keyList" :key="item" :title="item.data1" :name="item.data1">
                            <div v-if="item.data2 != ''">{{ item.data2 }}</div>
                            <div v-else>暂无</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <div class="strings">
            <div id="traceabilityHeading10"></div>
            <div class="strings-title">字符串列表</div>
            <div class="strings-content">
                <div style="margin-bottom: 10px;">建议导出为TXT，方便查看。</div>
                <div>
                    <el-button color="#368eec">
                        <span class="iconfont icon-txt-full" style="margin-right: 5px;"></span>
                        <div>导出TXT</div>
                    </el-button>
                    <el-button color="#368eec">
                        <span class="iconfont icon-excel-filled" style="margin-right: 5px; font-size: 18px;"></span>
                        <div>导出Excel</div>
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onUnmounted, onMounted, getCurrentInstance } from 'vue'
import AMapLoader from "@amap/amap-jsapi-loader";
import 'echarts/extension/bmap/bmap';
let internalInstance = getCurrentInstance();
const percentage1 = ref((100 * 1 / 20).toFixed(2))
const percentage2 = ref((100 * 5 / 8).toFixed(2))
const activeName = ref('1')
let appRemissionList = reactive({})
//进度条的颜色
const customColors = [
    { color: '#368eec', percentage: 30 },
    { color: '#9a9a9a', percentage: 50 },
    { color: '#e6a23c', percentage: 70 },
    { color: '#F56C6C', percentage: 100 },
]
const domainList = ref([])
const URLList = [
    {
        data1: 'x5tbs@tencent.com',
    },
    {
        data1: '12345136523@qq.com',
    }
]
const trackerList = [
    {
        data1: 'Yueying@tencent.com',
        data2: 'x5tbs@tencent.com',
        data3: 'https://reports.exodus-privacy.eu.org/trackers/448',
    },
    {
        data1: 'Yueying Crash SDK',
        data2: 'Crash reporting, Analytics',
        data3: 'https://reports.exodus-privacy.eu.org/trackers/448',
    }
]
let keyList = reactive([
    {
        data1: '"composite_sdk_key" ',
        data2: '"4F521E8A6AAB77CF386A10579F976115FAB1EBC3BB3A0E513D29F9BF65D87100225F7C8E717A1EF27ADF4EAC85E0544EBDCBE9A54B16C33D8858A204E76A6301E3393354FB58B9BB8CE028FABDAB13B9DF95179B463F5CC3C6EDB3BFC4D9E3504F44CA375B0A84D732A1D2A1453F9B8C559048CD79B18DD04146CE93A24DB8C2D89FB34407BE4125B460CCC79B84548F531E9311A16FD5B17B5AAA3979EC518F9A461B7DB3063B0D34DB61788AB2CFD3DF391DF49C6AE5542DEE736F654285F220F100A5CBA97FFB0A468ED6A81B60FEB7001E262862371A709FE7058F6BDA2D0097BB0D8A62FDDDE8616151F3D60532E9360EB499226F70424A1DFA98A4854A8B5F87BC43BA4516C9EF5E55F0979F2B7463186E74B9B3D8DA12CD78FEA943CE272CDEA66DBDD433087A3D2C980EA1A913A30C48653153F75D50ADC1DFC16E3D93E63FA8820959AE8882C8EFA889492C7AB7F8E9141DCE96314CF0D8EA56612"',
    },
    {
        data1: ' "composite_sdk_param_Secret"',
        data2: '"Secret"',
    },
    {
        data1: '413872524d9a10bb1537009834992',
        data2: '',
    },
    {
        data1: 'gYBXs4GuUnLN7McYO37akhyLyKLeW99I02gaxgdU1U8=',
        data2: '',
    },
    {
        data1: 'ecc9dfd82b44a51aeb5db459b22794e2d649',
        data2: '',
    },
    {
        data1: '7bfa4735-89a4-4d0d-9299-c02c1ce38cdd',
        data2: '',
    },
])
let map = null;
onMounted(() => {
    const result = JSON.parse(localStorage.getItem('staticDataList'))
    console.log(result)
    Object.keys(result).forEach(key => {
        appRemissionList[key] = result[key];
    });
    let ipListMap = JSON.parse(appRemissionList.dnsInfo.dnsDesc)
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
    //设置IP地图的详细信息
    console.log(ipListMap)
    domainList.value = ipListMap
    //敏感信息
    console.log(JSON.parse(appRemissionList.hardcodedDesc))
});
onUnmounted(() => {
    map?.destroy();
});
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

    .phone {
        .phone-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .phone-content {
            margin-left: 7px;
            display: flex;
        }
    }

    .URL {
        .URL-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .URL-content {
            margin-left: 7px;
            display: flex;
        }
    }

    .firebase {
        .firebase-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .firebase-content {
            margin-left: 7px;
            display: flex;
        }
    }

    .email {
        .email-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .email-content {
            margin-left: 7px;
            display: flex;
        }
    }

    .tracker {
        .tracker-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .tracker-content {
            margin-left: 7px;
            display: flex;
        }
    }

    .key {
        .key-title {
            font-weight: 600;
            margin-left: 7px;
            display: flex;

            .key-unfold {
                margin-left: auto;
                margin-right: 20px;
                font-size: 14px;
                color: #808080;
            }
        }

        .key-content {
            margin-left: 7px;
            display: flex;
            margin-top: 20px;

            .demo-collapse {
                width: 100%;
            }
        }
    }

    .strings {
        .strings-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .strings-content {
            margin-left: 7px;
            margin-top: 10px;
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