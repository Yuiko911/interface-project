<script setup>
import SortAndSearchBar from '@/components/SortAndSearchBar.vue'
import { ref, onMounted } from 'vue'
import { searchDiscogs } from '../api/discogs.js'

const albums = ref([])

onMounted(async () => {
  const data = await searchDiscogs('Radiohead', 'release')
  albums.value = data.results
})
</script>

<template>
  <div>
    <h1>Albums</h1>
    <SortAndSearchBar />
    <div class="grid">
      <RouterLink
        v-for="album in albums"
        :key="album.id"
        :to="`/albums/${album.id}`"
        class="card"
      >
        <img :src="album.cover_image" alt="" width="150" />
        <p>{{ album.title }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 0px;
  padding: 10px;
  background-color: #fafafa;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: black;
}

.card:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.card p {
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
}
</style>
