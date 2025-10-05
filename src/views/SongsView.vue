<script setup>
const songs = Array.from({length: 21}, (_, i) => Object({id: i, cover:"/src/assets/album-placeholder.png", title: `Title ${i}`}))

</script>

<template>
	<div class="search-container">
		<div class="browse-text">Browse by :</div>
		<div class="browse-categories">
			<div class="browse-categories-category">Year</div>
			<div class="browse-categories-category">Genre</div>
			<div class="browse-categories-category">Style</div>
			<div class="browse-categories-category">Rating</div>
			<div class="browse-categories-category">Popularity</div>
		</div>
		<div class="search-text">Search a song :</div>
		<div class="search-text-input"><input type="text" name="" id=""></div>
	</div>
	<div class="results">
		<a class="result-card" v-for="song in songs" :href="`/albums/${ song.id }`">
			<img :src="song.cover" alt="">
			<div>{{ song.title }}</div>
		</a>
	</div>
</template>

<style scoped>
.search-container {
	display: flex;
	flex-direction: row;
}

.browse-categories {
	display: flex;
}

.browse-categories-category {
	border: 1px solid lightgray;
	width: 80px;
}

.search-text {
	margin-left: auto;
}

.results {
	background-color: rgb(255, 235, 235);

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
}

.result-card>img {
	width: 160px;
}
</style>