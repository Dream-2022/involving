<template>
    <div class="wow animate__fadeInRight appRemission-box pdfRef1">
        <div class="appRemission">
            <div class="appRemission-title">运行时权限</div>
            <div class="appRemission-content">
                <el-table :data="appRemissionList" :header-cell-style="{ 'text-align': 'center' }" class="pdfRef1"
                    style="width: 100%" stripe>
                    <el-table-column fixed prop="permissionApplication" label="权限名称" width="360" />
                    <el-table-column prop="permissionType" label="权限内容" width="150" />
                    <el-table-column prop="permissionDetail" label="权限描述" width="580" />
                    <el-table-column fixed="right" label="安全等级" width="220">
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
import { ref, onMounted } from 'vue'
let appRemissionList = ref([
    { "permissionApplication": "android.permission.INTERNET", "isDangerous": "<div style=\"color:#368eec\">普通权限</div><div style=\"color:#4d4d4d\">即时权限</div>", "permissionType": "拥有完全的网络访问权限", "permissionDetail": "允许该应用创建网络套接字和使用自定义网络协议。浏览器和其他某些应用提供了向互联网发送数据的途径，因此应用无需该权限即可向互联网发送数据。" },
    { "permissionApplication": "android.permission.ACCESS_NETWORK_STATE", "isDangerous": "<div style=\"color:#368eec\">普通权限</div><div style=\"color:#4d4d4d\">即时权限</div>", "permissionType": "查看网络连接", "permissionDetail": "允许该应用查看网络连接的相关信息，例如存在和连接的网络。" },
    { "permissionApplication": "android.permission.READ_PHONE_STATE", "isDangerous": "<div style=\"color:#F56C6C\">危险权限</div>", "permissionType": "读取手机状态和身份", "permissionDetail": "允许该应用访问设备的电话功能。此权限可让该应用确定本机号码和设备 ID、是否正处于通话状态以及拨打的号码。" },
    { "permissionApplication": "android.permission.ACCESS_FINE_LOCATION", "isDangerous": "<div style=\"color:#F56C6C\">危险权限</div>", "permissionType": "访问确切位置信息（以 GPS 和网络为依据）", "permissionDetail": "允许该应用通过全球定位系统(GPS)或网络位置信息源（例如基站和WLAN）获取您的精确位置信息。您必须在设备上开 启这些位置信息服务，应用才能获得位置信息。应用会使用此类服务确定您的位置，这可能会消耗更多电量。" },
    { "permissionApplication": "android.permission.ACCESS_COARSE_LOCATION", "isDangerous": "<div style=\"color:#F56C6C\">危险权限</div>", "permissionType": "访问大致位置信息（以网络为依据）", "permissionDetail": "允许该应用获取您的大致位置信息。这类位置信息来自于使用网络位置信息源（例如基站和WLAN）的位置信息服务。您必须在设备上开启这些位置信息服务，应用才能获得位置信息。应用会使用此类服务确定您的大概位置。" },
    { "permissionApplication": "com.android.launcher.permission.INSTALL_SHORTCUT", "isDangerous": "<div style=\"color:#368eec\">普通权限</div>", "permissionType": "安装快捷方式", "permissionDetail": "允许应用自行添加主屏幕快捷方式。" }
])
onMounted(async () => {
    console.log(appRemissionList.value)
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