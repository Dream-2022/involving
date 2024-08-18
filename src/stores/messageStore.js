import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useMessageStore = defineStore('message', () => {
    
    const messageData=ref({})

    const addMessage=(message)=>{
        messageData.push(message.data)
        console.log(messageData.value)
        return messageData.value
    }

    return {
        messageData,
        addMessage
    }
},{
    persist:true
})