import http from '@/utils/http.js'

//获取所有用户
export const getUserAPI=(pageNum,pageSize,k,value)=>{
    return http({
        url:"/administrator/getUsers",
        method:"POST",
        params:{
            pageNum,
            pageSize,
            k,
            value
        }
    })
}
//上传范本
export const essayUploadAPI=(essayTitle,essayWriter,essayFile,k)=>{
    return http({
        url:"/administrator/EssayUpload",
        method:"POST",
        headers: {
            "Content-Type": 'multipart/form-data'
        },
        params:{
            k
        },
        data:{
            essayFile,
            essayTitle,
            essayWriter
        }
    })
}