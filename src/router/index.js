import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'HomeView',
        component: () => import('../components/HomeView.vue')
        },
        {
        path: '/sign-in',
        name: 'SignIn',
        component: () => import('../components/SignIn.vue')
        },
        {
        path: '/sign-up',
        name: 'SignUp',
        component: () => import('../components/SignUp.vue')
        },

    ]
})

export default router