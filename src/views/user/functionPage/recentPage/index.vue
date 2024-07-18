<template>
    <div class="wow animate__fadeInUp recent-box">
        <div class="middle-box">
            <div class="middle-title">
                最近分析
            </div>
            <div class="middle-word">以下内容是访客的分析记录，如果您不希望公开自己的分析记录，请在上传分析前登录用户账号</div>
            <el-table :data="recentAnalysisList" style="width: 100%" stripe
                :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
                <el-table-column prop="data1" label="应用程序" width="220">
                    <template #default="{ row }">
                        <div><img :src="row.apkIconPath" class="apk-img"></div>
                        <div><strong>{{ row.apkName }}</strong></div>
                    </template>
                </el-table-column>
                <el-table-column prop="fileName" label="文件名称" width="240" />
                <el-table-column label="类型" width="180">
                    <template #default="{ row }">
                        <span class="first-label" :class="getClass(row?.apkDesc)">{{ row?.apkDesc }}
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
                        <el-button color="#547BF1" size="small" plain @click="scoreClick(row.fileMd5)"
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
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import { getApkInfoAPI, getQuarkReportAPI } from '@/apis/apkInfo.js'
import { getRecentAnalysisAPI } from '@/apis/mainPage.js'
const router = useRouter();
let recentAnalysisList = ref([])
onMounted(async () => {
    //获取最近分析
    const res1 = await getRecentAnalysisAPI('1', 'v')
    console.log(res1.data)
    recentAnalysisList.value = res1.data.data.records
    recentAnalysisList.value.forEach(item => {
        const date = new Date(item.detectedTime);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        item.detectedTime = formattedDate;
    });
})
async function safeClick(md5) {
    console.log(md5)
    const res = await getApkInfoAPI(md5, 'v')
    console.log(res.data)
    localStorage.setItem('staticDataList', JSON.stringify(res.data.data))
    router.push('/userResultPage')
}
async function scoreClick(md5) {
    const res = await getQuarkReportAPI(md5, 'v')
    console.log(res.data)
    const htmlContent = res.data.message
    const newWindow = window.open('', `_blank`);
    newWindow.document.write(htmlContent);
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
.recent-box {
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

        .middle-title {
            font-weight: 600;
            font-size: 18px;
        }

        .middle-word {
            margin-top: 15px;
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

        .el-table {
            .colorLabel {
                font-weight: 600;
            }

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
}
</style>