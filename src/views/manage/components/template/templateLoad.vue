<template>
    <div class="wow animate__fadeInRight appRemission-box">
        <div class="appRemission">
            <div class="appRemission-title">应用权限</div>
            <div class="appRemission-content">
                <el-table :data="appRemissionList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column fixed prop="permissionApplication" label="权限名称" width="360" />
                    <el-table-column prop="permissionType" label="权限内容" width="150" />
                    <el-table-column prop="permissionDetail" label="权限描述" width="580" />
                    <el-table-column prop="fileMd5" label="MD5" width="290" />
                    <el-table-column fixed="right" label="安全等级" width="120">
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
</script>
<style lang="scss" scoped></style>
