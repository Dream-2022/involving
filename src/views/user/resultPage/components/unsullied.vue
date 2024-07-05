<template>
    <div class="wow animate__fadeInRight unsullied-box">
        <div class="unsullied">
            <div class="unsullied-title">证书信息</div>
            <div class="unsullied-content">
                <div>当apk较大时，代码量会很大，造成数据流图（ICFG）呈现爆炸式增长，所以该功能比较耗时，请先喝杯咖啡，耐心等待……</div>
                <el-table :data="unsulliedList" stripe border style="width: 100%">
                    <el-table-column prop="data1" label="范围" min-width="80" />
                    <el-table-column prop="data2" label="严重级别" min-width="300" />
                    <el-table-column prop="data3" label="操作" width="100">
                        <template v-slot="{ $index }">
                            <el-button color="#547BF1" @click="toggleFileDisplay($index)" size="small">开始分析</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from "vue";

let unsulliedList = ([
    {
        data1: "病毒分析",
        data2: "使用安卓恶意软件常用的API进行污点分析",
    },
    {
        data1: "漏洞挖掘",
        data2: "漏洞挖掘场景下的污点分析",
    },
    {
        data1: "隐私合规",
        data2: "隐私合规场景下的污点分析：组件内污点传播、组件间污点传播、组件与库函数之间的污点传播",
    },
    {
        data1: "密码分析",
        data2: "分析加密算法是否使用常量密钥、静态初始化的向量（IV）、加密模式是否使用ECB等",
    },
    {
        data1: "Callback",
        data2: "因为Android中系统级的Callback并不会出现显式地进行回调方法的调用，所以如果需要分析Callback方法需要在声明文件中将其声明，这里提供一份AndroidCallbacks.txt文件，里面是一些常见的原生回调接口或类，如果有特殊接口需求，可以联系管理员",
    },
])
function toggleFileDisplay(id) {
    console.log(id)
}

</script>
<style lang="scss" scoped>
.unsullied {
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

    .unsullied-title {
        font-weight: 600;
        margin-left: 7px;
    }

    .unsullied-content {
        font-size: 15px;
        padding-bottom: 10px;
        margin-left: 7px;
        margin-top: 10px;
        line-height: 24px;
        overflow-x: auto;

        strong {
            margin-right: 5px;
        }

        div {
            margin-top: 5px;
        }
    }
}
</style>