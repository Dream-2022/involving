import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
    
    const user=ref(null)

    const isLogin=ref(false);

    const getIsLogin=()=>{
        return isLogin.value
    }
    const getUserInfo=()=>{
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
        // localStorage.clear()
    }

    const changeToken=()=>{
        user.value.Accesstoken=user.value.Refreshtoken
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
        initialize
    }
},{
    persist:true
})