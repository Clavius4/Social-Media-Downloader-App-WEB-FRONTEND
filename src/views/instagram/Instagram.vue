<template>
  <div class="grid grid-cols-1 items-start sm:grid-cols-2 gap-4 m-res">
    <div>
      <img :src="choma" class="w-full h-full object-contain" />
    </div>
    <div>
      <p class="text-xl font-extrabold m-res mb-4">Instagram Downloader</p>
      <p class="m-res">Select Download Method</p>
      <!-- Add the dotted boxes here -->
      <div class="dotted-box-container mt-4">
        <router-link to="/instagram-playlists" class="dotted-box">
          <div class="box-content">
            <img :src="youtube" class="icon" />
            <p>View Your Playlist</p>
          </div>
        </router-link>
        <router-link to="/instagram-video" class="dotted-box">
          <div class="box-content">
            <img :src="youtube" class="icon" />
            <p>Download Video</p>
          </div>
        </router-link>
      </div>
      <!-- Social media links -->
      <div class="mt-8 m-res">
        <p class="text-lg font-semibold mb-2">Follow us on socials</p>
        <ul class="flex gap-4">
          <li>
            <router-link to="tiktok">
              <img class="h-8 w-8 sm:h-10 sm:w-10 xl:h-12 xl:w-12 object-contain hover:scale-105 active:scale-95 transition-transform" :src="tiktok" alt="tiktok">
            </router-link>
          </li>
          <li>
            <router-link to="instagram">
              <img class="h-8 w-8 sm:h-10 sm:w-10 xl:h-12 xl:w-12 object-contain hover:scale-105 active:scale-95 transition-transform" :src="instagram" />
            </router-link>
          </li>
          <li>
            <router-link to="facebook">
              <img class="h-8 w-8 sm:h-10 sm:w-10 xl:h-12 xl:w-12 object-contain hover:scale-105 active:scale-95 transition-transform" :src="facebook" />
            </router-link>
          </li>
        </ul>
      </div>
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
.dotted-box-container {
  display: flex;
  flex-direction: row;
  gap: 7rem;
  margin-top: 7rem;
  margin-left: 10rem;
}

.dotted-box {
  border: 3px dotted #6E41E2;
  width: 270px;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: inherit;

}

.box-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.dotted-box p {
  margin: 0;
}
</style>
