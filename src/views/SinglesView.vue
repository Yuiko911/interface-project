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
  text-decoration: none;
  color: black;
  text-align: center;
  height: auto;
  width: 150px;
}
</style>
