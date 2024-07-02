import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入echarts
import * as echarts from 'echarts';
//引入echarts
import "animate.css/animate.min.css";
import "wow.js/css/libs/animate.css";
const app = createApp(App)
// echarts 使用
app.config.globalProperties.$echarts = echarts;//全局使用
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
