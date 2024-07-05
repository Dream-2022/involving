<template>
    <div class="wow animate__fadeInRight listOfFiles-box">
        <div class="listOfFiles">
            <div class="listOfFiles-title">文件列表</div>
            <div class="listOfFiles-content">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item :title="disabled ? '点击展开' : '点击收起'" @click="toggleDisabled" name="1">
                        <div v-for="item in fileList" :key="item">
                            {{ item }}
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, reactive } from 'vue'
let disabled = ref(false)
let fileList = reactive({})
onMounted(() => {
    const result = JSON.parse(localStorage.getItem('staticDataList'))
    console.log(result)
    // fileList.splice(0, fileList.length, ...result.permissionInfo);
    // console.log(fileList)
})
function toggleDisabled() {
    disabled.value = !disabled.value
}
</script>
<style lang="scss" scoped>
.listOfFiles {
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

    .listOfFiles-title {
        font-weight: 600;
        margin-left: 7px;
    }

    .listOfFiles-content {
        font-size: 15px;
        padding-bottom: 10px;
        margin-left: 7px;
        margin-top: 20px;
        line-height: 24px;
        overflow-x: auto;

        strong {
            margin-right: 5px;
        }

        div {
            margin-top: 5px;
        }
    }

    ::-webkit-scrollbar {
        height: 12px;
    }
}
</style>