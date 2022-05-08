import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

const app = createApp(App);

// plugin
app.use(router);
app.use(store);

app.mount('#app');
