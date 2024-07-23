import {createRouter, createWebHistory} from 'vue-router'
import Youtube from '../views/youtube/Youtube.vue'

const routes =[
    {
        path: "/youtube/",
        name: "Youtube",
        component: Youtube,
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router