<template>
    <div id="pdfRef" class="wow animate__fadeInRight certificate-box pdfRef1">
        <div class="certificate">
            <div class="certificate-title">证书信息</div>
            <div class="certificate-content">
                <div>二进制文件已签名</div>
                <div><strong>v1 签名: </strong>{{ certificationList.v1 == true ? 'True' : 'False' }}</div>
                <div><strong>v2 签名: </strong>{{ certificationList.v2 == true ? 'True' : 'False' }}</div>
                <div><strong>v3 签名: </strong>{{ certificationList.v3 == true ? 'True' : 'False' }}</div>
                <div><strong>v4 签名: </strong>{{ certificationList.v4 == true ? 'True' : 'False' }}</div>
                <div><strong>v31 签名: </strong>{{ certificationList.v31 == true ? 'True' : 'False' }}</div>
                <div
                    v-if="certificationList && certificationList.certificateInfo && certificationList.certificateInfo.length > 0">
                    <div><strong>主题: </strong>{{ certificationList?.certificateInfo[0]?.issuer }}</div>
                    <div><strong>签名算法: </strong>{{ certificationList?.certificateInfo[0]?.signatureAlgorithm }}</div>
                    <div><strong>有效期自: </strong>{{ certificationList?.certificateInfo[0]?.startTime }}</div>
                    <div><strong>有效期至: </strong>{{ certificationList?.certificateInfo[0]?.endTime }}</div>
                    <div><strong>发行人: </strong>{{ certificationList?.certificateInfo[0]?.owner }}</div>
                    <div><strong>序列号: </strong>0x{{ certificationList?.certificateInfo[0]?.serialNumber }}</div>
                    <div><strong>哈希算法: </strong>{{ certificationList?.certificateInfo[0].hashAlgorithm }}</div>
                    <div><strong>证书MD5: </strong>{{ certificationList?.certificateInfo[0]?.md5 }}</div>
                    <div><strong>证书SHA1: </strong>{{ certificationList?.certificateInfo[0]?.sha1 }}</div>
                    <div><strong>证书SHA256: </strong>{{ certificationList?.certificateInfo[0]?.sha256 }}</div>
                    <div><strong>证书SHA512:</strong>{{ certificationList?.certificateInfo[0]?.sha512 }}</div>
                    <div><strong>公钥算法: </strong>rsa</div>
                    <div><strong>密钥长度: </strong>{{ certificationList?.certificateInfo[0]?.keySize }}</div>
                    <div><strong>指纹: </strong>{{
                    certificationList.certificateInfo[0].fingerprint != null ?
                        certificationList?.certificateInfo[0]?.fingerprint
                        : '暂无' }}</div>
                    <div>{{ certificationList?.certificateInfo.length == 1 ? '找到 1 个唯一证书' : '获取多个证书' }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
let certificationList = reactive({})
onMounted(async () => {
    const result = JSON.parse(localStorage.getItem('staticDataList'))
    console.log(result)
    Object.keys(result.signatureCertificate).forEach(key => {
        certificationList[key] = result.signatureCertificate[key];
    });
    console.log(certificationList)
})
</script>
<style lang="scss" scoped>
.certificate {
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

    .certificate-title {
        font-weight: 600;
        margin-left: 7px;
    }

    .certificate-content {
        font-size: 16px;
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

    ::-webkit-scrollbar {
        width: 8px;
    }

    /* 滚动条轨道 */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 5px;
    }

    /* 滚动条滑块 */
    ::-webkit-scrollbar-thumb {
        background: rgb(104, 174, 255);
        border-radius: 5px;
    }

    /* 当鼠标移上滚动条时，滑块的样式 */
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(67, 144, 233);
    }

}
</style>