<template>
    <div class="wow animate__fadeInRight appRemission-box">
        <div class="appRemission">
            <div class="appRemission-title">分析管理</div>
            <div class="search-box">
                <span style="margin-right: 10px;">查找分析：</span>
                <el-input v-model="usernameInput" :prefix-icon="Postcard" style="flex: 2;height: 30px;" clearable
                    placeholder="请输入要查找的apk信息" />
                <span style="flex: 2;margin-left: 1%;margin-right: 2%;">
                    <span>APK类型：</span>
                    <el-dropdown style="margin-top: 5px;">
                        <span class="el-dropdown-link">
                            全部
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>全部</el-dropdown-item>
                                <el-dropdown-item>涉诈</el-dropdown-item>
                                <el-dropdown-item>涉赌</el-dropdown-item>
                                <el-dropdown-item>涉黄</el-dropdown-item>
                                <el-dropdown-item>黑灰</el-dropdown-item>
                                <el-dropdown-item>正常</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <el-button color="#368eec" class="search-button">搜索</el-button>
                </span>
            </div>
            <div class="appRemission-content">
                <el-table :data="recentAnalysisList" style="width: 100%" stripe
                    :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
                    <el-table-column prop="data1" label="应用程序" width="220">
                        <template #default="{ row }">
                            <div><img :src="row.apkIconPath" class="apk-img"></div>
                            <div><strong>{{ row.fileName }}</strong></div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="fileName" label="文件名称" width="240" />
                    <el-table-column label="类型" width="180">
                        <template #default="{ row }">
                            <span class="first-label" :class="getLabelColor(row?.apkDesc)">{{ row?.apkDesc }}
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="fileMd5" label="MD5值" width="360" />
                    <el-table-column label="安全评分" width="120">
                        <template #default="{ row }">
                            <div class="colorLabel" :class="getClass(row.secureScore)">{{ row.secureScore }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="detectedTime" label="最后分析时间" width="220" />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                            <el-button color="#547BF1" size="small" plain @click="safeClick(row.fileMd5)"
                                style="margin-left:12px; margin-bottom: 10px; ">
                                安全评分
                            </el-button>
                            <el-button color="#547BF1" size="small" @click="safeClick(row.fileMd5)"
                                style="margin-bottom: 10px; color:#fff;">
                                静态报告
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { Postcard, ArrowDown } from '@element-plus/icons-vue';
import { getRecentAnalysisAPI } from '@/apis/mainPage.js'
let usernameInput = ref('')
const recentAnalysisList = ref([])
onMounted(async () => {
    getAnalysis(1)
})
async function getAnalysis(pageNum) {
    const res = await getRecentAnalysisAPI(pageNum, 'v')
    console.log(res.data)
    recentAnalysisList.value = res.data.data.records
    recentAnalysisList.value.forEach(item => {
        const date = new Date(item.detectedTime);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        item.detectedTime = formattedDate;
    });
}
function getClass(name) {
    if (!Number.isNaN(Number(name))) {
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
//获取最近分析记录的标签颜色
function getLabelColor(word) {
    if (word == '黑灰') {
        return 'blackLabel'
    } else if (word == '色情') {
        return 'yellowLabel'
    } else if (word == '诈骗') {
        return 'redLabel'
    } else if (word == '涉赌') {
        return 'purpleLabel'
    } else if (word == '正常') {
        return 'greenLabel'
    } else {
        return 'greyLabel'
    }
}
</script>
<style lang="scss" scoped>
.appRemission-box {
    margin-bottom: 50px;

    >div {
        box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.1);
        padding: 20px 20px 30px 20px;
        border-radius: 5px;
        width: 94%;
        margin: 20px auto;
        color: $word-black-color;
        background-color: #fff;

        @media (max-width: 765px) {
            padding: 10px 10px;
            width: 90%;
        }

        @media (min-width: 765px) and (max-width: 1024px) {
            width: 92%;
        }

        @media (min-width: 1024px) {}
    }

    .appRemission {
        .appRemission-title {
            margin-bottom: 15px;
            font-weight: 600;
            margin-left: 7px;
        }

        .search-box {
            font-size: 14px;
            display: flex;
            height: 50px;
            justify-content: center;
            align-items: center;

            >div {
                flex: 1;
                margin-top: 5px;
            }

            .el-input {
                margin-left: 10px;
                margin-right: 1%;
                width: 20%;
                height: 30px;
            }

            .email-input {
                margin-left: 20px;
            }

            .search-button {
                margin-left: 5%;
                height: 30px;
                width: 70px;
            }
        }

        .appRemission-content {
            margin-top: 10px;

            .column {
                text-align: center;
            }

            .apk-img {
                width: 100px;
                height: 100px;
                border-radius: 10px;
            }
        }
    }

    .column {
        cursor: default;
        font-weight: 600;
    }
}

.el-table {
    .first-label {
        color: #fff;
        border-radius: 5px;
        padding: 0 5px;
        margin-left: 8px;
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

    .red {
        color: $red;
        font-weight: 600;
    }

    .green {
        color: $green;
        font-weight: 600;
    }

    .black {
        color: $word-black-color;
        font-weight: 600;
    }

    .grey {
        color: $grey;
        font-weight: 600;
    }

    .yellow {
        color: $yellow;
        font-weight: 600;
    }

    .purple {
        color: $purple;
        font-weight: 600;
    }
}
</style>
