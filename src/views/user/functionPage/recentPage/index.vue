<template>
    <div class="recent-box">
        <div class="middle-box">
            <div class="middle-title">
                最近分析
            </div>
            <div class="middle-word">以下内容是访客的分析记录，如果您不希望公开自己的分析记录，请在上传分析前登录用户账号</div>
            <el-table :data="recentList" style="width: 100%" stripe>
                <el-table-column prop="data1" label="应用程序" width="120" :max-width="120">
                    <template #default="{ row }">
                        <div><img :src="row.data1" class="apk-img"></div>
                        <div><strong>{{ row.data2 }}</strong></div>
                    </template>
                </el-table-column>
                <el-table-column prop="data3" label="文件名称" :min-width="100" :max-width="220" />
                <el-table-column prop="data4" label="风险评估" :min-width="80" :max-width="150">
                    <template #default="{ row }">
                        <el-button color="#547BF1" @click="CodeFileDisplay(row.id)" size="small">{{ row.data2
                            }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="data5" label="MD5值" :min-width="120" :max-width="250" />
                <el-table-column prop="data2" label="最后分析时间" width="90" />
                <el-table-column prop="data2" label="操作" width="120" fixed="right">
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
import { reactive } from "vue";
let recentList = reactive([
    {
        data1: "src/assets/img/avatar.jpeg",
        data2: "开盘啦 - 5.14.0.4",
        data3: "kpl_5.14.0.4.apk",
        data4: "AI评估：很危险，请谨慎安装",
        data5: "e8e9f6f95d96c970ffbc8a36bcd06a8e",
        data6: "2024-06-06 10:54:19",
    },
    {
        data1: "src/assets/img/avatar.jpeg",
        data2: "开盘啦 - 5.14.0.4",
        data3: "kpl_5.14.0.4.apk",
        data4: "AI评估：很危险，请谨慎安装",
        data5: "e8e9f6f95d96c970ffbc8a36bcd06a8e",
        data6: "2024-06-06 10:54:19",
    },
    {
        data1: "src/assets/img/avatar.jpeg",
        data2: "开盘啦 - 5.14.0.4",
        data3: "kpl_5.14.0.4.apk",
        data4: "AI评估：很危险，请谨慎安装",
        data5: "e8e9f6f95d96c970ffbc8a36bcd06a8e",
        data6: "2024-06-06 10:54:19",
    },
    {
        data1: "src/assets/img/avatar.jpeg",
        data2: "开盘啦 - 5.14.0.4",
        data3: "kpl_5.14.0.4.apk",
        data4: "AI评估：很危险，请谨慎安装",
        data5: "e8e9f6f95d96c970ffbc8a36bcd06a8e",
        data6: "2024-06-06 10:54:19",
    },
])
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