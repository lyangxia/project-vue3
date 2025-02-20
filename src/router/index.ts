import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        meta: {

            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/layout/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
