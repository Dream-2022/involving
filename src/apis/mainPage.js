import http from '@/utils/http.js'
//获取范本
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
//获取最近分析
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
//搜索
export const getSearchAPI=(select,k,pageNum)=>{
    return http({
        url:"/user-info/select",
        method:"GET",
        params:{
            select,
            k,
            pageNum
        }
    })
}
//范本库预览
export const getEssayPreviewAPI=(k,essay_id)=>{
    return http({
        url:"/goodan-homepage/get_EssayPreview",
        method:"POST",
        params:{
            k,
            essay_id
        }
    })
}
//范本库下载
export const getEssayLoadAPI=(k,essay_id)=>{
    return http({
        url:"/goodan-homepage/EssayDownload",
        method:"POST",
        params:{
            k,
            essay_id
        }
    })
}
//获取今日该用户是否签到
export const getSignInAPI=(user_mail,k)=>{
    return http({
        url:"/goodan-homepage/judge_signIn",
        method:"POST",
        params:{
            k,
            user_mail
        }
    })
}
//获取用户签到天数
export const getSignInDateAPI=(year,month,user_mail,k)=>{
    return http({
        url:"/goodan-homepage/get_CheckInStatus",
        method:"POST",
        params:{
            year,
            month,
            user_mail,
            k
        }
    })
}
//用户签到
export const getSignInSuccessAPI=(user_mail,k)=>{
    return http({
        url:"/goodan-homepage/add_points",
        method:"POST",
        params:{
            user_mail,
            k
        }
    })
}
//获取当前会员积分
export const getPointAPI=(user_mail,k)=>{
    return http({
        url:"/goodan-homepage/get_nowPoints",
        method:"POST",
        params:{
            user_mail,
            k
        }
    })
}
