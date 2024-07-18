import http from '@/utils/http.js'
//获取白名单
export const getBlackWhiteAPI=(PageNum,PageSize,k)=>{
    return http({
        url:`/apk-info/BlackListAndWhiteList`,
        method:"POST",
        params:{
            PageNum,
            PageSize,
            k
        }
    })
}
//通过md5查看静态分析
export const getApkInfoAPI=(fileMd5,k)=>{
    return http({
        url:`/apk-info/getApkInfo`,
        method:"GET",
        params:{
            k,
            fileMd5
        }
    })
}
//获取Manifest
export const getManifestAPI=(fileMd5,k)=>{
    return http({
        url:`/apk-info/getAndroidManifest`,
        method:"GET",
        params:{
            k,
            fileMd5
        }
    })
}
//获取Java源代码
export const getJavaAPI=(fileMd5,k)=>{
    return http({
        url:`/apk-info/getSource`,
        method:"GET",
        params:{
            k,
            fileMd5
        }
    })
}
//获取Java源代码详细
export const getJavaInfoAPI=(k,fileMd5,path)=>{
    return http({
        url:`/apk-info/getSourceInfo`,
        method:"GET",
        params:{
            k,
            fileMd5,
            path
        }
    })
}
//获取静态安全评分
export const getStaticPointAPI=(k,url)=>{
    return http({
        url:`/dynamic-analysis/testssl`,
        method:"GET",
        params:{
            k,
            url
        }
    })
}
//获取Traffic
export const getTrafficFileAPI=(k,fileName)=>{
    return http({
        url:`/dynamic-analysis/getFile`,
        method:"GET",
        params:{
            k,
            fileName
        }
    })
}
//获取QuarkReport
export const getQuarkReportAPI=(fileMd5,k)=>{
    return http({
        url:`/user-info/getQuarkReport`,
        method:"GET",
        params:{
            k,
            fileMd5
        }
    })
}