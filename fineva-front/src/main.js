import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue3-toastify/dist/index.css"; 

const app = createApp(App)
const user_state = localStorage.getItem("userState");
store.dispatch("setUserState", user_state);
app.use(router)
app.use(store)
app.mount('#app')
