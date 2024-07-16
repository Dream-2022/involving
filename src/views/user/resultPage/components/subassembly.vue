<template>
    <div class="wow animate__fadeInRight subassembly-box">
        <div class="activity">
            <div class="title">活动列表</div>
            <div class="content">
                <div class="demo-collapse">
                    <el-collapse v-model="activeActivity" @change="handleChange">
                        <el-collapse-item name="1"
                            :title="'存在 ' + subassemblyList[0]?.componentDesc?.componentAndIsExports?.length + ' 个 activity'">
                            <div>导出</div>
                            <div v-for="(item) in subassemblyList[0]?.componentDesc?.componentAndIsExports" :key="item"
                                style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden; width: 95%">
                                <div v-if="item.isExport">
                                    <el-tooltip placement="top-start">
                                        <template #content>
                                            {{ item.ComponentName }}
                                        </template>
                                        {{ item.ComponentName }}
                                    </el-tooltip>
                                </div>
                            </div>
                            <div style="margin-top: 10px;">未导出</div>
                            <div v-for="(item) in subassemblyList[0]?.componentDesc?.componentAndIsExports" :key="item"
                                style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden; width: 95%">
                                <div v-if="!item.isExport">
                                    <el-tooltip placement="top-start">
                                        <template #content>
                                            {{ item.ComponentName }}
                                        </template>
                                        {{ item.ComponentName }}
                                    </el-tooltip>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <div class="service">
            <div class="title">服务列表</div>
            <div class="content">
                <div class="demo-collapse">
                    <el-collapse v-model="activeService" @change="handleChange">
                        <el-collapse-item name="1"
                            :title="'存在 ' + subassemblyList[1]?.componentDesc?.componentAndIsExports?.length + ' 个 service'">
                            <div>导出</div>
                            <div v-for="(item) in subassemblyList[1]?.componentDesc?.componentAndIsExports" :key="item"
                                style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden; width: 95%">
                                <div v-if="item.isExport">
                                    <el-tooltip placement="top-start">
                                        <template #content>
                                            {{ item.ComponentName }}
                                        </template>
                                        {{ item.ComponentName }}
                                    </el-tooltip>
                                </div>
                            </div>
                            <div style="margin-top: 10px;">未导出</div>
                            <div v-for="(item) in subassemblyList[1]?.componentDesc?.componentAndIsExports" :key="item"
                                style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden; width: 95%">
                                <div v-if="!item.isExport">
                                    <el-tooltip placement="top-start">
                                        <template #content>
                                            {{ item.ComponentName }}
                                        </template>
                                        {{ item.ComponentName }}
                                    </el-tooltip>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <div class="receiver">
            <div class="title">广播接受者列表</div>
            <div class="content">
                <div class="demo-collapse">
                    <el-collapse v-model="activeReceiver" @change="handleChange">
                        <el-collapse-item name="1"
                            :title="'存在 ' + subassemblyList[2]?.componentDesc?.componentAndIsExports?.length + ' 个 receiver'">
                            <div v-for="(item) in subassemblyList[2]?.componentDesc?.componentAndIsExports" :key="item"
                                style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden; width: 95%">
                                <div v-if="item.isExport">
                                    <el-tooltip placement="top-start">
                                        <template #content>
                                            {{ item.ComponentName }}
                                        </template>
                                        {{ item.ComponentName }}
                                    </el-tooltip>
                                </div>
                            </div>
                            <div style="margin-top: 10px;">未导出</div>
                            <div v-for="(item) in subassemblyList[2]?.componentDesc?.componentAndIsExports" :key="item"
                                style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden; width: 95%">
                                <div v-if="!item.isExport">
                                    <el-tooltip placement="top-start">
                                        <template #content>
                                            {{ item.ComponentName }}
                                        </template>
                                        {{ item.ComponentName }}
                                    </el-tooltip>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <div class="provider">
            <div class="title">内容提供者列表</div>
            <div class="content">
                <div class="demo-collapse">
                    <el-collapse v-model="activeProvider" @change="handleChange">
                        <el-collapse-item name="1"
                            :title="'存在 ' + subassemblyList[3]?.componentDesc?.componentAndIsExports?.length + ' 个 provider'">
                            <div v-for="(item) in subassemblyList[3]?.componentDesc?.componentAndIsExports" :key="item"
                                style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden; width: 95%">
                                <div v-if="item.isExport">
                                    <el-tooltip placement="top-start">
                                        <template #content>
                                            {{ item.ComponentName }}
                                        </template>
                                        {{ item.ComponentName }}
                                    </el-tooltip>
                                </div>
                            </div>
                            <div style="margin-top: 10px;">未导出</div>
                            <div v-for="(item) in subassemblyList[3]?.componentDesc?.componentAndIsExports" :key="item"
                                style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden; width: 95%">
                                <div v-if="!item.isExport">
                                    <el-tooltip placement="top-start">
                                        <template #content>
                                            {{ item.ComponentName }}
                                        </template>
                                        {{ item.ComponentName }}
                                    </el-tooltip>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
let subassemblyList = reactive([])
let activeActivity = ref(false)
let activeService = ref(false)
let activeReceiver = ref(false)
let activeProvider = ref(false)
onMounted(() => {
    const result = JSON.parse(localStorage.getItem('staticDataList'))
    console.log(result)
    subassemblyList.splice(0, subassemblyList.length, ...result.componentInfo);
    subassemblyList.forEach((item) => {
        item.componentDesc = JSON.parse(item.componentDesc)
    })
    console.log(subassemblyList)
    console.log(subassemblyList[0])
    console.log(subassemblyList[0].componentDesc.componentAndIsExports)
})
let activityList = ([
    'us.pinguo.pat360.cameraman.wxapi.WXPayEntryActivity',
    'us.pinguo.pat360.cameraman.purchase.CMPurchaseActionActivity',
    'us.pinguo.pat360.cameraman.ui.CMPhotoActivity',
    'us.pinguo.mix.modules.beauty.BeautyActpinguo.mix.mod ules.beauty.BeautyActpinguo .mix.modules.beauty.BeautyActpinguo.mix.modules.beauty.BeautyActpinguo.mix.modules.beauty .BeautyActpinguo.mix.modules .beauty.BeautyActpinguo.mix.modules.beauty.Beaut yActpinguo.mix.mo dules.beauty.Beau tyActivity'
])
let serviceList = ([
    'us.pinguo.pat360.cameraman.wxapi.WXPayEntryActivity',
    'us.pinguo.pat360.cameraman.purchase.CMPurchaseActionActivity',
    'us.pinguo.pat360.cameraman.ui.CMPhotoActivity',
])
</script>
<style lang="scss" scoped>
.subassembly-box {
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

    .title {
        font-weight: 600;
        margin-left: 7px;
    }

    .content {
        margin-left: 7px;
        display: flex;
        margin-top: 20px;

        .demo-collapse {
            width: 100%;

            .el-tooltip {
                width: 60%;
            }

            .el-popper {
                max-width: 200px;
            }

            .is-dark {
                background-color: aqua;
            }
        }

    }
}
</style>