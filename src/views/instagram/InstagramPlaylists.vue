<template>
  <div class="container mx-auto p-4">
    <!-- Title and Filter Row -->
    <div class="flex flex-col items-center w-full mb-4">
      <h1 class="text-2xl font-bold mb-2">Downloaded Videos</h1>
      <hr class="w-full mb-4" />
    </div>

    <!-- Search Bar Row -->
    <div class="flex flex-col items-center w-full mb-4">
      <div class="flex items-center">
        <input
            type="text"
            placeholder="Search in downloaded videos"
            class="search-field"
        />
        <button class="search-button ml-2">
          Search
        </button>
      </div>
      <!-- Filter Button with Dropdown -->
      <div class="relative mt-2">
        <button @click="toggleFilterDropdown" class="filter-button flex items-center">
          <i class="fas fa-filter mr-2"></i>
          Filter
        </button>
        <div v-if="isFilterDropdownOpen" class="absolute bg-white border border-gray-300 rounded-lg mt-2 w-48 z-10">
          <div class="p-2">
            <label class="block mb-2 font-semibold">Filter by:</label>
            <label class="block mb-1">
              <input type="checkbox" class="mr-2">
              Date
            </label>
            <label class="block mb-1">
              <input type="checkbox" class="mr-2">
              Size
            </label>
            <label class="block mb-1">
              <input type="checkbox" class="mr-2">
              Duration
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Downloaded Videos Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 w-full">
      <div v-for="(video, index) in videos" :key="index" class="video-card flex flex-col items-center p-4 border-2 border-gray-300 rounded-lg">
        <span class="video-number text-lg font-bold">{{ index + 1 }}</span>
        <img :src="video.thumbnail" class="thumbnail mb-2" alt="Thumbnail" />
        <p class="video-title mb-1 font-bold">{{ video.title }}</p>
        <p class="video-description mb-1 text-gray-600">{{ video.description }}</p>
        <p class="video-size text-gray-700">Size: {{ video.size }}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 w-full">
      <div v-for="(video, index) in videos" :key="index" class="video-card flex flex-col items-center p-4 border-2 border-gray-300 rounded-lg">
        <span class="video-number text-lg font-bold">{{ index + 1 }}</span>
        <img :src="video.thumbnail" class="thumbnail mb-2" alt="Thumbnail" />
        <p class="video-title mb-1 font-bold">{{ video.title }}</p>
        <p class="video-description mb-1 text-gray-600">{{ video.description }}</p>
        <p class="video-size text-gray-700">Size: {{ video.size }}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 w-full">
      <div v-for="(video, index) in videos" :key="index" class="video-card flex flex-col items-center p-4 border-2 border-gray-300 rounded-lg">
        <span class="video-number text-lg font-bold">{{ index + 1 }}</span>
        <img :src="video.thumbnail" class="thumbnail mb-2" alt="Thumbnail" />
        <p class="video-title mb-1 font-bold">{{ video.title }}</p>
        <p class="video-description mb-1 text-gray-600">{{ video.description }}</p>
        <p class="video-size text-gray-700">Size: {{ video.size }}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 w-full">
      <div v-for="(video, index) in videos" :key="index" class="video-card flex flex-col items-center p-4 border-2 border-gray-300 rounded-lg">
        <span class="video-number text-lg font-bold">{{ index + 1 }}</span>
        <img :src="video.thumbnail" class="thumbnail mb-2" alt="Thumbnail" />
        <p class="video-title mb-1 font-bold">{{ video.title }}</p>
        <p class="video-description mb-1 text-gray-600">{{ video.description }}</p>
        <p class="video-size text-gray-700">Size: {{ video.size }}</p>
      </div>
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
  padding: 4rem;
}

.filter-button {
  @apply flex items-center justify-center p-2 border-2 border-purple-600 rounded-lg bg-white text-purple-600 cursor-pointer;
}

.search-field {
  @apply w-full sm:w-72 p-2 border-2 border-gray-300 rounded-lg;
}

.search-button {
  @apply flex items-center justify-center p-2 border-none rounded-lg bg-purple-600 text-white cursor-pointer;
}

.thumbnail {
  @apply w-full h-auto rounded-lg object-cover;
}

.video-card {
  @apply flex flex-col items-center p-4 border-2 border-gray-300 rounded-lg;
}

.video-number {
  @apply mb-2;
}

.video-title {
  @apply font-bold;
}

.video-description {
  @apply text-gray-600;
}

.video-size {
  @apply text-gray-700;
}
</style>

<script setup>
const videos = [
  {
    thumbnail: 'path/to/thumbnail1.jpg',
    title: 'Video Title 1',
    description: 'Video description 1',
    size: '200MB',
  },
  {
    thumbnail: 'path/to/thumbnail2.jpg',
    title: 'Video Title 2',
    description: 'Video description 2',
    size: '150MB',
  },
  {
    thumbnail: 'path/to/thumbnail3.jpg',
    title: 'Video Title 3',
    description: 'Video description 3',
    size: '300MB',
  },
  // Add more video objects here
];
</script>
