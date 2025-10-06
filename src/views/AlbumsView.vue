<script setup>
import SortAndSearchBar from '@/components/SortAndSearchBar.vue'
import { ref, onMounted, watch } from 'vue'
import { searchDiscogs } from '../api/discogs.js'

const albums = ref([])
const search = ref('')

onMounted(async () => {
	let data = await searchDiscogs('Radiohead', 'master', 'album')
	albums.value = data.results
})

watch(search, async (query) => {
  let data = await searchDiscogs(query, 'master', 'album')
  albums.value = data.results
})
</script>

<template>

	<div>
		<h1>Albums</h1>
		<SortAndSearchBar v-on:search="(s) => search = s"/>

		<div class="grid">
			<RouterLink v-for="album in albums" :key="album.id" :to="`/albums/${album.id}`" class="card">
				<img :src="album.cover_image" alt="" width="150" height="150" />
				<p>{{ album.title }}</p>
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
