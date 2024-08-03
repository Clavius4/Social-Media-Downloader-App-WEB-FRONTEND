<template>
  <div class="grid items-start grid-cols-1 sm:grid-cols-2 gap-4 m-res">
    <div><img :src="choma" class="w-full h-full object-contain" /></div>
    <div>
      <p class="text-xl font-semibold m-res mb-4">Downloaders</p>
      <ul class="grid grid-cols-5 gap-4 font-semibold m-res">
        <li class="flex bg-[#5555550f] rounded-2xl p-2 sm:p-4 xl:p-5 justify-center items-center hover:bg-[#5555551f] active:bg-[#5555552f]">
          <router-link to="youtube">
            <img class="h-12 w-12 sm:h-16 sm:w-16 xl:h-20 xl:w-20 object-contain hover:scale-105 active:scale-95 transition-transform" :src="youtube" />
          </router-link>
        </li>
        <li class="flex bg-[#5555550f] rounded-2xl p-2 sm:p-4 xl:p-5 justify-center items-center hover:bg-[#5555551f] active:bg-[#5555552f]">
          <router-link to="instagram">
            <img class="h-12 w-12 sm:h-16 sm:w-16 xl:h-20 xl:w-20 object-contain hover:scale-105 active:scale-95 transition-transform" :src="instagram" />
          </router-link>
        </li>
        <li class="flex bg-[#5555550f] rounded-2xl p-2 sm:p-4 xl:p-5 justify-center items-center hover:bg-[#5555551f] active:bg-[#5555552f]">
          <router-link to="facebook">
            <img class="h-12 w-12 sm:h-16 sm:w-16 xl:h-20 xl:w-20 object-contain hover:scale-105 active:scale-95 transition-transform" :src="facebook" />
          </router-link>
        </li>
        <li class="flex bg-[#5555550f] rounded-2xl p-2 sm:p-4 xl:p-5 justify-center items-center hover:bg-[#5555551f] active:bg-[#5555552f]">
          <router-link to="tiktok">
            <img class="h-12 w-12 sm:h-16 sm:w-16 xl:h-20 xl:w-20 object-contain hover:scale-105 active:scale-95 transition-transform" :src="tiktok" />
          </router-link>
        </li>
        <li class="flex bg-[#5555550f] rounded-2xl p-2 sm:p-4 xl:p-5 justify-center items-center hover:bg-[#5555551f] active:bg-[#5555552f]">
          <router-link to="snapchat">
            <img class="h-12 w-12 sm:h-16 sm:w-16 xl:h-20 xl:w-20 object-contain hover:scale-105 active:scale-95 transition-transform" :src="snapchat" />
          </router-link>
        </li>
      </ul>
      <div class="m-res">
        <div class="grid grid-cols-2 gap-4 my-8">
          <p class="text-2xl font-light col-span-2">Download This App</p>
          <div class="grid gap-4 grid-cols-2 items-start">
            <div class="col-span-2 flex flex-col gap-2">
              <div><a href="#"><img class="h-full w-full object-contain hover:scale-105 active:scale-95 transition-transform" :src="apple" alt=""></a></div>
              <div><a href="#"><img class="h-full w-full object-contain hover:scale-105 active:scale-95 transition-transform" :src="google" alt=""></a></div>
            </div>
            <div class="col-span-2">
              <div><img class="" :src="qrcode" alt=""></div>
            </div>
          </div>
          <div>
            <img class="w-full h-full object-contain" :src="phone" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 border-2 border-gray-300 rounded-lg">
      <p class="text-xl font-bold mb-2">Usage Instructions</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><span class="font-semibold">Select the Social Media(on top right of the home page) you want to download the video from:</span> Just select a social media from which you want to download, and proceed with the coming steps.</li>
        <li><span class="font-semibold">Select the Download Video option:</span> It will redirect you to the page where you will be prompted to paste the video URL from the specific social media.</li>
        <li><span class="font-semibold">Enter the Video URL:</span> Copy the URL of the video you want to download from a social media platform and paste it into the search field at the top of the page.</li>
        <li><span class="font-semibold">Search for the Video:</span> Click the "Search" button next to the search field to begin the search for the video. The system will look up the video and display it in the results section.</li>
        <li><span class="font-semibold">Choose Quality and Format:</span> Select your desired video quality (e.g., 1080p, 720p) and format (e.g., MP4, AVI) from the dropdown menus.</li>
        <li><span class="font-semibold">Download the Video:</span> Click the "Download" button to start downloading the selected video. The download progress will be shown, and you will be notified once the download is complete.</li>
        <li><span class="font-semibold">View Downloaded Videos:</span> Navigate to the "Downloaded Videos" section to view all your downloaded videos. Here, you can see thumbnails, titles, descriptions, and sizes of each video.</li>
        <li><span class="font-semibold">Filter Videos:</span> Use the "Filter" button to open filtering options. You can filter your videos by date, size, or duration to easily find specific videos.</li>
        <li><span class="font-semibold">Search in Downloaded Videos:</span> Use the search field in the "Downloaded Videos" section to quickly locate specific videos by title or description.</li>
      </ul>
    </div>

  </div>
</template>

<script>
import youtube from '../../assets/img/youtube.png'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import tiktok from '../../assets/img/tik-tok.png'
import choma from '../../assets/img/choma.png'
import snapchat from '../../assets/img/snapchat.png'
import apple from '../../assets/img/apple.png'
import google from '../../assets/img/google.png'
import phone from '../../assets/img/phone.png'
import qrcode from '../../assets/img/qrcode.png'

export default {
  data() {
    return {
      youtube,
      instagram,
      facebook,
      tiktok,
      snapchat,
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
