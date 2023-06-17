import { createApp } from 'vue'
import '@/assets/css/style.css'
import 'animate.css';
import App from './App.vue'
import store from './store';
createApp(App).use(store).mount('#app');
