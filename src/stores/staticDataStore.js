import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useStaticDataStore = defineStore('staticData', () => {
    
    const staticDataList=ref({})

    const changeToken=()=>{
        user.value.shortToken=user.value.refreshToken
    }

    return {
        staticDataList,
        changeToken
    }
},{
    persist:true
})