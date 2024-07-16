<template>
    <div class="wow animate__fadeInUp my-analysis">
        <div class="middle-box">
            <div class="middle-title">
                我的分析
            </div>
            <div class="middle-word">以下内容是我的分析记录，如果您不希望公开自己的分析记录，请在上传分析前登录用户账号</div>
            <el-table :data="myAnalysisList" style="width: 100%" stripe :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ 'text-align': 'center' }">
                <el-table-column prop="data1" label="应用程序" width="220">
                    <template #default="{ row }">
                        <div><img :src="row.apkIconPath" class="apk-img"></div>
                        <div><strong>{{ row.apkName }}</strong></div>
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
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from '@/stores/userStore.js'
import { getMyAnalysisAPI } from '@/apis/mainPage.js'
import { getApkInfoAPI } from '@/apis/apkInfo.js'
import { useRouter } from 'vue-router';
const router = useRouter();
const userStore = useUserStore()
let myAnalysisList = ref([])
onMounted(async () => {
    //获取我的分析
    userStore.initialize()
    const res1 = await getMyAnalysisAPI('1', userStore.user.userMail, 'v')
    console.log(res1.data)
    myAnalysisList.value = res1.data.data.records
    myAnalysisList.value.forEach(item => {
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
//获取我的分析记录的标签颜色
function getLabelColor(word) {
    if (word == '黑灰色') {
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
.my-analysis {
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