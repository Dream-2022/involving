<template>
    <div class="wow animate__fadeInUp member-box">
        <div class="top-box">
            <div class="top-title">
                会员权限
            </div>
            <div class="top-word">
                1) 会员用户：只需<em style="font-size: 20px;color: rgb(217, 83, 0);font-weight: 600;"> 399 </em>&nbsp;元
                <ul class="top-ul">
                    <li class="top-word">
                        享受动态分析
                    </li>
                    <li class="top-word">
                        APK文件大小超过100M
                    </li>
                    <li class="top-word">
                        分析APP数量超过300个
                    </li>
                    <li class="top-word">
                        导出内容到Excel
                    </li>
                    <li class="top-word">
                        生成Word分析文档
                    </li>
                    <li class="top-word">
                        查看Java源代码
                    </li>
                </ul>
            </div>
            <div class="top-word">
                2) 如果APK分析量很大，请联系客服人员
            </div>
            <div class="red-word">
                提示：请先确保您在支付前，已注册并登录本站账户；支付时，请在备注中填写您的注册手机号，以便为您升级账户！
            </div>
        </div>
        <div class="button-box">
            <div class="in-box">
                <div class="button-word">您当前为 普通 用户，支付即可享受会员权限 >></div>
                <el-button color="#547BF1" @click="payClick">
                    立即支付<span class="iconfont icon-zhifu"></span>
                </el-button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { payAPI } from '@/apis/member.js'
import { useUserStore } from '@/stores/userStore.js'
const userStore = useUserStore();
let userInfo = ref([])
onMounted(() => {
    userInfo.value = userStore.user
})
async function payClick() {
    if (userInfo == null) {
        ElMessage.warning('请登录后再购买会员')
        return
    }
    console.log('点击支付')
    const res = await payAPI('1', '1', '399', 'v', userStore.user.userMail)
    console.log(res.data)
}
</script>
<style lang="scss" scoped>
.member-box {
    width: 90%;
    min-width: 600px;
    margin: 120px auto;
    position: relative;
    background-color: #fff;
    padding-top: 10px;
    border-radius: 10px 10px 5px 5px;
    box-shadow: 0px 6px 10px 3px rgba(0, 0, 0, 0.1);

    .top-box {
        color: $word-black-color;
        width: 95%;
        margin: 20px auto;

        .top-title {
            font-weight: 600;
            font-size: 18px;
        }

        .top-word,
        .red-word {
            margin-top: 15px;
            margin-bottom: 10px;
            font-size: 16px;
        }

        .top-ul {
            margin-left: 40px;
        }

        .red-word {
            color: rgb(217, 0, 0);
        }
    }

    .button-box {
        box-shadow: 0 -2px 10px 3px rgba(0, 0, 0, 0.05);
        border-radius: 0 0 5px 5px;
        margin-top: 100px;
        background-color: #e6e9ef;

        .in-box {
            height: 70px;
            width: 95%;
            margin: 0 auto;
            display: flex;
            align-items: center;

            .el-button {
                height: 35px;
            }

            .iconfont::before {
                font-size: 18px;
                margin-left: 5px;
            }
        }

        .button-word {
            margin-right: auto;
        }
    }
}
</style>