import http from '@/utils/http.js'
//获取白名单
export const getWhiteAPI=(pageNum,pageSize,k)=>{
    return http({
        url:`/apk-info/get_white`,
        method:"POST",
        params:{
            pageNum,
            pageSize,
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