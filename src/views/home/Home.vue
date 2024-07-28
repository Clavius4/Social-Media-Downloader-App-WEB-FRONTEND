<template>
  <div class="grid items-start grid-cols-1 sm:grid-cols-2 gap-4 m-res">
    <div><img :src="choma" class="w-full h-full object-contain" /></div>
    <div>
      <p class="text-xl font-semibold m-res mb-4">Downloaders</p>
      <ul class="grid grid-cols-4 gap-4 font-semibold m-res">
        <li class="flex bg-[#5555550f] h-fitm w-fit rounded-2xl p-2 sm:p-4 xl:p-5 flex-1 justify-center items-center"><router-link to="youtube"><img  class="h-full w-full object-contain" :src="youtube" /></router-link></li>
        <li class="flex bg-[#5555550f] h-fitm w-fit rounded-2xl p-2 sm:p-4 xl:p-5 flex-1 justify-center items-center"><router-link to="instagram"><img  class="h-full w-full object-contain" :src="instagram" /></router-link></li>
        <li class="flex bg-[#5555550f] h-fitm w-fit rounded-2xl p-2 sm:p-4 xl:p-5 flex-1 justify-center items-center"><router-link to="facebook"><img  class="h-full w-full object-contain" :src="facebook" /></router-link></li>
        <li class="flex bg-[#5555550f] h-fitm w-fit rounded-2xl p-2 sm:p-4 xl:p-5 flex-1 justify-center items-center"><router-link to="ticktok"><img  class="h-full w-full object-contain" :src="tiktok" /></router-link></li>
      </ul>
      <div class="m-res">
        <div class="grid grid-cols-2 gap-4 my-8">
          <p class="text-2xl font-light col-span-2">Download This App</p>
          <div class="grid gap-4 grid-cols-2 items-start">
            <!-- <p class="text-2xl hidden sm:block font-light col-span-2">Download This App</p> -->
            <div class="col-span-2 flex flex-col gap-2">
              <div><a href="#"><img class="h-full w-full object-contain" :src="apple" alt=""></a></div>
              <div><a href="#"><img class="h-full w-full object-contain" :src="google" alt=""></a></div>
            </div>
            <div class="col-span-2">
              <div><a href="#"><img :src="qrcode" alt=""></a></div>
            </div>
          </div>
          <div>
            <img class="w-full h-full object-contain" :src="phone" alt="">
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-4xl">Usage Instructions, To Be continued...</p>
    </div>
  </div>
</template>


<script>
import youtube from '../../assets/img/youtube.png'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import tiktok from '../../assets/img/tik-tok.png'
import choma from '../../assets/img/choma.png'
import apple from '../../assets/img/apple.png'
import google from '../../assets/img/google.png'
import phone from '../../assets/img/phone.png'
import qrcode from '../../assets/img/qrcode.png'


export default{
  data(){
      return {
      youtube,
      instagram,
      facebook,
      tiktok,
      choma,
      apple,
      google,
      phone,
      qrcode,
    }
  }
}
</script>


<style>
</style>