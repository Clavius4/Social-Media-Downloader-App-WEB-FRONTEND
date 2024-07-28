import {createRouter, createWebHistory} from 'vue-router'
import Youtube from '../views/youtube/Youtube.vue'
import Home from '../views/home/Home.vue'
import Instagram from '../views/instagram/Instagram.vue'
import Facebook from '../views/facebook/Facebook.vue'
import TikTok from '../views/tiktok/TikTok.vue'

const routes =[
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/youtube/",
        name: "youtube",
        component: Youtube,
    },
    {
        path: "/instagram/",
        name: "instagram",
        component: Instagram
    },
    {
        path: "/facebook/",
        name: "facebook",
        component: Facebook,
    },
    {
        path: "/tiktok/",
        name: "tiktok",
        component: TikTok
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router