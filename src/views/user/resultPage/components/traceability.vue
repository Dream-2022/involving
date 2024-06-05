<template>
    <div class="traceability-box">
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
                <div class='chart' id='world'></div>
            </div>
        </div>
        <div class="domain">
            <div id="traceabilityHeading3"></div>
            <div class="domain-title">IP地图</div>
            <div class="domain-content">
                <el-table :data="domainList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column prop="data1" label="域名" :min-width="100" :max-width="350" />
                    <el-table-column prop="data2" label="状态" :min-width="80" :max-width="150">
                        <template #default="{ row }">
                            <div class="column" :class="getInfoClass2(row.data2)">
                                {{ row.data2 }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data3" label="中国境内" :min-width="50" />
                    <el-table-column label="位置信息" :min-width="100">
                        <template #default="{ row }">
                            <div class="multiple-lines" v-if="row.data4 != ''">
                                <div><strong>IP地址 : </strong>{{ row.data4 }}</div>
                                <div><strong>国家 : </strong>{{ row.data5 }}</div>
                                <div><strong>地区 : </strong>{{ row.data6 }}</div>
                                <div><strong>城市 : </strong>{{ row.data7 }}</div>
                                <div><strong>查看 : </strong><a :href="row.data8" target="_blank">高德地图</a></div>
                            </div>
                            <div v-else>没有可用的地理位置信息</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="解析" :min-width="80">
                        <div>
                            <el-button color="#e6a23c" size="small" :dark="isDark"
                                style="margin-bottom: 10px; color:#fff;">注册信息</el-button>
                        </div>
                        <div>
                            <el-button color="#368eec" size="small" :dark="isDark"
                                style="margin-bottom: 10px;">解析历史</el-button>
                        </div>
                        <div>
                            <el-button color="#7dc15b" size="small" :dark="isDark" style="color:#fff;">安全评级</el-button>
                        </div>
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
                <el-table :data="URLList" style="width: 100%" stripe :row-class-name="tableRowClassName">
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
                    <el-button color="#368eec" :dark="isDark">
                        <span class="iconfont icon-txt-full" style="margin-right: 5px;"></span>
                        <div>导出TXT</div>
                    </el-button>
                    <el-button color="#368eec" :dark="isDark">
                        <span class="iconfont icon-excel-filled" style="margin-right: 5px; font-size: 18px;"></span>
                        <div>导出Excel</div>
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
import { StarFilled } from '@element-plus/icons-vue'
import 'echarts/extension/bmap/bmap';
// import 'https://api.map.baidu.com/api?v=3.0&ak=6FshZwAmHGtcYaFd3B2EKEVfeIP2bRHw'
// import '@/assets/map/world.js'
import axios from 'axios'
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
const percentage1 = ref((100 * 1 / 20).toFixed(2))
const percentage2 = ref((100 * 5 / 8).toFixed(2))
const activeName = ref('1')
//进度条的颜色
const customColors = [
    { color: '#368eec', percentage: 30 },
    { color: '#9a9a9a', percentage: 50 },
    { color: '#e6a23c', percentage: 70 },
    { color: '#F56C6C', percentage: 100 },
]
const domainList = reactive([
    {
        data1: 'y-dev.camera360.com',
        data2: '安全',
        data3: '是',
        data4: '47.99.140.28',
        data5: '中国',
        data6: '浙江',
        data7: '杭州',
        data8: 'https://www.amap.com/?q=30.293650,120.161583',

    },
    {
        data1: 'bugs.llvm.org',
        data2: '警告',
        data3: '否',
        data4: '54.67.122.174',
        data5: '美利坚合众国',
        data6: '加利福尼亚',
        data7: '圣何塞',
        data8: 'https://www.amap.com/?q=30.293650,120.161583',
    },
    {
        data1: 'h5.m.taobao.com',
        data2: '警告',
        data3: '是',
        data4: '110.75.132.131',
        data5: '中国',
        data6: '江苏',
        data7: '镇江',
        data8: 'https://www.amap.com/?q=30.293650,120.161583',
    },
    {
        data1: 'pipeline.qiniu.com',
        data2: '安全',
        data3: '是',
        data4: ' 39.99.165.15',
        data5: '中国',
        data6: '浙江',
        data7: '杭州',
        data8: 'https://www.amap.com/?q=30.293650,120.161583',
    },
    {
        data1: 'api.foundertype.com',
        data2: '屏蔽',
        data3: '否',
        data4: '',
        data5: '',
        data6: '',
        data7: '',
        data8: '',
    },
])
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
onMounted(() => {
    // var chartDom = document.getElementById('world');
    // var myChart = echarts.init(chartDom);
    // const data = [
    //     { name: '海门', value: 9 },
    //     { name: '鄂尔多斯', value: 12 },
    //     { name: '招远', value: 12 },
    //     { name: '舟山', value: 12 },
    //     { name: '齐齐哈尔', value: 14 },
    //     { name: '盐城', value: 15 },
    //     { name: '赤峰', value: 16 },
    //     { name: '青岛', value: 18 },
    //     { name: '乳山', value: 18 },
    //     { name: '金昌', value: 19 },
    //     { name: '泉州', value: 21 },
    //     { name: '莱西', value: 21 },
    //     { name: '日照', value: 21 },
    //     { name: '胶南', value: 22 },
    //     { name: '南通', value: 23 },
    //     { name: '拉萨', value: 24 },
    //     { name: '云浮', value: 24 },
    //     { name: '梅州', value: 25 },
    //     { name: '文登', value: 25 },
    //     { name: '上海', value: 25 },
    //     { name: '攀枝花', value: 25 },
    //     { name: '威海', value: 25 },
    //     { name: '承德', value: 25 },
    //     { name: '厦门', value: 26 },
    //     { name: '汕尾', value: 26 },
    //     { name: '潮州', value: 26 },
    //     { name: '丹东', value: 27 },
    //     { name: '太仓', value: 27 },
    //     { name: '曲靖', value: 27 },
    //     { name: '烟台', value: 28 },
    //     { name: '福州', value: 29 },
    //     { name: '瓦房店', value: 30 },
    //     { name: '即墨', value: 30 },
    //     { name: '抚顺', value: 31 },
    //     { name: '玉溪', value: 31 },
    //     { name: '张家口', value: 31 },
    //     { name: '阳泉', value: 31 },
    //     { name: '莱州', value: 32 },
    //     { name: '湖州', value: 32 },
    //     { name: '汕头', value: 32 },
    //     { name: '昆山', value: 33 },
    //     { name: '宁波', value: 33 },
    //     { name: '湛江', value: 33 },
    //     { name: '揭阳', value: 34 },
    //     { name: '荣成', value: 34 },
    //     { name: '连云港', value: 35 },
    //     { name: '葫芦岛', value: 35 },
    //     { name: '常熟', value: 36 },
    //     { name: '东莞', value: 36 },
    //     { name: '河源', value: 36 },
    //     { name: '淮安', value: 36 },
    //     { name: '泰州', value: 36 },
    //     { name: '南宁', value: 37 },
    //     { name: '营口', value: 37 },
    //     { name: '惠州', value: 37 },
    //     { name: '江阴', value: 37 },
    //     { name: '蓬莱', value: 37 },
    //     { name: '韶关', value: 38 },
    //     { name: '嘉峪关', value: 38 },
    //     { name: '广州', value: 38 },
    //     { name: '延安', value: 38 },
    //     { name: '太原', value: 39 },
    //     { name: '清远', value: 39 },
    //     { name: '中山', value: 39 },
    //     { name: '昆明', value: 39 },
    //     { name: '寿光', value: 40 },
    //     { name: '盘锦', value: 40 },
    //     { name: '长治', value: 41 },
    //     { name: '深圳', value: 41 },
    //     { name: '珠海', value: 42 },
    //     { name: '宿迁', value: 43 },
    //     { name: '咸阳', value: 43 },
    //     { name: '铜川', value: 44 },
    //     { name: '平度', value: 44 },
    //     { name: '佛山', value: 44 },
    //     { name: '海口', value: 44 },
    //     { name: '江门', value: 45 },
    //     { name: '章丘', value: 45 },
    //     { name: '肇庆', value: 46 },
    //     { name: '大连', value: 47 },
    //     { name: '临汾', value: 47 },
    //     { name: '吴江', value: 47 },
    //     { name: '石嘴山', value: 49 },
    //     { name: '沈阳', value: 50 },
    //     { name: '苏州', value: 50 },
    //     { name: '茂名', value: 50 },
    //     { name: '嘉兴', value: 51 },
    //     { name: '长春', value: 51 },
    //     { name: '胶州', value: 52 },
    //     { name: '银川', value: 52 },
    //     { name: '张家港', value: 52 },
    //     { name: '三门峡', value: 53 },
    //     { name: '锦州', value: 54 },
    //     { name: '南昌', value: 54 },
    //     { name: '柳州', value: 54 },
    //     { name: '三亚', value: 54 },
    //     { name: '自贡', value: 56 },
    //     { name: '吉林', value: 56 },
    //     { name: '阳江', value: 57 },
    //     { name: '泸州', value: 57 },
    //     { name: '西宁', value: 57 },
    //     { name: '宜宾', value: 58 },
    //     { name: '呼和浩特', value: 58 },
    //     { name: '成都', value: 58 },
    //     { name: '大同', value: 58 },
    //     { name: '镇江', value: 59 },
    //     { name: '桂林', value: 59 },
    //     { name: '张家界', value: 59 },
    //     { name: '宜兴', value: 59 },
    //     { name: '北海', value: 60 },
    //     { name: '西安', value: 61 },
    //     { name: '金坛', value: 62 },
    //     { name: '东营', value: 62 },
    //     { name: '牡丹江', value: 63 },
    //     { name: '遵义', value: 63 },
    //     { name: '绍兴', value: 63 },
    //     { name: '扬州', value: 64 },
    //     { name: '常州', value: 64 },
    //     { name: '潍坊', value: 65 },
    //     { name: '重庆', value: 66 },
    //     { name: '台州', value: 67 },
    //     { name: '南京', value: 67 },
    //     { name: '滨州', value: 70 },
    //     { name: '贵阳', value: 71 },
    //     { name: '无锡', value: 71 },
    //     { name: '本溪', value: 71 },
    //     { name: '克拉玛依', value: 72 },
    //     { name: '渭南', value: 72 },
    //     { name: '马鞍山', value: 72 },
    //     { name: '宝鸡', value: 72 },
    //     { name: '焦作', value: 75 },
    //     { name: '句容', value: 75 },
    //     { name: '北京', value: 79 },
    //     { name: '徐州', value: 79 },
    //     { name: '衡水', value: 80 },
    //     { name: '包头', value: 80 },
    //     { name: '绵阳', value: 80 },
    //     { name: '乌鲁木齐', value: 84 },
    //     { name: '枣庄', value: 84 },
    //     { name: '杭州', value: 84 },
    //     { name: '淄博', value: 85 },
    //     { name: '鞍山', value: 86 },
    //     { name: '溧阳', value: 86 },
    //     { name: '库尔勒', value: 86 },
    //     { name: '安阳', value: 90 },
    //     { name: '开封', value: 90 },
    //     { name: '济南', value: 92 },
    //     { name: '德阳', value: 93 },
    //     { name: '温州', value: 95 },
    //     { name: '九江', value: 96 },
    //     { name: '邯郸', value: 98 },
    //     { name: '临安', value: 99 },
    //     { name: '兰州', value: 99 },
    //     { name: '沧州', value: 100 },
    //     { name: '临沂', value: 103 },
    //     { name: '南充', value: 104 },
    //     { name: '天津', value: 105 },
    //     { name: '富阳', value: 106 },
    //     { name: '泰安', value: 112 },
    //     { name: '诸暨', value: 112 },
    //     { name: '郑州', value: 113 },
    //     { name: '哈尔滨', value: 114 },
    //     { name: '聊城', value: 116 },
    //     { name: '芜湖', value: 117 },
    //     { name: '唐山', value: 119 },
    //     { name: '平顶山', value: 119 },
    //     { name: '邢台', value: 119 },
    //     { name: '德州', value: 120 },
    //     { name: '济宁', value: 120 },
    //     { name: '荆州', value: 127 },
    //     { name: '宜昌', value: 130 },
    //     { name: '义乌', value: 132 },
    //     { name: '丽水', value: 133 },
    //     { name: '洛阳', value: 134 },
    //     { name: '秦皇岛', value: 136 },
    //     { name: '株洲', value: 143 },
    //     { name: '石家庄', value: 147 },
    //     { name: '莱芜', value: 148 },
    //     { name: '常德', value: 152 },
    //     { name: '保定', value: 153 },
    //     { name: '湘潭', value: 154 },
    //     { name: '金华', value: 157 },
    //     { name: '岳阳', value: 169 },
    //     { name: '长沙', value: 175 },
    //     { name: '衢州', value: 177 },
    //     { name: '廊坊', value: 193 },
    //     { name: '菏泽', value: 194 },
    //     { name: '合肥', value: 229 },
    //     { name: '武汉', value: 273 },
    //     { name: '大庆', value: 279 }
    // ];
    // const geoCoordMap = {
    //     海门: [121.15, 31.89],
    //     鄂尔多斯: [109.781327, 39.608266],
    //     招远: [120.38, 37.35],
    //     舟山: [122.207216, 29.985295],
    //     齐齐哈尔: [123.97, 47.33],
    //     盐城: [120.13, 33.38],
    //     赤峰: [118.87, 42.28],
    //     青岛: [120.33, 36.07],
    //     乳山: [121.52, 36.89],
    //     金昌: [102.188043, 38.520089],
    //     泉州: [118.58, 24.93],
    //     莱西: [120.53, 36.86],
    //     日照: [119.46, 35.42],
    //     胶南: [119.97, 35.88],
    //     南通: [121.05, 32.08],
    //     拉萨: [91.11, 29.97],
    //     云浮: [112.02, 22.93],
    //     梅州: [116.1, 24.55],
    //     文登: [122.05, 37.2],
    //     上海: [121.48, 31.22],
    //     攀枝花: [101.718637, 26.582347],
    //     威海: [122.1, 37.5],
    //     承德: [117.93, 40.97],
    //     厦门: [118.1, 24.46],
    //     汕尾: [115.375279, 22.786211],
    //     潮州: [116.63, 23.68],
    //     丹东: [124.37, 40.13],
    //     太仓: [121.1, 31.45],
    //     曲靖: [103.79, 25.51],
    //     烟台: [121.39, 37.52],
    //     福州: [119.3, 26.08],
    //     瓦房店: [121.979603, 39.627114],
    //     即墨: [120.45, 36.38],
    //     抚顺: [123.97, 41.97],
    //     玉溪: [102.52, 24.35],
    //     张家口: [114.87, 40.82],
    //     阳泉: [113.57, 37.85],
    //     莱州: [119.942327, 37.177017],
    //     湖州: [120.1, 30.86],
    //     汕头: [116.69, 23.39],
    //     昆山: [120.95, 31.39],
    //     宁波: [121.56, 29.86],
    //     湛江: [110.359377, 21.270708],
    //     揭阳: [116.35, 23.55],
    //     荣成: [122.41, 37.16],
    //     连云港: [119.16, 34.59],
    //     葫芦岛: [120.836932, 40.711052],
    //     常熟: [120.74, 31.64],
    //     东莞: [113.75, 23.04],
    //     河源: [114.68, 23.73],
    //     淮安: [119.15, 33.5],
    //     泰州: [119.9, 32.49],
    //     南宁: [108.33, 22.84],
    //     营口: [122.18, 40.65],
    //     惠州: [114.4, 23.09],
    //     江阴: [120.26, 31.91],
    //     蓬莱: [120.75, 37.8],
    //     韶关: [113.62, 24.84],
    //     嘉峪关: [98.289152, 39.77313],
    //     广州: [113.23, 23.16],
    //     延安: [109.47, 36.6],
    //     太原: [112.53, 37.87],
    //     清远: [113.01, 23.7],
    //     中山: [113.38, 22.52],
    //     昆明: [102.73, 25.04],
    //     寿光: [118.73, 36.86],
    //     盘锦: [122.070714, 41.119997],
    //     长治: [113.08, 36.18],
    //     深圳: [114.07, 22.62],
    //     珠海: [113.52, 22.3],
    //     宿迁: [118.3, 33.96],
    //     咸阳: [108.72, 34.36],
    //     铜川: [109.11, 35.09],
    //     平度: [119.97, 36.77],
    //     佛山: [113.11, 23.05],
    //     海口: [110.35, 20.02],
    //     江门: [113.06, 22.61],
    //     章丘: [117.53, 36.72],
    //     肇庆: [112.44, 23.05],
    //     大连: [121.62, 38.92],
    //     临汾: [111.5, 36.08],
    //     吴江: [120.63, 31.16],
    //     石嘴山: [106.39, 39.04],
    //     沈阳: [123.38, 41.8],
    //     苏州: [120.62, 31.32],
    //     茂名: [110.88, 21.68],
    //     嘉兴: [120.76, 30.77],
    //     长春: [125.35, 43.88],
    //     胶州: [120.03336, 36.264622],
    //     银川: [106.27, 38.47],
    //     张家港: [120.555821, 31.875428],
    //     三门峡: [111.19, 34.76],
    //     锦州: [121.15, 41.13],
    //     南昌: [115.89, 28.68],
    //     柳州: [109.4, 24.33],
    //     三亚: [109.511909, 18.252847],
    //     自贡: [104.778442, 29.33903],
    //     吉林: [126.57, 43.87],
    //     阳江: [111.95, 21.85],
    //     泸州: [105.39, 28.91],
    //     西宁: [101.74, 36.56],
    //     宜宾: [104.56, 29.77],
    //     呼和浩特: [111.65, 40.82],
    //     成都: [104.06, 30.67],
    //     大同: [113.3, 40.12],
    //     镇江: [119.44, 32.2],
    //     桂林: [110.28, 25.29],
    //     张家界: [110.479191, 29.117096],
    //     宜兴: [119.82, 31.36],
    //     北海: [109.12, 21.49],
    //     西安: [108.95, 34.27],
    //     金坛: [119.56, 31.74],
    //     东营: [118.49, 37.46],
    //     牡丹江: [129.58, 44.6],
    //     遵义: [106.9, 27.7],
    //     绍兴: [120.58, 30.01],
    //     扬州: [119.42, 32.39],
    //     常州: [119.95, 31.79],
    //     潍坊: [119.1, 36.62],
    //     重庆: [106.54, 29.59],
    //     台州: [121.420757, 28.656386],
    //     南京: [118.78, 32.04],
    //     滨州: [118.03, 37.36],
    //     贵阳: [106.71, 26.57],
    //     无锡: [120.29, 31.59],
    //     本溪: [123.73, 41.3],
    //     克拉玛依: [84.77, 45.59],
    //     渭南: [109.5, 34.52],
    //     马鞍山: [118.48, 31.56],
    //     宝鸡: [107.15, 34.38],
    //     焦作: [113.21, 35.24],
    //     句容: [119.16, 31.95],
    //     北京: [116.46, 39.92],
    //     徐州: [117.2, 34.26],
    //     衡水: [115.72, 37.72],
    //     包头: [110, 40.58],
    //     绵阳: [104.73, 31.48],
    //     乌鲁木齐: [87.68, 43.77],
    //     枣庄: [117.57, 34.86],
    //     杭州: [120.19, 30.26],
    //     淄博: [118.05, 36.78],
    //     鞍山: [122.85, 41.12],
    //     溧阳: [119.48, 31.43],
    //     库尔勒: [86.06, 41.68],
    //     安阳: [114.35, 36.1],
    //     开封: [114.35, 34.79],
    //     济南: [117, 36.65],
    //     德阳: [104.37, 31.13],
    //     温州: [120.65, 28.01],
    //     九江: [115.97, 29.71],
    //     邯郸: [114.47, 36.6],
    //     临安: [119.72, 30.23],
    //     兰州: [103.73, 36.03],
    //     沧州: [116.83, 38.33],
    //     临沂: [118.35, 35.05],
    //     南充: [106.110698, 30.837793],
    //     天津: [117.2, 39.13],
    //     富阳: [119.95, 30.07],
    //     泰安: [117.13, 36.18],
    //     诸暨: [120.23, 29.71],
    //     郑州: [113.65, 34.76],
    //     哈尔滨: [126.63, 45.75],
    //     聊城: [115.97, 36.45],
    //     芜湖: [118.38, 31.33],
    //     唐山: [118.02, 39.63],
    //     平顶山: [113.29, 33.75],
    //     邢台: [114.48, 37.05],
    //     德州: [116.29, 37.45],
    //     济宁: [116.59, 35.38],
    //     荆州: [112.239741, 30.335165],
    //     宜昌: [111.3, 30.7],
    //     义乌: [120.06, 29.32],
    //     丽水: [119.92, 28.45],
    //     洛阳: [112.44, 34.7],
    //     秦皇岛: [119.57, 39.95],
    //     株洲: [113.16, 27.83],
    //     石家庄: [114.48, 38.03],
    //     莱芜: [117.67, 36.19],
    //     常德: [111.69, 29.05],
    //     保定: [115.48, 38.85],
    //     湘潭: [112.91, 27.87],
    //     金华: [119.64, 29.12],
    //     岳阳: [113.09, 29.37],
    //     长沙: [113, 28.21],
    //     衢州: [118.88, 28.97],
    //     廊坊: [116.7, 39.53],
    //     菏泽: [115.480656, 35.23375],
    //     合肥: [117.27, 31.86],
    //     武汉: [114.31, 30.52],
    //     大庆: [125.03, 46.58]
    // };
    // const convertData = function (data) {
    //     var res = [];
    //     for (var i = 0; i < data.length; i++) {
    //         var geoCoord = geoCoordMap[data[i].name];
    //         if (geoCoord) {
    //             res.push({
    //                 name: data[i].name,
    //                 value: geoCoord.concat(data[i].value)
    //             });
    //         }
    //     }
    //     return res;
    // };
    // let option = {
    //     backgroundColor: 'transparent',
    //     title: {
    //         text: '全国主要城市空气质量 - 百度地图',
    //         subtext: 'data from PM25.in',
    //         sublink: 'http://www.pm25.in',
    //         left: 'center'
    //     },
    //     tooltip: {
    //         trigger: 'item'
    //     },
    //     bmap: {
    //         center: [104.114129, 37.550339],
    //         zoom: 5,
    //         roam: true,
    //         mapStyle: {
    //             styleJson: [
    //                 {
    //                     featureType: 'water',
    //                     elementType: 'all',
    //                     stylers: {
    //                         color: '#d1d1d1'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'land',
    //                     elementType: 'all',
    //                     stylers: {
    //                         color: '#f3f3f3'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'railway',
    //                     elementType: 'all',
    //                     stylers: {
    //                         visibility: 'off'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'highway',
    //                     elementType: 'all',
    //                     stylers: {
    //                         color: '#fdfdfd'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'highway',
    //                     elementType: 'labels',
    //                     stylers: {
    //                         visibility: 'off'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'arterial',
    //                     elementType: 'geometry',
    //                     stylers: {
    //                         color: '#fefefe'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'arterial',
    //                     elementType: 'geometry.fill',
    //                     stylers: {
    //                         color: '#fefefe'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'poi',
    //                     elementType: 'all',
    //                     stylers: {
    //                         visibility: 'off'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'green',
    //                     elementType: 'all',
    //                     stylers: {
    //                         visibility: 'off'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'subway',
    //                     elementType: 'all',
    //                     stylers: {
    //                         visibility: 'off'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'manmade',
    //                     elementType: 'all',
    //                     stylers: {
    //                         color: '#d1d1d1'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'local',
    //                     elementType: 'all',
    //                     stylers: {
    //                         color: '#d1d1d1'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'arterial',
    //                     elementType: 'labels',
    //                     stylers: {
    //                         visibility: 'off'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'boundary',
    //                     elementType: 'all',
    //                     stylers: {
    //                         color: '#fefefe'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'building',
    //                     elementType: 'all',
    //                     stylers: {
    //                         color: '#d1d1d1'
    //                     }
    //                 },
    //                 {
    //                     featureType: 'label',
    //                     elementType: 'labels.text.fill',
    //                     stylers: {
    //                         color: '#999999'
    //                     }
    //                 }
    //             ]
    //         }
    //     },
    //     series: [
    //         {
    //             name: 'pm2.5',
    //             type: 'scatter',
    //             coordinateSystem: 'bmap',
    //             data: convertData(data),
    //             symbolSize: function (val) {
    //                 return val[2] / 10;
    //             },
    //             encode: {
    //                 value: 2
    //             },
    //             label: {
    //                 formatter: '{b}',
    //                 position: 'right',
    //                 show: false
    //             },
    //             emphasis: {
    //                 label: {
    //                     show: true
    //                 }
    //             }
    //         },
    //         {
    //             name: 'Top 5',
    //             type: 'effectScatter',
    //             coordinateSystem: 'bmap',
    //             data: convertData(
    //                 data
    //                     .sort(function (a, b) {
    //                         return b.value - a.value;
    //                     })
    //                     .slice(0, 6)
    //             ),
    //             symbolSize: function (val) {
    //                 return val[2] / 10;
    //             },
    //             encode: {
    //                 value: 2
    //             },
    //             showEffectOn: 'render',
    //             rippleEffect: {
    //                 brushType: 'stroke'
    //             },
    //             label: {
    //                 formatter: '{b}',
    //                 position: 'right',
    //                 show: true
    //             },
    //             itemStyle: {
    //                 shadowBlur: 10,
    //                 shadowColor: '#333'
    //             },
    //             emphasis: {
    //                 scale: true
    //             },
    //             zlevel: 1
    //         }
    //     ]
    // };
    // myChart.setOption(option);

})
//为不同的安全类型设置类名
function getInfoClass2(securityLevel) {
    if (securityLevel === '安全') {
        return 'info-column1';
    } else if (securityLevel === '危险') {
        return 'info-column2';
    } else if (securityLevel === '警告') {
        return 'info-column3';
    } else if (securityLevel === '屏蔽') {
        return 'info-column4';
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

            .chart {
                width: 400px;
                height: 400px;
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