<template>
    <div class="certificate-box">
        <div class="certificate">
            <div class="certificate-title">证书信息</div>
            <div class="certificate-content">
                <div>二进制文件已签名</div>
                <div><strong>v1 签名: </strong>True</div>
                <div><strong>v2 签名: </strong>True</div>
                <div><strong>v3 签名: </strong>False</div>
                <div><strong>v4 签名: </strong>False</div>
                <div><strong>主题: </strong>C=CN, ST=北京市, L=北京市, O=中国建设银行股份有限公司, OU=中国建设银行股份有限公司, CN=中国建设银行股份有限公司</div>
                <div><strong>签名算法: </strong>rsassa_pkcs1v15</div>
                <div><strong>有效期自: </strong>2011-09-30 07:35:04+00:00</div>
                <div><strong>有效期至: </strong>3011-01-31 07:35:04+00:00</div>
                <div><strong>发行人: </strong>C=CN, ST=北京市, L=北京市, O=中国建设银行股份有限公司, OU=中国建设银行股份有限公司, CN=中国建设银行股份有限公司</div>
                <div><strong>序列号: </strong>0x4e857128</div>
                <div><strong>哈希算法: </strong>sha1</div>
                <div><strong>证书MD5: </strong>e911247e7d7aa0ac58e1f2c92702e7b8</div>
                <div><strong>证书SHA1: </strong>4ce1b6fac00b237babb74f3dee61a80b697600b7</div>
                <div><strong>证书SHA256: </strong>c8191338f1172be788266fef54bc0c643e9a86b7073b1d3eca2fb787f5bbe0d8</div>
                <div><strong>证书SHA512:</strong>
                    3dde7a6e9f845047359ad2342165636b369fc2346ff7fece3a9f38cfdb116180561039484006970eebd2f05a9eaa2d54ec0ba7cc02e118e7b2cc39059967b8d0
                </div>
                <div><strong>公钥算法: </strong>rsa</div>
                <div><strong>密钥长度: </strong>1024</div>
                <div><strong>指纹: </strong>bb9fb943dcde399d35e5a91beffaead2980e05f9719e164474d856ea0cfb850c</div>
                <div>找到 1 个唯一证书</div>
            </div>
        </div>
    </div>
</template>
<script setup>

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

    ::-webkit-scrollbar {
        height: 12px;
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