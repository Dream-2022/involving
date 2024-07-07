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