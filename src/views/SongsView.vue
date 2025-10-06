<script setup>
import { ref, onMounted } from 'vue'
import { searchDiscogs } from '../api/discogs.js'
import SortAndSearchBar from '@/components/SortAndSearchBar.vue'
const songs = ref([])

onMounted(async () => {
  const data = await searchDiscogs('Daft Punk', 'master') // “master” = songs/albums
  songs.value = data.results
  songs.value = data.results.filter(item => item.cover_image)

})
</script>

<template>
  <div>
    <h1>Songs</h1>
    <SortAndSearchBar />
    <div class="grid">
      <RouterLink
        v-for="song in songs"
        :key="song.id"
        :to="`/songs/${song.id}`"
        class="card"
      >
        <img :src="song.cover_image" alt="" width="150" />
        <p>{{ song.title }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.card {
  text-decoration: none;
  color: black;
  text-align: center;
  height: auto;
  width: 150px;
}
</style>
