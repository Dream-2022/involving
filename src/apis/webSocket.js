import http from '@/utils/http.js'
 
export const websocketAPI=(sId)=>{
    return http({
        url:`/apk-info/websocket/${sId}`,
        method:"POST"
    })
}