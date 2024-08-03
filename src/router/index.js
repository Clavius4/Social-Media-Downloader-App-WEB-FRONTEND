import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/Home.vue';
import Youtube from '../views/youtube/Youtube.vue';
import YoutubePlaylists from '../views/youtube/YoutubePlaylists.vue';
import YoutubeVideo from '../views/youtube/YoutubeVideo.vue';
import Instagram from '../views/instagram/Instagram.vue';
import Facebook from '../views/facebook/Facebook.vue';
import TikTok from '../views/tiktok/TikTok.vue';
import SnapChat from "../views/snapchat/SnapChat.vue";
import InstagramPlaylists from "../views/instagram/InstagramPlaylists.vue";
import InstagramVideo from "../views/instagram/InstagramVideo.vue";
import FacebookPlaylists from "../views/facebook/FacebookPlaylists.vue";
import FacebookVideo from "../views/facebook/FacebookVideo.vue";
import TiktokPlaylists from "../views/tiktok/TiktokPlaylists.vue";
import TiktokVideo from "../views/tiktok/TiktokVideo.vue";
import SnapChatPlaylists from "../views/snapchat/SnapChatPlaylists.vue";
import SnapChatVideo from "../views/snapchat/SnapChatVideo.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/youtube',
        name: 'youtube',
        component: Youtube,
    },
    {
        path: '/youtube-playlists',
        name: 'youtubePlaylists',
        component: YoutubePlaylists,
    },
    {
        path: '/youtube-video',
        name: 'youtubeVideo',
        component: YoutubeVideo,
    },
    {
        path: '/instagram',
        name: 'instagram',
        component: Instagram,
    },
    {
        path: '/instagram-playlists',
        name: 'instagramPlaylists',
        component: InstagramPlaylists,
    },
    {
        path: '/instagram-video',
        name: 'instagramVideo',
        component: InstagramVideo,
    },
    {
        path: '/facebook',
        name: 'facebook',
        component: Facebook,
    },
    {
        path: '/facebook-playlists',
        name: 'facebookPlaylists',
        component: FacebookPlaylists,
    },
    {
        path: '/facebook-video',
        name: 'facebookVideo',
        component: FacebookVideo,
    },
    {
        path: '/tiktok',
        name: 'tiktok',
        component: TikTok,
    },
    {
        path: '/tiktok-playlists',
        name: 'tiktokPlaylists',
        component: TiktokPlaylists,
    },
    {
        path: '/tiktok-video',
        name: 'tiktokVideo',
        component: TiktokVideo,
    },
    {
        path: '/snapchat',
        name: 'snapchat',
        component: SnapChat,
    },
    {
        path: '/snapchat-playlists',
        name: 'snapchatPlaylists',
        component: SnapChatPlaylists,
    },
    {
        path: '/snapchat-video',
        name: 'snapchatVideo',
        component: SnapChatVideo,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
