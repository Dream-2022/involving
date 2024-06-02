<template>
    <div class="traceability-box">
        <div class="abuseAuthority">
            <div class="abuseAuthority-title">滥用权限</div>
            <div class="abuseAuthority-content">
                <div class="content-left">
                    <el-progress :percentage="percentage1" :color="customColors" />
                </div>
                <div class="content-right">
                    <el-progress :percentage="percentage2" :color="customColors" />
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const percentage1 = ref(20)
const percentage2 = ref(20)
const customColors = [
    { color: '#368eec', percentage: 30 },
    { color: '#9a9a9a', percentage: 50 },
    { color: '#e6a23c', percentage: 70 },
    { color: '#F56C6C', percentage: 100 },
]
</script>
<style lang="scss" scoped>
.traceability-box {
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

    .abuseAuthority {
        .abuseAuthority-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .abuseAuthority-content {
            margin-left: 7px;
            display: flex;

            .content-left {
                padding: 20px 0;
                padding-right: 30px;
                flex: 1;
            }

            .content-right {
                padding: 20px 0;
                padding-left: 30px;
                flex: 1;
            }
        }
    }

    #traceabilityHeading1,
    #traceabilityHeading2,
    #traceabilityHeading3,
    #traceabilityHeading4,
    #traceabilityHeading5,
    #traceabilityHeading5,
    #traceabilityHeading6,
    #traceabilityHeading7,
    #traceabilityHeading8,
    #traceabilityHeading9,
    #traceabilityHeading10 {
        transform: translateY(-103px);
    }
}
</style>