<template>
<header class="py-2 m-res flex justify-between">
    <div class=" h-fit flex items-center gap-2">
      <img :src="logo" alt="" class="inline-block h-10 w-10">
      <span class="font-bold text-lg"><router-link to="/">Choma</router-link></span>
    </div>
    <nav class=" h-fit flex-1 flex items-center">
      <ul v-if="!home" class="flex items-center flex-1 justify-end gap-4 font-semibold">
  <li class="flex gap-1 flex-col items-center">
    <router-link to="youtube" class="flex flex-col items-center gap-1">
      <span><img class="h-10 w-10" :src="youtube" /></span>
      <span class="font-normal text-sm tracking-tighter">YouTube</span>
    </router-link>
  </li>
  <li class="flex gap-1 flex-col items-center">
    <router-link to="instagram" class="flex flex-col items-center gap-1">
      <span><img class="h-10 w-10" :src="instagram" /></span>
      <span class="font-normal text-sm tracking-tighter">Instagram</span>
    </router-link>
  </li>
  <li class="flex gap-1 flex-col items-center">
    <router-link to="facebook" class="flex flex-col items-center gap-1">
      <span><img class="h-10 w-10" :src="facebook" /></span>
      <span class="font-normal text-sm tracking-tighter">Facebook</span>
    </router-link>
  </li>
  <li class="flex gap-1 flex-col items-center">
    <router-link to="tiktok" class="flex flex-col items-center gap-1">
      <span><img class="h-10 w-10" :src="tiktok" /></span>
      <span class="font-normal text-sm tracking-tighter">TikTok</span>
    </router-link>
  </li>
</ul>

    </nav>
  </header>
  <main class="flex-1">
    <router-view></router-view>
  </main>
</template>

<script>
import logo from './assets/img/logo.svg'
import youtube from './assets/img/youtube.png'
import instagram from './assets/img/instagram.png'
import facebook from './assets/img/facebook.png'
import tiktok from './assets/img/tik-tok.png'


export default {
  data(){
    return {
      logo,
      youtube,
      instagram,
      tiktok,
      facebook,
      home: this.$route.path === "/",
    }
  },
  watch: {
    '$route.path': function(newPath){
      this.home = newPath === '/'
    }
  }
}
</script>

<style></style>