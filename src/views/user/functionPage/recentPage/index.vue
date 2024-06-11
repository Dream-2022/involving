<template>
    <div class="recent-box">
        <div class="middle-box">
            <div class="middle-title">
                最近分析
            </div>
            <div class="middle-word">以下内容是访客的分析记录，如果您不希望公开自己的分析记录，请在上传分析前登录用户账号</div>
            <el-table :data="recentAnalysisList" style="width: 100%" stripe>
                <el-table-column prop="data1" label="应用程序" width="220">
                    <template #default="{ row }">
                        <div><img :src="row.apkIconPath" class="apk-img"></div>
                        <div><strong>{{ row.fileName }}</strong></div>
                    </template>
                </el-table-column>
                <el-table-column prop="fileName" label="文件名称" width="240" />
                <el-table-column label="风险评估" width="180">
                    <template #default="{ row }">
                        <el-button color="#547BF1" @click="CodeFileDisplay(row.id)" size="small">{{ row.apkDesc
                            }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="fileMd5" label="MD5值" width="360" />
                <el-table-column prop="detectedTime" label="最后分析时间" width="220" />
                <el-table-column label="操作" width="120" fixed="right">
                    <template #default="{ row }">
                        <el-button color="#547BF1" size="small" plain @click="safeClick(row)"
                            style="margin-left:12px; margin-bottom: 10px; ">
                            安全评分
                        </el-button>
                        <el-button color="#547BF1" size="small" @click="safeClick(row)"
                            style="margin-bottom: 10px; color:#fff;">
                            静态报告
                        </el-button>
                        <el-button color="#547BF1" size="small" plain @click="safeClick(row)"
                            style="margin-bottom: 10px;">
                            PDF报告
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { getRecentAnalysisAPI } from '@/apis/mainPage.js'
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
        if (item.apkDesc == 'scam') {
            item.apkDesc = '涉诈'
        } else if (item.apkDesc == 'sex') {
            item.apkDesc = '涉黄'
        } else if (item.apkDesc == 'gamble') {
            item.apkDesc = '涉赌'
        } else if (item.apkDesc == 'black') {
            item.apkDesc = '黑灰色'
        } else if (item.apkDesc == 'white') {
            item.apkDesc = '白名单'
        }
    });
})
// window.addEventListener('scroll', () => {
//     // 当滚动到页面底部时执行函数
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         // 发送请求获取更多数据
//         fetchData();
//     }
// });
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
    }
}
</style>