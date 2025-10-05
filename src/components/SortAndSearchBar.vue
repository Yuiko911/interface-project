<script>
// TODO: Emits for selected options
</script>

<template>
	<div class="search-container">
		<div class="browse-text">Browse</div>
		<div class="browse-categories">
			<div class="browse-categories-category">Year</div>
			<div class="browse-categories-category">Genre</div>
			<div class="browse-categories-category">Style</div>
			<div class="browse-categories-category">Rating</div>
			<!-- <div class="browse-categories-category">Popularity</div> -->
		</div>
		<div class="search-text-input"><input type="text" name="" id="" placeholder="Search a song"></div>
	</div>
</template>

<style scoped>
.search-container {
	margin: 15px 0;

	display: flex;
	flex-direction: row;
	align-items: center;
}

.browse-text {
	font-size: x-large;
	margin-right: 30px;
}

.browse-categories {
	display: flex;
}

.browse-categories > :first-child {
	border-radius: 8px 0 0 8px;
}

.browse-categories > :last-child {
	border-radius: 0 8px 8px 0;
}

.browse-categories-category {
	width: 90px;
	height: 30px;
	
	background-color: rgb(240, 240, 240);
	
	text-align: center;
	align-content: center;

	transition: background-color 0.2s;
}

.browse-categories-category:hover {
	background-color: rgb(218, 218, 218);
}

.search-text-input {
	margin-left: auto;
}

.search-text-input > input {
	border: 0;
	border-radius: 8px;
	
	height: 30px;
	width: 250px;

	background-color: rgb(240, 240, 240);
}

.search-text-input > input::placeholder {
	margin-left: 50px;
	text-align: center;
}

</style>