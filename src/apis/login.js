import http from '@/utils/http.js'

//获取验证码
export const getCodeAPI=(email,k)=>{
    return http({
        url:"/user-info/sendCode",
        method:"GET",
        params:{
            email,
            k
        }
    })
}
//登录
export const loginAPI=(username,password,k)=>{
    return http({
        url:"/user-info/login",
        method:"POST",
        params:{
            k
        },
        data:{
            username,
            password,
        }
    })
}
export const modifyAPI=(email,code,password,k)=>{
    return http({
        url:"/user-info/modifyAPI",
        method:"POST",
        params:{
            email,
            code,
            password,
            k
        }
    })
}
export const registerAPI=(email,code,password,k)=>{
    return http({
        url:"/user-info/register",
        method:"POST",
        data:{
            email,
            code,
            password
        },
        params:{
            k
        }
    })
}