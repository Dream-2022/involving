import { ref } from 'vue'
import { defineStore } from 'pinia'
// import { useUserStore } from '@/stores/userStore.js'
// const userStore = useUserStore()
import { useRouter } from 'vue-router'
export const useWebSocketStore = defineStore('webSocket', () => {
    let websocket = null;
    let messageData=ref([])
    const initialize = (userMail) => {
        if ('WebSocket' in window) {
            // 改成你的地址
            if(websocket==null){
                websocket = new WebSocket("ws://192.168.50.32:10010/apk-info/websocket/" + userMail + "?k=v");
                console.log('新建一个webSocket')
            }else{
                console.log('已存在webSocket')
            }
        } else {
            alert('当前浏览器不支持 websocket')
        }
        websocket.onerror = function () {
            console.log("websocket.onerror: WebSocket连接发生错误");
        };
        websocket.onopen = function () {
            console.log("websocket.onopen: WebSocket连接成功");
        }
        return websocket
    }
    const addMessageList = (message) => {
        console.log(message)
        messageData.push(message.data)
        console.log(messageData.value)
        return messageData.value
    }
    return {
        messageData,
        websocket,
        initialize,
        addMessageList
    }
},{
    persist:true
})