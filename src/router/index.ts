import {createRouter, createWebHistory, type Router} from 'vue-router'
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
})

export default router
