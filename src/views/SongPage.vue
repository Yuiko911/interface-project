<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchSong } from '../api/discogs.js'

const route = useRoute()
const song = ref(null)

onMounted(async () => {
  const id = route.params.id
  if (!id) return
  song.value = await fetchSong(id)
})
</script>

<template>
  <div v-if="song">
    <h1>{{ song.title }}</h1>
    <img :src="song.images?.[0]?.uri" alt="cover" />
    <p>{{ song.year }}</p>
    <p v-if="song.artists?.length">By {{ song.artists[0].name }}</p>
  </div>
  <div v-else>
    Loading song...
  </div>
</template>
