import http from '@/utils/http.js'

//分片上传
export const multipartUploadAPI=(totalNumber,chunkNumber,md5,file,k)=>{
    return http({
        url:"/apk-info/uploadBig",
        method:"POST",
        headers: {
            "Content-Type": 'multipart/form-data'
        },
        params:{
            k
        },
        data:{
            totalNumber,
            chunkNumber,
            md5,
            file
        }
    })
}
export const multipartDynamicAPI=(totalNumber,chunkNumber,md5,file,k)=>{
    return http({
        url:"/dynamic-analysis/uploadBig",
        method:"POST",
        headers: {
            "Content-Type": 'multipart/form-data'
        },
        params:{
            k
        },
        data:{
            totalNumber,
            chunkNumber,
            md5,
            file
        }
    })
}
//检查是否成功上传和静态分析
export const finishUploadAPI=(md5,k)=>{
    return http({
        url:"/apk-info/checkFile",
        method:"GET",
        headers: {
            'content-type': 'application/json'
        },
        params:{
            k,
            md5
        }
    })
}
//检查是否成功上传和静态分析
export const finishUploadDynamicAPI=(time,md5,k)=>{
    return http({
        url:"/dynamic-analysis/checkFile",
        method:"POST",
        headers: {
            "Content-Type": 'multipart/form-data',
            'timeout':time
        },
        params:{
            k
        },
        data:{
            md5
        }
    })
}