import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import { Menu } from 'ant-design-vue';
const app = createApp(App)
app.use(store)
app.use(router)
app.use(Menu)
app.mount('#app')
