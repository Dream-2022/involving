import http from '@/utils/http.js'
 
export const getTemplateAPI=(pageNum,k)=>{
    return http({
        url:"/goodan-homepage/get_EssayInfo",
        method:"POST",
        params:{
            pageNum,
            k
        }
    })
}
export const getRecentAnalysisAPI=(pageNum,k)=>{
    return http({
        url:"/goodan-homepage/get_RecentAnalysisRecords",
        method:"POST",
        params:{
            pageNum,
            k
        }
    })
}
