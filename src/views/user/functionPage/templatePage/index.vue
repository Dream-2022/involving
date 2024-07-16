<template>
    <div class="wow animate__fadeInUp recent-box">
        <div class="middle-box">
            <div class="middle-title">
                范本库
            </div>
            <el-table :data="templateList" style="width: 100%" stripe :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ 'text-align': 'center' }">
                <el-table-column label="序号" width="120" fixed>
                    <template v-slot="{ $index }">
                        <span>{{ $index + 1 }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="essayTitle" label="范本名" width="450" />
                <el-table-column prop="essayWriter" label="作者" width="250" />
                <el-table-column prop="downloadNum" label="下载数量" width="120" />
                <el-table-column prop="publicationTime" label="上传时间" width="250" />
                <el-table-column label="操作" width="170" fixed="right">
                    <template #default="{ row }">
                        <el-button color="#547BF1" size="small" plain @click="templateClick(row.essayId)"
                            style="margin-left:12px; margin-bottom: 10px; ">
                            查看<i class="iconfont icon-eye" style="margin-left: 5px;font-size: 13px;"></i>
                        </el-button>
                        <el-button color="#547BF1" size="small" @click="temLoadClick(row.essayId)"
                            style="margin-bottom: 10px; color:#fff;">
                            下载<i class="iconfont icon-download" style="margin-left: 5px;font-size: 12px;"></i>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { getTemplateAPI } from '@/apis/mainPage.js'
import { getEssayPreviewAPI, getEssayLoadAPI } from '@/apis/mainPage.js'
let templateList = ref([])
onMounted(async () => {
    //获取范本库
    const res = await getTemplateAPI('1', 'v')
    templateList.value = res.data.data.records
    console.log(templateList.value)
    templateList.value.forEach((item) => {
        if (item.essayLabel && item.essayLabel != '') {
            item.labelList = item.essayLabel.split(';');
        }
    })
})
//点击下载范本
async function temLoadClick(id) {
    const res = await getEssayLoadAPI('v', id)
    if (res.data.message == "下载范文成功") {
        ElMessage.success('下载中...')
        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.href = res.data.data
        a.click();
        document.body.removeChild(a);
    }
}
//点击查看范本
async function templateClick(id) {
    console.log(id)
    const res = await getEssayPreviewAPI('v', id)
    console.log(res)
    const htmlContent = res.data
    const newWindow = window.open('', `_blank`);
    newWindow.document.write(htmlContent);
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
        }
    }
}
</style>