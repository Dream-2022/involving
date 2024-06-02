<template>
    <div class="appRemission-box">
        <div class="appRemission">
            <div class="appRemission-title">应用权限</div>
            <div class="appRemission-content">
                <el-table :data="appRemissionList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column fixed prop="data1" label="权限名称" width="350" />
                    <el-table-column prop="data2" label="权限内容" width="150" />
                    <el-table-column prop="data3" label="权限描述" width="620" />
                    <el-table-column prop="data4" label="关联代码" width="150" />
                    <el-table-column fixed="right" prop="data4" label="安全等级" width="90">
                        <template #default="{ row }">
                            <div class="column" :class="getButtonClass(row.data5)">
                                {{ row.data5 }}
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script setup>
const appRemissionList = [
    {
        data1: 'com.ccb.scchome.thridcall',
        data2: '未知权限',
        data3: '来自 android 引用的未知权限。',
        data4: 'Los Angeles',
        data5: '危险',
    },
    {
        data1: 'com.ccb.scchome.permission.JPUSH_MESSAGE',
        data2: '未知权限',
        data3: '来自 android 引用的未知权限。',
        data4: 'Los Angeles',
        data5: '警告',
    },
    {
        data1: 'com.ccb.scchome.permission.MIPUSH_RECEIVE',
        data2: '未知权限',
        data3: 'Android 11引入与包可见性相关的权限，允许查询设备上的任何普通应用程序，而不考虑清单声明。',
        data4: 'Los Angeles',
        data5: '未知',
    },
    {
        data1: 'com.coloros.mcs.permission.RECIEVE_MCS_MESSAGE',
        data2: '获取已安装应用程序列表',
        data3: '访问额外位置提供程序命令，恶意应用程序可能会使用它来干扰GPS或其他位置源的操作。',
        data4: 'Los Angeles',
        data5: '安全',
    }, {
        data1: 'com.ccb.scchome.thridcall',
        data2: '未知权限',
        data3: '来自 android 引用的未知权限。',
        data4: 'Los Angeles',
        data5: '普通',
    },
    {
        data1: 'com.ccb.scchome.permission.JPUSH_MESSAGE',
        data2: '未知权限',
        data3: '来自 android 引用的未知权限。',
        data4: 'Los Angeles',
        data5: '安全',
    },
    {
        data1: 'com.ccb.scchome.permission.MIPUSH_RECEIVE',
        data2: '未知权限',
        data3: 'Android 11引入与包可见性相关的权限，允许查询设备上的任何普通应用程序，而不考虑清单声明。',
        data4: 'Los Angeles',
        data5: '安全',
    },
    {
        data1: 'com.coloros.mcs.permission.RECIEVE_MCS_MESSAGE',
        data2: '获取已安装应用程序列表',
        data3: '访问额外位置提供程序命令，恶意应用程序可能会使用它来干扰GPS或其他位置源的操作。',
        data4: 'Los Angeles',
        data5: '普通',
    },
    {
        data1: 'com.ccb.scchome.thridcall',
        data2: '未知权限',
        data3: '来自 android 引用的未知权限。',
        data4: 'Los Angeles',
        data5: '危险',
    },
    {
        data1: 'com.ccb.scchome.permission.JPUSH_MESSAGE',
        data2: '未知权限',
        data3: '来自 android 引用的未知权限。',
        data4: 'Los Angeles',
        data5: '警告',
    },
    {
        data1: 'com.ccb.scchome.permission.JPUSH_MESSAGE',
        data2: '未知权限',
        data3: '来自 android 引用的未知权限。',
        data4: 'Los Angeles',
        data5: '安全',
    },
    {
        data1: 'com.coloros.mcs.permission.RECIEVE_MCS_MESSAGE',
        data2: '获取已安装应用程序列表',
        data3: '访问额外位置提供程序命令，恶意应用程序可能会使用它来干扰GPS或其他位置源的操作。',
        data4: 'Los Angeles',
        data5: '安全',
    },
]
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

    .table-column1 {
        color: $green;
    }

    .table-column2 {
        color: $back-color;
    }

    .table-column3 {
        color: $yellow;
    }

    .table-column4 {
        color: $red;
    }

    .table-column5 {
        color: $grey;
    }

    .table-column6 {
        color: $blue;
    }

    .table-column7 {
        color: $word-black-color;
    }
}
</style>