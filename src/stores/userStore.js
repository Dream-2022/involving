import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
    
    const user=ref({})

    const isLogin=ref(false);

    const getIsLogin=()=>{
        return isLogin.value
    }
    const getUserInfo=()=>{
        return user.value
    }
    const setUserInfo=(userInfo,shortToken,refreshToken)=>{
        user.value=null
        user.value={
            ...userInfo,
            shortToken,
            refreshToken
        };
        console.log('看谁先到111')
        console.log(user.value)
    }
    const clearInfoAndToken=()=>{
        user.value=null
        // localStorage.clear()
    }

    const changeToken=()=>{
        user.value.shortToken=user.value.refreshToken
    }

    return {
        user,
        getIsLogin,
        setUserInfo,
        clearInfoAndToken,
        changeToken,
        getUserInfo,
    }
},{
    persist:true
})