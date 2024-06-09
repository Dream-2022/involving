import http from '@/utils/http.js'

export const URLDownloadApkAPI=(apkUrl,k)=>{
    return http({
        url:"/apk-download/download",
        method:"POST",
        params:{
            apkUrl,
            k
        }
    })
}
// export const URLDownloadApkAPI=(apkUrl,k)=>{
//     return http({
//         url:"/apk-download/download",
//         method:"POST",
//         params:{
//             apkUrl,
//             k
//         }
//     })
// }