import { createApp } from 'vue'
import App from './App.vue'
import routes from './router';
import "./assets/scss/main.scss"
createApp(App).use(routes).mount('#app')
