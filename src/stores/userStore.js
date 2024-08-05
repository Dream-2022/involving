import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import {refreshTokenAPI} from '@/apis/login.js'
export const useUserStore = defineStore('user', () => {
    
    const user=ref(null)

    const isLogin=ref(false);

    const getIsLogin=()=>{
        return isLogin.value
    }
    const getUserInfo=()=>{
        return user.value
    }
    const refreshToken=async()=>{
        let res=await refreshTokenAPI(user.value.Refreshtoken,'v')
        console.log(res.data)
        localStorage.setItem(JSON.stringify(res.data))
        user.value=res.data
        return user.value
    }
    const setUserInfo=(userInfo,Accesstoken,Refreshtoken)=>{
        user.value=null
        user.value={
            ...userInfo,
            Accesstoken,
            Refreshtoken
        }; 
        console.log('看谁先到111')
        console.log(user.value)
        localStorage.setItem('user',user.value)
    }
    const clearInfoAndToken=()=>{
        user.value=null
        localStorage.clear()
    }
    let isChangingToken = false;
    const changeToken=async()=>{
        if (isChangingToken) {
            console.log('changeToken 正在执行，已经返回');
            return;
        }

        isChangingToken = true; // 设置正在执行标志

        try {
            console.log(user.value);
            console.log(user.value.Refreshtoken);
            
            let res = await refreshTokenAPI(user.value.Refreshtoken, 'v');
            
            console.log(res.data);
            console.log(res.data.data.accessToken);
            
            user.value.Accesstoken = res.data.data.accessToken;
            user.value.Refreshtoken = res.data.data.refreshToken;
            
            localStorage.setItem('user', JSON.stringify(user.value));
        } catch (error) {
            console.error('refreshTokenAPI 出错：', error);
        } finally {
            isChangingToken = false; // 重置执行状态
        }
    }
    const initialize = () => {
        console.log('初始化逻辑执行');
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            user.value = JSON.parse(savedUser);
        }
    };
    return {
        user,
        getIsLogin,
        setUserInfo,
        clearInfoAndToken,
        changeToken,
        getUserInfo,
        initialize,
        refreshToken
    }
},{
    persist:true
})