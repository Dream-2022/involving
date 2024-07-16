<template>
    <div class="wow animate__fadeInRight thirdParty-box">
        <div class="thirdParty">
            <div class="thirdParty-title">第三方SDK</div>
            <div class="thirdParty-content">
                <el-table :data="thirdPartyList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column prop="data1" label="SDK名称" :min-width="100" />
                    <el-table-column label="开发者" :min-width="100">
                        <template #default="{ row }">
                            <a :href="row.data2" target="_blank">{{ row.data3 }}</a>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data4" label="描述信息" :min-width="350" />
                </el-table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from "vue";
const thirdPartyList = ref(
    {
        data1: 'C++ 共享库',
        data2: 'https://developer.android.com/ndk/guides/cpp-support/',
        data3: 'Android',
        data4: '在 Android 应用中运行原生代码',
    },
    {
        data1: 'Conscrypt',
        data2: 'https://developer.android.com/ndk/guides/cpp-support/',
        data3: 'Google',
        data4: 'Conscrypt 是一个 Java 安全提供程序 (JSP)，它实现了部分 Java 加密扩展 (JCE) 和 Java 安全套接字扩展 (JSSE)。 它使用 BoringSSL 为 Android 和 OpenJDK 上的 Java 应用程序提供加密原语和传输层安全性 (TLS)。 有关所提供内容的详细信息，请参阅功能文档。',
    },
    {
        data1: '岳鹰全景监控',
        data2: 'https://yueying-docs.effirst.com/',
        data3: 'Alibaba',
        data4: '岳鹰全景监控，是阿里 UC 官方出品的先进移动应用线上监控平台，为多家知名企业提供服务。',
    }
)
</script>
<style lang="scss" scoped>
.thirdParty {
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

    .thirdParty-title {
        font-weight: 600;
        margin-left: 7px;
    }

    .thirdParty-content {
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