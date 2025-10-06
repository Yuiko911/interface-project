<script setup>
import { ref, onMounted } from 'vue'
import { searchDiscogs } from '../api/discogs.js'
import SortAndSearchBar from '@/components/SortAndSearchBar.vue'
const singles = ref([])

onMounted(async () => {
  const data = await searchDiscogs('Daft Punk', 'master', 'single')
  singles.value = data.results
  singles.value = data.results.filter(item => item.cover_image)
})
</script>

<template>
  <div>
    <h1>Singles</h1>
    <SortAndSearchBar />
    <div class="grid">
      <RouterLink
        v-for="single in singles"
        :key="single.id"
        :to="`/singles/${single.id}`"
        class="card"
      >
        <img :src="single.cover_image" alt="" width="150" />
        <p>{{ single.title }}</p>
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
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  width: 180px;
  font-weight: normal;
  text-align: center;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 0px;
  padding: 10px;
  background-color: #fafafa;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: scale(1.05);
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
