<template>
    <div class="wow animate__fadeInUp recent-box">
        <div class="middle-box">
            <div style="display: flex;">
                <div class="middle-title">
                    范本库
                </div>
                <div>
                    <el-button color="#547BF1" @click="templateVisible = true" style="margin-right: 30px; color:#fff;">
                        新增范本<i class="iconfont icon-download" style="margin-left: 5px;font-size: 12px;"></i>
                    </el-button>
                </div>
            </div>
            <el-divider />
            <el-table :data="templateList" style="width: 100%" stripe :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ 'text-align': 'center' }">
                <el-table-column label="序号" :min-width="120" fixed>
                    <template v-slot="{ $index }">
                        <span>{{ $index + 1 }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="essayTitle" label="范本名" :min-width="450" />
                <el-table-column prop="essayWriter" label="作者" :min-width="250" />
                <el-table-column prop="downloadNum" label="下载数量" :min-width="120" />
                <el-table-column prop="publicationTime" label="上传时间" :min-width="250" />
                <el-table-column label="操作" :min-width="170" fixed="right">
                    <template #default="{ row }">
                        <el-button color="#547BF1" size="small" plain @click="templateClick(row.essayId)"
                            style="margin-left:12px; margin-bottom: 10px; ">
                            查看<i class="iconfont icon-eye" style="margin-left: 5px;font-size: 13px;"></i>
                        </el-button>
                        <el-button color="#547BF1" size="small" @click="temLoadClick(row.essayId)"
                            style="margin-bottom: 10px; color:#fff;">
                            下载<i class="iconfont icon-download" style="margin-left: 5px;font-size: 12px;"></i>
                        </el-button>
                        <el-button color="#547BF1" size="small" plain @click="deleteClick(row.essayId)"
                            style="margin-left:12px; margin-bottom: 10px; ">
                            删除<i class="iconfont icon-shanchu" style="margin-left: 5px;font-size: 13px;"></i>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <el-dialog v-model="templateVisible" title="新增范本" width="500">
        <div class="bindBox">
            <table class="table">
                <tr class="tr">
                    <td class="td">名称</td>
                    <td class="td">
                        <input v-model="template.name" class="template-input" placeholder="请输入范本名称">
                    </td>
                    <td class="td"></td>
                </tr>
                <tr class="tr">
                    <td class="td">作者</td>
                    <td class="td">
                        <input v-model="template.author" class="template-input" placeholder="请输入范本作者">
                    </td>
                    <td class="td"></td>
                </tr>
                <tr class="tr">
                    <td class="td">内容</td>
                    <td class="td">{{ template.essayFile == null ? '暂未上传' : "已上传" }}</td>
                    <td class="td">
                        <el-button type="small" color="#547BF1" @click="updateClick">上传文件</el-button>
                        <input class="fileInput" type="file" accept="application/pdf" style="display: none;"
                            @change="handleAvatarChange">
                    </td>
                </tr>
            </table>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="addClick" color="#547BF1">添加</el-button>
                <el-button @click="personVisible = false">关闭</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { getTemplateAPI, getEssayPreviewAPI, getEssayLoadAPI } from '@/apis/mainPage.js'
import { essayUploadAPI } from '@/apis/manage.js'
let templateList = ref([])
let template = ref({
    name: '',
    author: '',
    essayFile: null
})
let templateVisible = ref(false)
import { ElMessageBox } from 'element-plus'
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
//新增范本
async function addClick() {
    if (template.value.name == '') {
        ElMessage.warning('范本名称不应该为空！')
        return
    }
    if (template.value.author == '') {
        ElMessage.warning('范本作者不应该为空！')
        return
    }
    if (template.value.essayFile == null) {
        ElMessage.warning('范本内容不应该为空！')
        return
    }
    // let formData = new FormData()
    // formData.append('essayTitle', template.value.name)
    // formData.append('essayWriter', template.value.author)
    // formData.append('essayFile', template.value.essayFile)
    // var blob = new Blob([template.value.essayFile], { type: 'application/pdf' })
    const formData = new FormData();
    formData.append('essayFile', template.value.essayFile);
    const res = await essayUploadAPI(template.value.name, template.value.author, template.value.essayFile, 'v')
    // const res = await essayUploadAPI(template.value.name, template.value.author, new File([blob], '123.pdf', { type: 'application/pdf' }), 'v')
    console.log(res.data)
}
//点击上传文件
function updateClick() {
    let fileInput = document.querySelector('.fileInput')
    if (fileInput) {
        fileInput.click();
    }
}
const handleAvatarChange = (async (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log(e.target.result)
            template.value.essayFile = e.target.result; // 上传
        };
        reader.readAsDataURL(file);
    }
});
function deleteClick() {
    ElMessageBox.confirm(
        '确认删除该范本库吗？',
        '警告',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            ElMessage({
                type: 'success',
                message: '删除成功',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '删除失败',
            })
        })

}
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
    width: 97%;
    min-width: 600px;
    margin: 20px auto;
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
            margin-right: auto;
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

.table {
    border: 1px solid #eceffe;
    border-radius: 10px;
    border-collapse: collapse;
    box-sizing: border-box;
    width: 100%;

    .template-input {
        border: 1px solid #ccc;
        height: 25px;
        border-radius: 5px;
        font-size: 14px;
        width: 100%;
        padding: 5px 3px;
    }

    .tr:last-child {
        border: 0px;
    }

    .tr {
        display: flex;
        justify-content: space-between;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #eceffe;
        margin-left: 20px;
        margin-right: 20px;

        .iconImg {
            border-radius: 50px;
        }

        .td {
            flex: 1;
        }

        .td:nth-child(2) {
            flex: 6;
        }

        .td:nth-child(1),
        .td:nth-child(2) {
            display: flex;
            justify-content: left;
            align-items: center;
        }

        .td:nth-child(3) {
            flex: 2;
            display: flex;
            justify-content: right;
            align-items: center;
        }

        .fileTd {
            line-height: 10px;
            display: flex;
            align-items: center;
            justify-content: left;
        }
    }
}
</style>