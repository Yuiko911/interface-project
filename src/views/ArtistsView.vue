<script setup>
import SortAndSearchBar from '@/components/SortAndSearchBar.vue';

const artists = Array.from({length: 21}, (_, i) => Object({id: i, cover:"/src/assets/album-placeholder.png", name: `Name ${i}`}))

</script>

<template>
	<SortAndSearchBar />
	<div class="results">
		<a class="result-card" v-for="artist in artists" :href="`/artists/${ artist.id }`">
			<img :src="artist.cover" alt="">
			<div class="artist-name">{{ artist.name }}</div>
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

.artist-name {
	color: black;
	text-decoration: none;
}

.other-pages {
	text-align: center;
}
</style>