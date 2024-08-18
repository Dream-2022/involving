<template>
    <div class="wow animate__fadeInRight security-box">
        <div class="security">
            <div id="scrollspyHeading1"></div>
            <div class="title">可浏览的Activities</div>
            <div class="security-content">
                <el-table :data="securityList" stripe border style="width: 100%">
                    <el-table-column prop="data1" label="Activity" :min-width="180" />
                    <el-table-column prop="data2" label="Intent" />
                </el-table>
            </div>
        </div>
        <div class="network">
            <div id="scrollspyHeading2"></div>
            <div class="title">网络安全配置</div>
            <div class="network-content">
                <el-table :data="networkList" stripe border style="width: 100%">
                    <el-table-column label="序号" :min-width="60" fixed>
                        <template v-slot="{ $index }">
                            <span>{{ $index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data1" label="范围" :min-width="180" />
                    <el-table-column prop="data2" label="严重级别" :min-width="120" />
                    <el-table-column prop="data3" label="描述" />
                </el-table>
            </div>
        </div>
        <div class="analysis">
            <div id="scrollspyHeading3"></div>
            <div class="analysis-title">证书分析</div>
            <div class="analysis-content">
                <div class="analysis-top">
                    <div>
                        <span class="analysis-top1">高危</span><br>
                        <span><strong>0</strong></span>
                    </div>
                    <div>
                        <span class="analysis-top2">警告</span><br>
                        <span><strong>1</strong></span>
                    </div>
                    <div>
                        <span class="analysis-top3">信息</span><br>
                        <span><strong>1</strong></span>
                    </div>
                </div>
                <el-table :data="analysisList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column fixed prop="data1" label="标题" :min-width="100" :max-width="350" />
                    <el-table-column prop="data2" label="严重程度" :min-width="80" :max-width="150">
                        <template #default="{ row }">
                            <div class="column" :class="getButtonClass(row.data2)">
                                {{ row.data2 }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data3" label="描述信息" :min-width="200" />
                </el-table>
            </div>
        </div>
        <div class="manifest">
            <div id="scrollspyHeading4"></div>
            <div class="manifest-title">MANIFEST分析</div>
            <div class="manifest-content">
                <div class="manifest-top">
                    <div>
                        <span class="manifest-top1">高危</span><br>
                        <span><strong>0</strong></span>
                    </div>
                    <div>
                        <span class="manifest-top2">警告</span><br>
                        <span><strong>3</strong></span>
                    </div>
                    <div>
                        <span class="manifest-top3">信息</span><br>
                        <span><strong>1</strong></span>
                    </div>
                    <div>
                        <span class="manifest-top4">屏蔽</span><br>
                        <span><strong>1</strong></span>
                    </div>
                </div>
                <el-table :data="manifestList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column label="序号" :min-width="60" fixed>
                        <template v-slot="{ $index }">
                            <span>{{ $index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data1" label="问题" :min-width="100" />
                    <el-table-column prop="data2" label="严重程度" :min-width="80">
                        <template #default="{ row }">
                            <div class="column" :class="getButtonClass(row.data2)">
                                {{ row.data2 }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data3" label="描述信息" :min-width="200" />
                    <el-table-column prop="data4" label="操作" :min-width="100" />
                </el-table>
            </div>
        </div>
        <div class="apiInvoke">
            <div id="scrollspyHeading5"></div>
            <div class="apiInvoke-title">API调用</div>
            <div class="apiInvoke-content">
                <el-table :data="apiInvokeList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column prop="data1" label="API功能" :min-width="100" />
                    <el-table-column prop="data2" label="源码文件" :min-width="80">
                        <template #default="{ row }">
                            <!-- //v-slot="{ $index } -->
                            <el-button color="#547BF1" @click="toggleFileDisplay(row.id)" size="small">{{
                    showAPIFile[row.id] == false ? "显示文件" : "收起文件" }}</el-button>
                            <div v-if="showAPIFile[row.id]">
                                {{ row.data2 }}
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="codeAnalysis">
            <div id="scrollspyHeading6"></div>
            <div class="codeAnalysis-title">源代码分析</div>
            <div class="codeAnalysis-content">
                <div class="codeAnalysis-top">
                    <div>
                        <span class="codeAnalysis-top1">高危</span><br>
                        <span><strong>0</strong></span>
                    </div>
                    <div>
                        <span class="codeAnalysis-top2">警告</span><br>
                        <span><strong>3</strong></span>
                    </div>
                    <div>
                        <span class="codeAnalysis-top3">信息</span><br>
                        <span><strong>1</strong></span>
                    </div>
                    <div>
                        <span class="codeAnalysis-top4">安全</span><br>
                        <span><strong>1</strong></span>
                    </div>
                    <div>
                        <span class="codeAnalysis-top5">屏蔽</span><br>
                        <span><strong>1</strong></span>
                    </div>
                </div>
                <el-table :data="codeAnalysisList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column label="序号" width="60" fixed>
                        <template v-slot="{ $index }">
                            <span>{{ $index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data1" label="API功能" :min-width="70" />
                    <el-table-column prop="data3" label="参考标准" :min-width="100" />
                    <el-table-column prop="data4" label="文件位置" :min-width="80">
                        <template #default="{ row }">
                            <el-button color="#547BF1" @click="CodeFileDisplay(row.id)" size="small">{{
                    showCodeFile[row.id] == false ? "显示文件" : "收起文件" }}</el-button>
                            <div v-if="showCodeFile[row.id]">
                                {{ row.data4 }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data5" label="操作" :min-width="120" />
                    <el-table-column prop="data2" label="等级" width="90">
                        <template #default="{ row }">
                            <div class="column" :class="getButtonClass(row.data2)">
                                {{ row.data2 }}
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="dynamic">
            <div id="scrollspyHeading7"></div>
            <div class="dynamic-title">动态库分析</div>
            <div class="dynamic-content">
                <el-table :data="dynamicList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column label="序号" :min-width="60" fixed>
                        <template v-slot="{ $index }">
                            <span>{{ $index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="NX(堆栈禁止执行)" :min-width="180">
                        <template #default="{ row }">
                            <div>
                                <strong>{{ row.data2.info1 }}</strong>
                            </div>
                            <div :class="getInfoClass2(row.data2.info2)">
                                {{ row.data2.info2 }}
                            </div>
                            <div>{{ row.data2.info3 }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="STACK CANARY(栈保护)" :min-width="220">
                        <template #default="{ row }">
                            <div>
                                <strong>{{ row.data3.info1 }}</strong>
                            </div>
                            <div :class="getInfoClass2(row.data3.info2)">
                                {{ row.data3.info2 }}
                            </div>
                            <div>{{ row.data3.info3 }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="RELRO" :min-width="220">
                        <template #default="{ row }">
                            <div>
                                <strong>{{ row.data4.info1 }}</strong>
                            </div>
                            <div :class="getInfoClass2(row.data4.info2)">
                                {{ row.data4.info2 }}
                            </div>
                            <div>{{ row.data4.info3 }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="RPATH(指定SO搜索路径)" :min-width="180">
                        <template #default="{ row }">
                            <div>
                                <strong>{{ row.data5.info1 }}</strong>
                            </div>
                            <div :class="getInfoClass2(row.data5.info2)">
                                {{ row.data5.info2 }}
                            </div>
                            <div>{{ row.data5.info3 }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="RUNPATH(指定SO搜索路径)" :min-width="180">
                        <template #default="{ row }">
                            <div>
                                <strong>{{ row.data6.info1 }}</strong>
                            </div>
                            <div :class="getInfoClass2(row.data6.info2)">
                                {{ row.data6.info2 }}
                            </div>
                            <div>{{ row.data6.info3 }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="FORTIFY(常用函数加强检查)" :min-width="260">
                        <template #default="{ row }">
                            <div>
                                <strong>{{ row.data7.info1 }}</strong>
                            </div>
                            <div :class="getInfoClass2(row.data7.info2)">
                                {{ row.data7.info2 }}
                            </div>
                            <div>{{ row.data7.info3 }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="SYMBOLS STRIPPED(裁剪符号表)" :min-width="120">
                        <template #default="{ row }">
                            <div>
                                <strong>{{ row.data8.info1 }}</strong>
                            </div>
                            <div :class="getInfoClass2(row.data8.info2)">
                                {{ row.data8.info2 }}
                            </div>
                            <div>{{ row.data8.info3 }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data1" fixed="right" label="动态库" :min-width="150" />
                </el-table>
            </div>
        </div>
        <div class="fileAnalysis">
            <div id="scrollspyHeading8"></div>
            <div class="fileAnalysis-title">文件分析</div>
            <div class="fileAnalysis-content">
                <el-table :data="fileAnalysisList" style="width: 100%" stripe :row-class-name="tableRowClassName">
                    <el-table-column label="序号" :min-width="60" fixed>
                        <template v-slot="{ $index }">
                            <span>{{ $index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column fixed prop="data1" label="问题" :min-width="100" />
                    <el-table-column prop="data2" label="文件" :min-width="200" />
                </el-table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';
let showAPIFile = reactive([])
let showCodeFile = reactive([])
onMounted(() => {
    // 设置API调用那里的文件显示
    apiInvokeList.forEach((item, index) => {
        item.id = index + 1;
        showAPIFile.push(false)
    });
    // 设置源代码分析那里的文件显示
    codeAnalysisList.forEach((item, index) => {
        item.id = index + 1;
        showCodeFile.push(false)
    });
});
// 切换API调用显示状态
const toggleFileDisplay = (id) => {
    console.log(id)
    showAPIFile[id] = !showAPIFile[id];
};
// 切换源代码分析显示状态
const CodeFileDisplay = (id) => {
    console.log(id)
    showCodeFile[id] = !showCodeFile[id];
};
const securityList = [
    {
        data1: 'com.xhl.basecomponent.activity.welcome.WelcomeActivity',
        data2: 'Schemes: wanzhou.app://,' +
            'Hosts: xinhualong,' +
            'Path Prefixes: /openwith,',
    },
    {
        data1: 'com.tencent.tauth.AuthActivity',
        data2: 'Schemes: tencent1104523683:'
    }
]
const analysisList = [
    {
        data1: '已签名应用',
        data2: '信息',
        data3: '来自 android 引用的未知权限。'
    },
    {
        data1: '已签名应用',
        data2: '警告',
        data3: '应用程序已使用代码签名证书进行签名'
    },
]
const manifestList = reactive([
    {
        data1: '应用程序可以安装在有漏洞的已更新 Android 版本上Android 5.0-5.0.2, [minSdk = 21]',
        data2: '信息',
        data3: '该应用程序可以安装在具有多个未修复漏洞的旧版本 Android 上。这些设备不会从 Google 接收合理的安全更新。支持 Android 版本 => 10、API 29 以接收合理的安全更新。',
        data4: '对应用 com.yaoyu.wanzhou 禁止使用 clear_text_traffic 规则'
    },
    {
        data1: '应用程序已启用明文网络流量[android: usesCleartextTraffic=true]',
        data2: '警告',
        data3: '应用程序打算使用明文网络流量，例如明文HTTP，FTP协议，DownloadManager和MediaPlayer。针对API级别27或更低的应用程序，默认值为“true”。针对API级别28或更高的应用程序，默认值为“false”。避免使用明文流量的主要原因是缺乏机密性，真实性和防篡改保护；网络攻击者可以窃听传输的数据，并且可以在不被检测到的情况下修改它。',
        data4: '对应用 com.yaoyu.wanzhou 禁止使用 app_allowbackup 规则'
    },
    {
        data1: '应用程序数据可以被备份[android: allowBackup=true]',
        data2: '警告',
        data3: '这个标志允许任何人通过adb备份你的应用程序数据。它允许已经启用了USB调试的用户从设备上复制应用程序数据。',
        data4: '对应用 com.yaoyu.wanzhou 禁止使用 activity_explicitly_exported 规则'
    },
    {
        data1: 'Activity (com.tencent.tauth.AuthActivity) 未被保护。 [android: exported=true]',
        data2: '警告',
        data3: '发现 Activity与设备上的其他应用程序共享，因此可被设备上的任何其他应用程序访问。',
        data4: '对应用 com.yaoyu.wanzhou 禁止使用 service_explicitly_exported 规则',
    },
    {
        data1: 'Service (com.xhl.pushcomponent.core.XHLMessageService) 未被保护。[android: exported=true]',
        data2: '屏蔽',
        data3: '发现 Service与设备上的其他应用程序共享，因此可被设备上的任何其他应用程序访问。',
        data4: '对应用 com.yaoyu.wanzhou 禁止使用 service_explicitly_exported 规则',
    },
])
const networkList = [
    {
        data1: 'com.xhl.basecomponent.activity.welcome.WelcomeActivity',
        data2: 'Schemes: wanzhou.app://,' +
            'Hosts: xinhualong,',
        data3: 'ecomponent.activity.welcome.'
    },
    {
        data1: 'com.tencent.tauth.AuthActivity',
        data2: 'Schemes: tencent1104523683:',
        data3: 'com.xhl.basecomponent.activity.welcome.WelcomeActivity',
    }]
const apiInvokeList = reactive([
    {
        data1: 'com.xhl.basecomponent.activity.welcome.WelcomeActivity',
        data2: 'Schemes: wanzhou.app://,' +
            'Hosts: xinhualong,',
    },
    {
        data1: 'com.tencent.tauth.AuthActivity',
        data2: 'Schemes: tencent1104523683:',
    }
])
const codeAnalysisList = reactive([
    {
        data1: 'IP地址泄露',
        data2: '警告',
        data3: 'CWE: CWE-200: 信息泄露OWASP MASVS: MSTG - CODE - 2',
        data4: 'com/danikula/videocache/HttpProxyCacheServer.java com/ geetest / onelogin / b6.java',
        data5: 'Suppress the rule android_ip_disclosure in com.yaoyu.wanzhouSuppress the rule android_ip_disclosure in com.yaoyu.wanzhou only from these files',
    },
    {
        data1: '应用程序使用不安全的随机数生成器',
        data2: '警告',
        data3: 'CWE: CWE-330: 使用不充分的随机数OWASP Top 10: M5: Insufficient CryptographyOWASP MASVS: MSTG - CRYPTO - 6',
        data4: 'com/alipay/android/phone/mobilecommon/multimediabiz/biz/http/apache/entity/mine/MultipartEntityBuilder.java',
        data5: 'Suppress the rule android_insecure_random in com.yaoyu.wanzhouSuppress the rule android_insecure_random in com.yaoyu.wanzhou only from these files',
    },
    {
        data1: '应用程序记录日志信息,不得记录敏感信息',
        data2: '信息',
        data3: 'CWE: CWE-532: 通过日志文件的信息暴露OWASP MASVS: MSTG - STORAGE - 3',
        data4: 'cn/bingoogolapple/qrcode/core/BGAQRCodeUtil.javacom/ alipay / android / phone / mobilecommon / multimedia / utils / Base64Utils.javacom / alipay / android / phone / mobilecommon / multimedia / widget / SightCameraView.javacom / alipay / android / phone / mobilecommon / multimedia / widget / SightVideoPlayView.java',
        data5: 'Suppress the rule android_logging in com.yaoyu.wanzhouSuppress the rule android_logging in com.yaoyu.wanzhou only from these files',
    }
])
const dynamicList = reactive([
    {
        data1: 'arm64-v8a/libAPMUOCPLIB.so',
        data2: {
            info1: 'True',
            info2: 'info',
            info3: '二进制文件设置了 NX 位。这标志着内存页面不可执行，使得攻击者注入的 shellcode 不可执行。',
        },
        data3: {
            info1: 'True',
            info2: 'info',
            info3: '这个二进制文件在栈上添加了一个栈哨兵值，以便它会被溢出返回地址的栈缓冲区覆盖。这样可以通过在函数返回之前验证栈哨兵的完整性来检测溢出',
        },
        data4: {
            info1: 'Full RELRO',
            info2: 'info',
            info3: '此共享对象已完全启用 RELRO。 RELRO 确保 GOT 不会在易受攻击的 ELF 二进制文件中被覆盖。在完整 RELRO 中，整个 GOT（.got 和 .got.plt 两者）被标记为只读。',
        },
        data5: {
            info1: 'None',
            info2: 'info',
            info3: '二进制文件没有设置运行时搜索路径或RPATH',
        },
        data6: {
            info1: 'None',
            info2: 'info',
            info3: '二进制文件没有设置 RUNPATH',
        },
        data7: {
            info1: 'False',
            info2: 'warning',
            info3: '二进制文件没有任何加固函数。加固函数提供了针对 glibc 的常见不安全函数（如 strcpy，gets 等）的缓冲区溢出检查。使用编译选项 -D_FORTIFY_SOURCE=2 来加固函数。这个检查对于 Dart/Flutter 库不适用',
        },
        data8: {
            info1: 'False',
            info2: 'warning',
            info3: '符号可用',
        },
    },
    {
        data1: 'arm64-v8a/libcvenginelite.so',
        data2: {
            info1: 'True',
            info2: 'info',
            info3: '二进制文件设置了 NX 位。这标志着内存页面不可执行，使得攻击者注入的 shellcode 不可执行。',
        },
        data3: {
            info1: 'True',
            info2: 'info',
            info3: '这个二进制文件在栈上添加了一个栈哨兵值，以便它会被溢出返回地址的栈缓冲区覆盖。这样可以通过在函数返回之前验证栈哨兵的完整性来检测溢出',
        },
        data4: {
            info1: 'Full RELRO',
            info2: 'info',
            info3: '此共享对象已完全启用 RELRO。 RELRO 确保 GOT 不会在易受攻击的 ELF 二进制文件中被覆盖。在完整 RELRO 中，整个 GOT（.got 和 .got.plt 两者）被标记为只读。',
        },
        data5: {
            info1: 'None',
            info2: 'info',
            info3: '二进制文件没有设置运行时搜索路径或RPATH',
        },
        data6: {
            info1: 'None',
            info2: 'info',
            info3: '二进制文件没有设置 RUNPATH',
        },
        data7: {
            info1: 'False',
            info2: 'warning',
            info3: '二进制文件没有任何加固函数。加固函数提供了针对 glibc 的常见不安全函数（如 strcpy，gets 等）的缓冲区溢出检查。使用编译选项 -D_FORTIFY_SOURCE=2 来加固函数。这个检查对于 Dart/Flutter 库不适用',
        },
        data8: {
            info1: 'False',
            info2: 'warning',
            info3: '符号可用',
        },
    },
    {
        data1: 'arm64-v8a/libdeviceid_607.so',
        data2: {
            info1: 'True',
            info2: 'info',
            info3: '二进制文件设置了 NX 位。这标志着内存页面不可执行，使得攻击者注入的 shellcode 不可执行。',
        },
        data3: {
            info1: 'False',
            info2: 'high',
            info3: '这个二进制文件没有在栈上添加栈哨兵值。栈哨兵是用于检测和防止攻击者覆盖返回地址的一种技术。使用选项-fstack-protector-all来启用栈哨兵。这对于Dart/Flutter库不适用，除非使用了Dart FFI',
        },
        data4: {
            info1: 'Full RELRO',
            info2: 'info',
            info3: '此共享对象已完全启用 RELRO。 RELRO 确保 GOT 不会在易受攻击的 ELF 二进制文件中被覆盖。在完整 RELRO 中，整个 GOT（.got 和 .got.plt 两者）被标记为只读。',
        },
        data5: {
            info1: 'None',
            info2: 'info',
            info3: '二进制文件没有设置运行时搜索路径或RPATH',
        },
        data6: {
            info1: 'None',
            info2: 'info',
            info3: '二进制文件没有设置 RUNPATH',
        },
        data7: {
            info1: 'False',
            info2: 'warning',
            info3: '二进制文件没有任何加固函数。加固函数提供了针对 glibc 的常见不安全函数（如 strcpy，gets 等）的缓冲区溢出检查。使用编译选项 -D_FORTIFY_SOURCE=2 来加固函数。这个检查对于 Dart/Flutter 库不适用',
        },
        data8: {
            info1: 'False',
            info2: 'warning',
            info3: '符号可用',
        },
    },

])
const fileAnalysisList = [
    {
        data1: '应用程序中硬编码的证书/密钥文件',
        data2: 'assets/bid-log-key-public.key' +
            'assets/bid-log-key-public_t.key' +
            'assets/future-key-public.key',
    },
    {
        data1: '找到硬编码的Keystore',
        data2: 'assets/grs_sp.bks' +
            'assets/hmsincas.bks' +
            'assets/hmsrootcas.bks',
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
//为不同的安全类型设置类名
function getInfoClass2(securityLevel) {
    if (securityLevel === 'info') {
        return 'info-column1';
    } else if (securityLevel === 'high') {
        return 'info-column2';
    } else if (securityLevel === 'warning') {
        return 'info-column3';
    }
}
</script>
<style lang="scss" scoped>
.security-box {
    .title {
        font-weight: 600;
        margin-left: 7px;
    }

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

    .security {
        .security-content {
            padding: 10px 0;
        }
    }

    .network {
        .network-content {
            padding: 10px 0;
        }
    }

    .analysis {
        .analysis-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .analysis-content {
            margin: 10px 7px;

            .analysis-top {
                margin: 30px 0;
                display: flex;
                text-align: center;
                width: 100%;

                >div {
                    line-height: 26px;
                    flex: 1;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
                }

                >div:first-child {
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }

                >div:last-child {
                    border: none;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                }

                .analysis-top1 {
                    color: $red;
                }

                .analysis-top2 {
                    color: $yellow;
                }

                .analysis-top3 {
                    color: $back-color;
                }
            }
        }
    }

    .manifest {
        .manifest-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .manifest-content {
            margin: 10px 7px;

            .manifest-top {
                margin: 30px 0;
                display: flex;
                text-align: center;
                width: 100%;

                >div {
                    line-height: 26px;
                    flex: 1;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
                }

                >div:first-child {
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }

                >div:last-child {
                    border: none;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                }

                .manifest-top1,
                .manifest-top2,
                .manifest-top3,
                .manifest-top4 {
                    font-weight: 600;
                }

                .manifest-top1 {
                    color: $red;
                }

                .manifest-top2 {
                    color: $yellow;
                }

                .manifest-top3 {
                    color: $back-color;
                }

                .manifest-top4 {
                    color: $grey;
                }
            }
        }
    }

    .apiInvoke {
        .apiInvoke-title {
            font-weight: 600;
            margin-left: 7px;
        }
    }

    .codeAnalysis {
        .codeAnalysis-title {
            font-weight: 600;
            margin-left: 7px;
        }

        .codeAnalysis-content {
            margin: 10px 7px;

            .codeAnalysis-top {
                margin: 30px 0;
                display: flex;
                text-align: center;
                width: 100%;

                >div {
                    line-height: 26px;
                    flex: 1;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
                }

                >div:first-child {
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }

                >div:last-child {
                    border: none;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                }

                .codeAnalysis-top1,
                .codeAnalysis-top2,
                .codeAnalysis-top3,
                .codeAnalysis-top4,
                .codeAnalysis-top5 {
                    font-weight: 600;
                }

                .codeAnalysis-top1 {
                    color: $red;
                }

                .codeAnalysis-top2 {
                    color: $yellow;
                }

                .codeAnalysis-top3 {
                    color: $back-color;
                }

                .codeAnalysis-top4 {
                    color: $green;
                }

                .codeAnalysis-top5 {
                    color: $grey;
                }
            }
        }
    }

    .dynamic {
        .dynamic-title {
            font-weight: 600;
            margin-left: 7px;
        }
    }

    #scrollspyHeading1,
    #scrollspyHeading2,
    #scrollspyHeading3,
    #scrollspyHeading4,
    #scrollspyHeading5,
    #scrollspyHeading5,
    #scrollspyHeading6,
    #scrollspyHeading7,
    #scrollspyHeading8 {
        transform: translateY(-103px);
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

    .info-column1,
    .info-column2,
    .info-column3 {
        border-radius: 10px;
        width: 50px;
        text-align: center;
        margin-top: 3px;
        margin-bottom: 3px;
        color: #fff;
        font-size: 12px;
    }

    .info-column1 {
        background-color: $green;
    }

    .info-column2 {
        background-color: $red;
    }

    .info-column3 {
        background-color: $yellow;
    }
}
</style>