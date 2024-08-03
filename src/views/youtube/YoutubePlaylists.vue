<script setup>
// No specific script setup required for this design
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Centered textfield with a button -->
    <div class="flex flex-col items-center">
      <div class="flex">
        <input
            type="text"
            placeholder="Enter youtube URL"
            class="text-field"
        />
        <button class="download-button ml-2">
          Search
        </button>
      </div>
    </div>

    <!-- Dropdowns and button row -->
    <div class="flex justify-center mt-4 space-x-4">
      <select class="dropdown">
        <option>Video Quality</option>
        <!-- more options here -->
        <option>1080p</option>
        <option>720p</option>
        <option>480p</option>
      </select>
      <select class="dropdown">
        <option>Format</option>
        <!-- more options here -->
        <option>MP4</option>
        <option>AVI</option>
        <option>MKV</option>
      </select>
      <button class="action-button2">
        Download All
      </button>
    </div>

    <!-- Videos list -->
    <div class="videos-list mt-6 space-y-4">
      <div class="video-item flex items-center space-x-4">
        <div class="thumbnail-container">
          <img src="" class="thumbnail" alt="Thumbnail" />
        </div>
        <div class="flex flex-col">
          <p class="video-title">Video Title</p>
          <p class="video-description">Video description goes here</p>
        </div>
      </div>
      <!-- Repeat the video-item div for more videos -->
    </div>

    <!-- Pager navigator -->
    <div class="pager mt-6 flex justify-center items-center space-x-2">
      <button class="pager-button">
        <i class="fas fa-chevron-left"></i>
      </button>
      <span>1</span>
      <button class="pager-button">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40rem;
  padding: 4rem;
}

.text-field {
  width: 50rem;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.download-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #6E41E2;
  color: white;
  cursor: pointer;
}

.download-button,
.action-button2{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #6E41E2;
  color: white;
  cursor: pointer;
}

.download-button .icon,
.action-button .icon {
  margin-right: 8px;
}

.dropdown {
  padding: 10px;
  border: 2px solid #6E41E2;
  border-radius: 4px;
  background-color: white;
}

.videos-list .video-item {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.thumbnail-container {
  flex-shrink: 0;
}

.thumbnail {
  width: 100px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
}

.video-title {
  font-weight: bold;
}

.video-description {
  color: #666;
}

.pager .pager-button {
  padding: 5px 10px;
  border: 2px solid #6E41E2;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}
</style>
