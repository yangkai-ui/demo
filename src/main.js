import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vant from 'vant';
import 'vant/lib/index.css'; // 引入 Vant 样式文件
import store from './store' // 引入 Vuex store


const app = createApp(App)
app.use(router)
app.use(Vant)
app.use(store) // 将 store 注入到应用中
app.mount('#app')