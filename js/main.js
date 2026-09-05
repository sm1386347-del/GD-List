import routes from './routes.js';
import { store } from './score.js';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = Vue.createApp({
    data() {
        return {
            store,
        };
    },
});

app.use(router);
app.mount('#app');
