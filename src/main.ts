import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App)

app.component('base-modal')

app.mount('#app');