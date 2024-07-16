<template>
    <div class="wow animate__fadeInRight appRemission-box">
        <div class="appRemission">
            <div class="appRemission-title">用户管理</div>
            <div class="search-box">
                <span style="margin-right: 10px;">查找用户：</span>
                <el-input v-model="usernameInput" :prefix-icon="User" style="flex: 2; height: 30px;" clearable
                    placeholder="请输入要查找的用户信息" />
                <span style="flex: 2;  margin-left: 1%;margin-right: 2%;">
                    <span>是否为会员：</span>
                    <el-dropdown style="margin-top: 5px;">
                        <span class="el-dropdown-link">
                            全部用户
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>全部用户</el-dropdown-item>
                                <el-dropdown-item>会员用户</el-dropdown-item>
                                <el-dropdown-item>普通用户</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <el-button color="#368eec" class="search-button" @click="searchClick">搜索</el-button>
                </span>
            </div>
            <div class="appRemission-content">
                <el-table :data="userList" style="width: 100%" stripe :header-cell-style="{ 'text-align': 'center' }"
                    :cell-style="{ 'text-align': 'center' }">
                    <el-table-column fixed label="序号" width="120">
                        <template v-slot="{ $index }">
                            <span>{{ $index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="头像" width="200">
                        <template #default="{ row }">
                            <img v-if="row?.userIconPath == '' || row?.userIconPath == null || !row?.userIconPath"
                                src="@/assets/img/title.png" class="drop-img">
                            <img v-else :src="row?.userIconPath" class="drop-img">
                        </template>
                    </el-table-column>
                    <el-table-column prop="userMail" label="邮箱" width="200" />
                    <el-table-column label="用户类型" width="200">
                        <template #default="{ row }">
                            <div :class="row.isVip == 1 ? 'vip' : 'noVip'">{{ row.isVip == 1 ? '会员用户' : '普通用户' }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="totalPoints" label="会员积分" width="150" />
                    <el-table-column prop="totalFriends" label="邀请好友数" width="150" />
                    <el-table-column prop="totalDetections" label="用户检测数" width="150" />
                    <el-table-column fixed="right" label="操作" width="180">
                        <template #default="{ row }">
                            <div>
                                <el-button color="#368eec" size="small" style="margin-bottom: 10px;">设置会员</el-button>
                            </div>
                            <div>
                                <el-button color="#e6a23c" size="small" @click="deleteClick(row.email)"
                                    style="margin-bottom: 10px; color:#fff;">注销用户</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { User, Message, ArrowDown } from '@element-plus/icons-vue';
import { getUserAPI } from '@/apis/manage.js'
let usernameInput = ref('')
const userList = ref([])
onMounted(() => {
    getUsers(1, '')
})
async function getUsers(pageNum, value) {
    const res = await getUserAPI(pageNum, 10, 'v', value)
    console.log(res.data)
    userList.value = res.data.data.records
}
async function searchClick() {
    console.log(usernameInput.value)
    getUsers(1, usernameInput.value)
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
            margin-bottom: 15px;
            font-weight: 600;
            margin-left: 7px;
        }

        .search-box {
            font-size: 14px;
            display: flex;
            height: 50px;
            justify-content: center;
            align-items: center;

            >div {
                flex: 2;
                margin-top: 5px;
            }

            .el-input {
                margin-left: 10px;
                margin-right: 1%;
                width: 20%;
                height: 30px;
            }

            .email-input {
                margin-left: 20px;
            }

            .search-button {
                margin-left: 5%;
                height: 30px;
                width: 70px;
            }
        }

        .appRemission-content {
            margin-top: 10px;

            .column {
                text-align: center;
            }

            .vip {
                font-weight: 600;
                color: $yellow;
            }

            .noVip {
                font-weight: 600;
            }

            .drop-img {
                height: 80px;
                width: 80px;
                border-radius: 40px;
            }
        }
    }

    .column {
        cursor: default;
        font-weight: 600;
    }
}
</style>
