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
//分片上传
export const finishUploadAPI=(md5,k)=>{
    return http({
        url:"/apk-info/checkFile",
        method:"POST",
        headers: {
            "Content-Type": 'multipart/form-data'
        },
        params:{
            k
        },
        data:{
            md5
        }
    })
}