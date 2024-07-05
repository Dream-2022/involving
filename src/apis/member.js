import http from '@/utils/http.js'
 
export const payAPI=(subject,traceNo,totalAmount,k,userMail)=>{
    return http({
        url:"/user-info/pay",
        method:"GET",
        params:{
            subject,
            traceNo,
            totalAmount,
            k,
            userMail
        }
    })
}