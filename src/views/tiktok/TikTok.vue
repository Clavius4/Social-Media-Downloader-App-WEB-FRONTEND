<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 m-res">
      <div><img :src="choma" class="w-full h-full object-contain" /></div>
      <div>
        <p class="text-xl font-semibold m-res mb-4">Downloaders</p>
        <p class="m-res">Tiktok Downloader Main Page</p>
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