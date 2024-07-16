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
                <div style="margin-left: auto;">
                    <el-button type="primary" style="height: 30px" :icon="Position" @click="exportClick">导出</el-button>
                </div>
            </div>
            <div class="middle-word">
            </div>
            <div v-if="navigationValue">
                <el-table ref="exportTableRef" :data="blackWhiteList?.whiteList?.records" style="width: 100%" stripe
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
                    <el-table-column fixed="right" label="查看" width="90">
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
                                <el-button color="#a372df" size="small" style="margin-bottom: 10px; color: #fff;"
                                    @click="safeClick(row.fileMd5)">点击下载</el-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template #default="{ row }">
                            <div>
                                <el-button color="#e6a23c" plain size="small"
                                    @click="blackWhiteClick(row.apkName, row.fileMd5, false)"
                                    style="margin-bottom: 10px;">设为黑名单</el-button>
                            </div>
                            <div>
                                <el-button color="#F56C6C" plain size="small" style="margin-bottom: 10px;"
                                    @click="deleteClick(row.apkName, row.fileMd5, false)">移除</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div v-else>
                <el-table ref="exportTableRef" :data="blackWhiteList?.blackList?.records" style="width: 100%" stripe
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
                    <el-table-column fixed="right" label="查看" width="90">
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
                                <el-button color="#a372df" size="small" style="margin-bottom: 10px; color: #fff;"
                                    @click="safeClick(row.fileMd5)">点击下载</el-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template #default="{ row }">
                            <div>
                                <el-button color="#e6a23c" plain size="small"
                                    @click="blackWhiteClick(row.apkName, row.fileMd5, true)"
                                    style="margin-bottom: 10px;">设为白名单</el-button>
                            </div>
                            <div>
                                <el-button color="#F56C6C" plain size="small" style="margin-bottom: 10px;"
                                    @click="deleteClick(row.apkName, row.fileMd5, true)">移除</el-button>
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
import { Delete, Plus, Position } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import * as XLSX from 'xlsx';
import { getApkInfoAPI } from '@/apis/apkInfo.js'
import { getBlackWhiteAPI } from '@/apis/apkInfo.js'
const router = useRouter();
const exportTableRef = ref(null);
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
})
//点击设为黑名单
function blackWhiteClick(apkName, md5, value) {
    ElMessageBox.confirm(
        `确认将 ${apkName} 移入${value ? '白名单' : '黑名单'}吗?`,
        '警告',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }).then(() => {
            if (value) {
                blackWhiteList.value.blackList.records.forEach((i, index) => {
                    if (blackWhiteList.value.blackList.records[index].fileMd5 == md5) {
                        blackWhiteList.value.blackList.records.splice(index, 1)
                        ElMessage.success(`成功将 ${apkName} 移入 ${value ? '白名单' : '黑名单'} 成功！`)
                        return
                    }
                })
            } else {
                blackWhiteList.value.whiteList.records.forEach((i, index) => {
                    if (blackWhiteList.value.whiteList.records[index].fileMd5 == md5) {
                        blackWhiteList.value.whiteList.records.splice(index, 1)
                        ElMessage.success(`成功将 ${apkName} 移入 ${value ? '白名单' : '黑名单'} 成功！`)
                        return
                    }
                })
            }
        })
}
//点击删除
function deleteClick(apkName, md5, value) {
    ElMessageBox.confirm(
        `确认将 ${apkName} 删除吗?`,
        '警告',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }).then(() => {
            if (!value) {
                blackWhiteList.value.whiteList.records.forEach((i, index) => {
                    if (blackWhiteList.value.whiteList.records[index].fileMd5 == md5) {
                        blackWhiteList.value.whiteList.records.splice(index, 1)
                        ElMessage.success(`${apkName} 删除成功！`)
                        return
                    }
                })
            } else {
                blackWhiteList.value.blackList.records.forEach((i, index) => {
                    if (blackWhiteList.value.blackList.records[index].fileMd5 == md5) {
                        blackWhiteList.value.blackList.records.splice(index, 1)
                        ElMessage.success(`${apkName} 删除成功！`)
                        return
                    }
                })
            }
        })
}
function exportClick() {
    const tableDom = exportTableRef.value?.$el;
    if (!tableDom) {
        return;
    }
    const wb = XLSX.utils.table_to_book(tableDom);

    XLSX.writeFile(wb, `${navigationValue.value == true ? '白名单' : '黑名单'}数据.xlsx`);
}
//点击静态报告
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
    width: 97%;
    min-width: 600px;
    margin: 20px auto;
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
            display: flex;
            margin-top: 10px;
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