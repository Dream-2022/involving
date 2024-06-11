import http from '@/utils/http.js'
 
export const getDetectionAPI=(user_mail,days,k)=>{
    return http({
        url:"/goodan-homepage/get-NumberOfDetections",
        method:"POST",
        params:{
            user_mail,
            days,
            k
        }
    })
}
export const getMemberAPI=(user_mail,days,k)=>{
    return http({
        url:"/goodan-homepage/get_ChangePointsInfo",
        method:"POST",
        params:{
            user_mail,
            days,
            k
        }
    })
}
export const getFriendAPI=(user_mail,days,k)=>{
    return http({
        url:"/goodan-homepage/get_InvitationRecordsInfo",
        method:"POST",
        params:{
            user_mail,
            days,
            k
        }
    })
}
export const getApkAPI=(user_mail,days,k)=>{
    return http({
        url:"/goodan-homepage/get_percentage",
        method:"POST",
        params:{
            user_mail,
            days,
            k
        }
    })
}
