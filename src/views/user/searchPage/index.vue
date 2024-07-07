<template>
    <div class="file-class">
        <div class="wow fadeInDown file-box">
            <div class="icon-box" @click="exitClick">
                <span class="iconfont icon-left"
                    style="border-radius:0 25px 25px 0;padding:22px;padding-left: 20px;"></span>
            </div>
            <span class="file-title">搜索页</span>
        </div>
        <div class="wow fadeInUp file-content">
            <div class="file-content-main">
                <span class="search-input">
                    <el-input v-model="searchValue" @keyup.enter="searchClick" class="search-content"
                        placeholder="MD5，包名，文件名，APP名称" />
                    <el-button color="#065fed" @click="searchClick">搜索</el-button>
                </span>
                <div style="font-size: 14px; color: #4d4d4d;margin-bottom: 15px;">搜索结果：</div>
                <div class="search-box" v-if="searchList?.length == 0">
                    <el-empty :image-size="200" description="暂无数据" />
                </div>
                <div class="search-box" v-else>
                    <el-table :data="searchList" style="width: 100%" stripe
                        :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
                        <el-table-column fixed prop="permissionApplication" label="应用程序" width="150">
                            <template #default="{ row }">
                                <img :src="row.apkIconPath">
                                <div v-html="row.apkName"></div>
                            </template>
                        </el-table-column>
                        <el-table-column label="文件名" width="180">
                            <template #default="{ row }">
                                <div v-html="row.fileName"></div>
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
                                <div :class="getClass(row.apkDesc)">{{ row.apkDesc }}</div>
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
                                    <el-button color="#e6a23c" size="small" @click="pdfClick(row.fileMd5)"
                                        style="color:#fff;">PDF报告</el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { getSearchAPI } from '@/apis/mainPage.js'
import { getApkInfoAPI } from '@/apis/apkInfo.js'
import WOW from "wow.js";
import { ElMessage } from 'element-plus';
const router = useRouter();
const route = useRoute();
let searchValue = ref('')
const searchList = ref([])
onMounted(async () => {
    const wow = new WOW({})
    wow.init();
    searchValue.value = route.params.searchValue;
    console.log(searchValue.value)
    const res = await getSearchAPI(searchValue.value, 'v', 1)
    console.log(res.data)
    searchList.value = res.data.data
})
//获取标签颜色
function getClass(name) {
    if (name == '未知') {
        return 'greyLabel'
    } else if (name = '涉黄') {
        return 'yellowLabel'
    } else if (name = '涉诈') {
        return 'redLabel'
    } else if (name = '涉赌') {
        return 'purpleLabel'
    } else if (name = '正常') {
        return 'greenLabel'
    } else if (name = '黑灰产') {
        return 'blackLabel'
    } else {
        return 'greyLabel'
    }
}
//点击搜索
async function searchClick() {
    const res = await getSearchAPI(searchValue.value, 'v', 1)
    console.log(res.data.data)
    searchList.value = res.data.data
    router.push({ path: `/userSearchPage/${searchValue.value}`, });
}
//点击静态报告
async function staticClick(md5) {
    // let formData = new FormData();
    // formData.append('fileMd5', md5)
    // console.log(formData)
    const res = await getApkInfoAPI(md5, 'v')
    console.log(res.data.data)
    if (res.data.code == '200') {
        localStorage.setItem('staticDataList', JSON.stringify(res.data.data))
        router.push('/userResultPage')
    } else {
        ElMessage.warning(res.data.message)
    }
}
function exitClick() {
    console.log('点击')
    router.push('/')
}
</script>
<style lang="scss" scoped>
.file-class {
    background-color: rgb(235, 242, 255);
}

.file-box {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.1);

    .iconfont:hover {
        background-color: #ccc;
    }

    .file-title {
        width: 70%;
        margin: 0 auto;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-60px);
    }
}

.file-content {
    margin-top: 60px;
    padding: 60px;
    z-index: -5;
    min-height: 820px;

    .file-content-main {
        background-color: #fff;
        box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.1);
        width: 70%;
        margin: 0px auto;
        padding: 30px 35px;
        border-radius: 10px;

        @media (max-width: 765px) {
            width: 90%;
        }

        @media (min-width: 765px) and (max-width: 1024px) {
            width: 80%;
        }

        @media (min-width: 1024px) {}

        .search-boxes {
            border-top: 1px solid #ccc;
            padding-top: 20px;

            .search-box {
                border-radius: 5px;
                display: flex;
                padding: 5px;
                background-color: #ccc;


                .apk-img {
                    width: 100px;
                    height: 100px;
                    border-radius: 5px;
                }

                .box2 {
                    margin-right: auto;
                    line-height: 25px;
                    margin-left: 2%;
                }

                .box3 {
                    display: flex;
                    align-items: center;
                    margin-right: 1%;
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

        .search-input {
            display: flex;
            width: 90%;
            margin: auto;
            padding-top: 10px;
            padding-bottom: 30px;

            .search-content {
                --el-border-radius-base: 10px 0 0 10px;
            }

            .el-button {
                border-radius: 0 10px 10px 0;
                border: 0;
                height: 40px;
                width: 80px;
            }
        }

    }
}
</style>