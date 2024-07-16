<template>
    <div id="pdfRef" class="wow animate__fadeInRight certificate-box pdfRef1">
        <div>
            <div class="URL-title">关键诈骗站点</div>
            <el-table :data="keyUrlList" style="width: 100%" stripe>
                <el-table-column label="序号" width="60" fixed>
                    <template v-slot="{ $index }">
                        <span>{{ $index + 1 }}</span>
                    </template>
                </el-table-column>kll
                <el-table-column prop="arrLis[0]" label="网址信息" :min-width="400" />
                <el-table-column label="分析" :min-width="100">
                    <template #default="{ row }">
                        <el-button color="#065fed" @click="urlClick(row.url)" plain>安全评分</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
let keyUrlList = reactive([])
onMounted(async () => {
    const result = JSON.parse(localStorage.getItem('dynamicDataList'))
    console.log(result)
    if (result != null && result != undefined && result != '' && result && result.urlList) {
        keyUrlList.splice(0, keyUrlList.length, ...result.urlList);
    }
    for (let i = 0; i < keyUrlList.length; i++) {
        if (keyUrlList[i].res == "正常请求") {
            keyUrlList.splice(i, 1);
            i--;
            continue
        }
        let arr = keyUrlList[i].url.split('?');
        keyUrlList[i].arrLis = arr
    }
    console.log(keyUrlList)
})
function urlClick() {

}
</script>
<style lang="scss" scoped>
.certificate-box {
    border-radius: 5px;
    margin: 20px auto;

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

    .URL-title {
        font-weight: 600;
        margin-bottom: 10px;
    }
}
</style>