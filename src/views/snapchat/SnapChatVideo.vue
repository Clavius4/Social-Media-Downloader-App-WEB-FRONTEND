<script setup>
// No specific script setup required for this design
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Centered textfield with a button -->
    <div class="flex flex-col items-center">
      <div class="flex items-center space-x-2">
        <input
            type="text"
            placeholder="Enter snapchat URL"
            class="text-field"
        />
        <button class="download-button">
          <!-- Add your icon here if needed -->
          Search
        </button>
      </div>
    </div>

    <!-- Dropdowns and button row -->
    <div class="flex justify-center mt-4 space-x-4">
      <select class="dropdown">
        <option>Video Quality</option>
        <!-- Add more options here -->
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
      <button class="action-button">
        <!-- Add your icon here if needed -->
        Download
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
  transition: border-color 0.3s, box-shadow 0.3s;
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
  transition: border-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.action-button {
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

.download-button .icon {
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
