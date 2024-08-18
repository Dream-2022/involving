<template>
    <div class="wow animate__fadeInRight appRemission-box pdfRef1">
        <div class="appRemission">
            <div class="appRemission-title">应用权限</div>
            <div class="appRemission-content">
                <el-table :data="appRemissionList" class="pdfRef1" style="width: 100%" stripe>
                    <el-table-column fixed prop="permissionApplication" label="权限名称" min-width="360" />
                    <el-table-column prop="permissionType" label="权限内容" min-width="150" />
                    <el-table-column prop="permissionDetail" label="权限描述" min-width="580" />
                    <el-table-column prop="fileMd5" label="MD5" min-width="290" />
                    <el-table-column fixed="right" label="安全等级" min-width="120">
                        <template #default="{ row }">
                            <div class="column" :class="getButtonClass(row.data5)" v-html="row.isDangerous">
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
let appRemissionList = reactive([])
onMounted(async () => {
    const result = JSON.parse(localStorage.getItem('staticDataList'))
    console.log(result)
    appRemissionList.splice(0, appRemissionList.length, ...result.permissionInfo);
    console.log(appRemissionList)
})
//为不同的安全类型设置类名
function getButtonClass(securityLevel) {
    if (securityLevel === '安全') {
        return 'table-column1';
    } else if (securityLevel === '普通') {
        return 'table-column2';
    } else if (securityLevel === '警告') {
        return 'table-column3';
    } else if (securityLevel === '危险') {
        return 'table-column4';
    } else if (securityLevel === '未知') {
        return 'table-column5';
    } else if (securityLevel === '信息') {
        return 'table-column6';
    } else if (securityLevel === '屏蔽') {
        return 'table-column7';
    }
}
</script>
<style lang="scss" scoped>
.appRemission-box {
    margin-bottom: 50px;

    >div {
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
    }

    .appRemission {
        .appRemission-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .appRemission-content {
            margin-top: 10px;

            .column {
                text-align: center;
            }
        }
    }

    .column {
        cursor: default;
        font-weight: 600;
    }
}

::-webkit-scrollbar {
    width: 2.5px;
}
</style>