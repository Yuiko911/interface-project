<script setup>
const songs = [
	{cover: "/src/assets/album-placeholder.png", title: "Title 2"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 1"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 3"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 4"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 5"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 6"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 7"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 8"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 9"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 10"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 11"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 12"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 13"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 14"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
	{cover: "/src/assets/album-placeholder.png", title: "Title 15"},
]
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
		<div class="result-card" v-for="song in songs">
			<img :src="song.cover" alt="" width="100px">
			<div>{{ song.title }}</div>
		</div>
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
	padding: 10px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	gap: 10px;
}
</style>