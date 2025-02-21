import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        meta: {

            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
