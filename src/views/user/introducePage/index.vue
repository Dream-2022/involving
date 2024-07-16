<template>
    <div class="file-class">
        <div class="wow fadeInDown file-box">
            <div class="icon-box" @click="exitClick">
                <span class="iconfont icon-left"
                    style="border-radius:0 25px 25px 0;padding:22px;padding-left: 20px;"></span>
            </div>
            <span class="file-title">关于我们</span>
        </div>
        <div class="wow fadeInUp file-content">
            <div class="file-content-main">
                <div class="main-title">GoodAn</div>
                <div class="main-text">
                    GoodAn 安全分析平台是一款基于移动安全分析技术的安全分析平台，提供了丰富的安全分析功能，用于帮助企业和专业人员识别和控制移动设备中的安全威胁。
                </div>
                <div class="main-text">GoodAn 是 "Good Analysis"的组合，寓意提供的分析是良好、准确和可靠的，专注于提供优质的欺诈分析服务。</div>
                <el-divider content-position="left" style="font-size: 18px;">安全分析功能</el-divider>
                <div class="main-paragraph">
                    <div>1、 应用安全分析：可以对移动设备上的应用进行安全分析，识别潜在的安全风险；</div>
                    <div>2、 应用类型分析：可以对apk进行分析，识别正常，涉诈，涉赌，涉黄，黑灰产这几类不同类型的apk；</div>
                    <div>3、 安全漏洞扫描：可以扫描移动设备中的安全漏洞，识别潜在的安全威胁；</div>
                    <div>4、 威胁情报收集：自动收集APK中的敏感信息，发现有可能存在的安全威胁，发现身份指纹，为追踪溯源提供线索；</div>
                    <div>5、 动态分析：可以实时分析移动设备的运行状态，发现有可能存在的安全威胁;</div>
                    <div>6、 移动设备安全策略：可以根据移动设备的安全分析结果，制定安全策略，有效控制移动设备中的安全威胁。</div>
                </div>
                <el-divider content-position="left" style="font-size: 18px;">解决问题</el-divider>
                <div class="main-paragraph">
                    <div>1、通过自动化分析系统，对海量应用的安全性进行评估，以发现安全漏洞和风险，并且提供一系列的安全建议。</div>
                    <div>2、利用反编译技术分析安卓恶意软件的源代码，以揭示其内部工作机制。</div>
                    <div>4、自动化分析系统能够实时监控应用的安全性，并在发现安全漏洞时记录漏洞关键点。</div>
                    <div>5、利用大数据分析技术对安卓恶意软件进行挖掘，发现其隐藏的行为和模式。</div>
                    <div>6、利用模糊测试技术发现应用中的潜在安全漏洞，并采取有效措施来修复这些漏洞，从而确保应用的安全性和可靠性。</div>
                </div>
                <el-divider content-position="left" style="font-size: 18px;">一般特性</el-divider>
                <div class="main-paragraph">
                    <div>1、实时分析：GoodAn 支持实时分析，能够及时获取实时数据，并进行实时分析，实现快速反应。</div>
                    <div>2、智能分析：GoodAn 支持智能分析，能够自动识别数据模式，并进行智能分析，提高数据分析效率。</div>
                    <div>3、可视化分析：GoodAn 支持可视化分析，能够将复杂的数据可视化，更容易理解和分析。</div>
                    <div>5、支持多种数据源：GoodAn 支持多种数据源，包括证书、敏感API、IP、域名、手机号、邮箱、网址，字符串等数据。</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import WOW from "wow.js";
const router = useRouter();
onMounted(() => {
    const wow = new WOW({})
    wow.init();
})
function exitClick() {
    console.log('点击')
    router.push('/')
}
</script>
<style lang="scss" scoped>
.file-class {
    background-color: rgb(235, 242, 255);
}

.file-box {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.1);

    .iconfont:hover {
        background-color: #ccc;
    }

    .file-title {
        width: 70%;
        margin: 0 auto;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-60px);
    }
}

.file-content {
    margin-top: 60px;
    padding: 60px;
    z-index: -5;
    font-size: 14px;
    min-height: 820px;

    .file-content-main {
        background-color: #fff;
        box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.1);
        width: 70%;
        margin: 0px auto;
        padding: 30px 35px;
        border-radius: 10px;

        @media (max-width: 765px) {
            width: 90%;
        }

        @media (min-width: 765px) and (max-width: 1024px) {
            width: 80%;
        }

        @media (min-width: 1024px) {}

        .main-title {
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 15px;
        }

        .main-text {
            line-height: 25px;
            margin-bottom: 8px;
        }

        .el-divider {
            margin-top: 50px;
        }
    }

    .main-paragraph {
        margin-top: 20px;
        line-height: 30px;
    }
}
</style>