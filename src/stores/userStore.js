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
        clearInfoAndToken,
        changeToken,
        getUserInfo,
    }
},{
    persist:true
})