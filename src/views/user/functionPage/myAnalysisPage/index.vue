<template>
    <div class="my-analysis">
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
    }
}
</style>