<script setup>
import SortAndSearchBar from '@/components/SortAndSearchBar.vue';

const albums = Array.from({length: 21}, (_, i) => Object({id: i, cover:"/src/assets/album-placeholder.png", title: `Title ${i}`}))

</script>

<template>
	<SortAndSearchBar />
	<div class="results">
		<a class="result-card" v-for="album in albums" :href="`/albums/${ album.id }`">
			<img :src="album.cover" alt="">
			<div class="album-title">{{ album.title }}</div>
		</a>
	</div>
	<div class="other-pages">
		< 1 2 3 ... 100 >
		<!-- TODO: Implement -->
	</div>
</template>

<style scoped>
.results {
	/* background-color: rgb(255, 235, 235); */

	max-width: 100%;
	padding: 20px 50px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	justify-content: center;

	gap: 30px;
}

.result-card {
	/* TODO: This */
	text-decoration: none;
}

.result-card>img {
	width: 160px;
}

.album-title {
	color: black;
	text-decoration: none;
}

.other-pages {
	text-align: center;
}
</style>