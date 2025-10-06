<script setup>
import SortAndSearchBar from '@/components/SortAndSearchBar.vue'
import { ref, onMounted } from 'vue'
import { searchDiscogs } from '../api/discogs.js'

const albums = ref([])

onMounted(async () => {
	const data = await searchDiscogs('Radiohead', 'master', 'album')
	albums.value = data.results
})
</script>

<template>

	<div>
		<h1>Albums</h1>
		<SortAndSearchBar />
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
	text-decoration: none;
	color: black;
	text-align: center;
	height: auto;
	width: 150px;
}
</style>
