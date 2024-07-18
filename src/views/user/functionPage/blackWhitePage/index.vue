<template>
    <div class="wow animate__fadeInUp white-box">
        <div class="middle-box">
            <div class="title-box">
                <div class="middle-title">
                    黑白名单库
                </div>
                <div style="margin-left: 20px; margin-right: 20px;">>></div>
                <div>
                    <span class="list" :class="navigationValue ? 'list-active' : ''"
                        @click="navigationClick(true)">白名单</span>
                    <span class="list" :class="!navigationValue ? 'list-active' : ''" @click="
                        navigationClick(false)">黑名单</span>
                </div>
            </div>
            <el-divider content-position="center"><strong style="font-size: 17px; color: #4d4d4d;">{{
                        navigationValue ? '白名单' : '黑名单' }}</strong></el-divider>
            <div class="middle-word"> </div>
            <!-- navigationValue ? blackWhiteList.blackList : blackWhiteList.whiteList -->
            <div v-if="navigationValue">
                <el-table :data="blackWhiteList?.whiteList?.records" style="width: 100%" stripe
                    :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
                    <el-table-column label="应用程序" width="160">
                        <template #default="{ row }">
                            <div><img :src="row.apkIconPath" class="apk-img"></div>
                            <div><strong>{{ row.apkName }}</strong></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="包名" width="150">
                        <template #default="{ row }">
                            <div v-html="row.apkPackageName"></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="MD5值" width="290">
                        <template #default="{ row }">
                            <div v-html="row.fileMd5"></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="类型" width="140">
                        <template #default="{ row }">
                            <div style="display:flex; justify-content: center;">
                                <div class="first-label" :class="getClass(row.apkDesc)">{{ row.apkDesc }}</div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="加固信息" width="180">
                        <template #default="{ row }">
                            <div v-html="row.hardeningInfo"></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="安全评分" width="140">
                        <template #default="{ row }">
                            <div class="colorLabel" :class="getClass(row.secureScore)">{{ row.secureScore }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="目标SDK" width="100">
                        <template #default="{ row }">
                            <div>{{ row.targetSdkVersion }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="版本" width="180">
                        <template #default="{ row }">
                            <div>版本号: {{ row.versionCode }}</div>
                            <div>版本名: {{ row.versionName }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="140">
                        <template #default="{ row }">
                            <div>
                                <el-button color="#7dc15b" size="small" style="margin-bottom: 10px; color:#fff;"
                                    @click="safeClick(row.fileMd5)">安全评分</el-button>
                            </div>
                            <div>
                                <el-button color="#368eec" size="small" @click="staticClick(row.fileMd5)"
                                    style="margin-bottom: 10px; color:#fff;">静态报告</el-button>
                            </div>
                            <div>
                                <el-button color="#a372df" plain size="small" style="margin-bottom: 10px;"
                                    @click="safeClick(row.fileMd5)">点击下载</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div v-else>
                <el-table :data="blackWhiteList?.blackList?.records" style="width: 100%" stripe
                    :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
                    <el-table-column label="应用程序" width="160">
                        <template #default="{ row }">
                            <div><img :src="row.apkIconPath" class="apk-img"></div>
                            <div><strong>{{ row.apkName }}</strong></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="包名" width="150">
                        <template #default="{ row }">
                            <div v-html="row.apkPackageName"></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="MD5值" width="290">
                        <template #default="{ row }">
                            <div v-html="row.fileMd5"></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="类型" width="140">
                        <template #default="{ row }">
                            <div style="display:flex; justify-content: center;">
                                <div class="first-label" :class="getClass(row.apkDesc)">{{ row.apkDesc }}</div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="加固信息" width="180">
                        <template #default="{ row }">
                            <div v-html="row.hardeningInfo"></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="安全评分" width="140">
                        <template #default="{ row }">
                            <div class="colorLabel" :class="getClass(row.secureScore)">{{ row.secureScore }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="目标SDK" width="100">
                        <template #default="{ row }">
                            <div>{{ row.targetSdkVersion }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="版本" width="180">
                        <template #default="{ row }">
                            <div>版本号: {{ row.versionCode }}</div>
                            <div>版本名: {{ row.versionName }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="140">
                        <template #default="{ row }">
                            <div>
                                <el-button color="#7dc15b" size="small" style="margin-bottom: 10px; color:#fff;"
                                    @click="safeClick(row.fileMd5)">安全评分</el-button>
                            </div>
                            <div>
                                <el-button color="#368eec" size="small" @click="staticClick(row.fileMd5)"
                                    style="margin-bottom: 10px; color:#fff;">静态报告</el-button>
                            </div>
                            <div>
                                <el-button color="#a372df" plain size="small" style="margin-bottom: 10px;"
                                    @click="safeClick(row.fileMd5)">点击下载</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import { getApkInfoAPI } from '@/apis/apkInfo.js'
import { getBlackWhiteAPI } from '@/apis/apkInfo.js'
const router = useRouter();
let blackWhiteList = ref([])
let navigationValue = ref(true)
onMounted(async () => {
    //获取白名单
    const res = await getBlackWhiteAPI(1, 10, 'v')
    console.log(res.data)
    blackWhiteList.value = res.data.data
    console.log(blackWhiteList.value)
    console.log(blackWhiteList.value.blackList)
    console.log(blackWhiteList.value.whiteList)
    blackWhiteList.value.whiteList.records.push({
        apkDesc: '正常',
        apkIconPath: 'https://www.zhihuaspace.cn:8888/download/937dbb018330ffc3fb4f9b2df079627b-icon.png',
        apkName: '极速追查',
        apkPackageName: 'com.maoqi.app',
        fileMd5: '937dbb018330ffc3fb4f9b2df079627b',
        versionCode: '1.2.3',
        versionName: '123',
        hardeningInfo: '未加壳',
        targetSdkVersion: '12',
        secureScore: 100
    })
    blackWhiteList.value.whiteList.records.push({
        apkDesc: '正常',
        apkIconPath: 'https://www.zhihuaspace.cn:8888/download/f32340168a51fd66b87a2c0c2f1df09f-icon.png',
        apkName: '遗忘魔塔',
        apkPackageName: 'com.evkworld.ywmt',
        fileMd5: ' f32340168a51fd66b87a2c0c2f1df09f',
        versionCode: '1.01.38 ',
        versionName: '101383',
        hardeningInfo: '未加壳',
        targetSdkVersion: '29',
        secureScore: 100
    })
    blackWhiteList.value.whiteList.records.push({
        apkDesc: '正常',
        apkIconPath: 'https://www.zhihuaspace.cn:8888/download/451d24f5ffda826fe7d48e95f172f8d7-icon.png',
        apkName: '中国法律',
        apkPackageName: 'com.zhkj.law',
        fileMd5: ' 451d24f5ffda826fe7d48e95f172f8d7',
        versionCode: '2.4 ',
        versionName: '15',
        hardeningInfo: '360加固 加固',
        targetSdkVersion: '33',
        secureScore: 100
    })
    blackWhiteList.value.whiteList.records.push({
        apkDesc: '正常',
        apkIconPath: '	https://www.zhihuaspace.cn:8888/download/18f1b6c23be7cd024c1992851d04d178-icon.png',
        apkName: 'Telefram',
        apkPackageName: 'com.nosugar.chatapp',
        fileMd5: ' 18f1b6c23be7cd024c1992851d04d178',
        versionCode: '1.0',
        versionName: '1',
        hardeningInfo: '未加壳',
        targetSdkVersion: '26',
        secureScore: 100
    })
})
async function staticClick(md5) {
    console.log(md5)
    const res = await getApkInfoAPI(md5, 'v')
    console.log(res.data)
    localStorage.setItem('staticDataList', JSON.stringify(res.data.data))
    router.push('/userResultPage')
}
function navigationClick(value) {
    navigationValue.value = value
}
//获取标签颜色
function getClass(name) {
    if (name == '未知') {
        return 'greyLabel'
    } else if (name == '色情') {
        return 'yellowLabel'
    } else if (name == '诈骗') {
        return 'redLabel'
    } else if (name == '赌博') {
        return 'purpleLabel'
    } else if (name == '正常') {
        return 'greenLabel'
    } else if (name == '黑灰') {
        return 'blackLabel'
    } else if (!Number.isNaN(Number(name))) {
        if (name < 30) {
            return 'red'
        } else if (name < 60) {
            return 'yellow'
        } else if (name < 80) {
            return 'blue'
        } else if (name <= 100) {
            return 'green'
        } else {
            return 'grey'
        }
    }
    else {
        return 'greyLabel'
    }
}
</script>
<style lang="scss" scoped>
.white-box {
    width: 90%;
    min-width: 600px;
    margin: 120px auto;
    padding-bottom: 50px;
    position: relative;
    background-color: #fff;
    padding-top: 5px;
    border-radius: 10px;
    box-shadow: 0px 6px 10px 3px rgba(0, 0, 0, 0.1);

    .middle-box {
        color: $word-black-color;

        .title-box {
            display: flex;
            line-height: 30px;
            margin-bottom: 30px;

            .middle-title {
                font-weight: 600;
                font-size: 18px;
            }

            .list {
                cursor: pointer;
                font-size: 16px;
                display: inline-block;
                color: $grey;
                width: 60px;
            }


            .list-active {
                color: $title-color;
                text-decoration: underline;
            }
        }


        .middle-word {
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 15px;
        }

        width: 95%;
        margin: 20px auto;

        .apk-img {
            width: 80px;
            height: 80px;
            border-radius: 5px;
        }
    }

    .el-table {
        .first-label {
            color: #fff;
            border-radius: 5px;
            padding: 0 5px;
            margin-left: 8px;
        }

        .colorLabel {
            font-weight: 600;
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

        .blackLabel {
            background-color: $word-black-color;
        }

        .greyLabel {
            background-color: $grey;
        }

        .redLabel {
            background-color: $red;
        }

        .purple {
            color: $purple;
        }

        .green {
            color: $green;
        }

        .black {
            color: $word-black-color;
        }

        .grey {
            color: $grey;
        }

        .yellow {
            color: $yellow;
        }

        .red {
            color: $red;
        }
    }
}
</style>