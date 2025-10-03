<!-- TODO: Important, mettre tout ça dans un autre component/view, et ici mettre la recherche d'album -->

<script setup>
const tracks = [
	{name:'Track 1', duration:'1:00'},
	{name:'Track 2', duration:'1:00'},
	{name:'Track 3', duration:'1:00'},
	{name:'Track 4', duration:'1:00'},
	{name:'Track 5', duration:'1:00'},
	{name:'Track 6', duration:'1:00'},
	{name:'Track 7', duration:'1:00'},
	{name:'Track 8', duration:'1:00'},
]

const reviews = [
	{user:'User 1', body:'Review of the album', timeOfReview:'21:31'},
	{user:'User 2', body:'Review of the album', timeOfReview:'21:31'},
	{user:'User 3', body:'Review of the album', timeOfReview:'21:31'},
	{user:'User 4', body:'Review of the album', timeOfReview:'21:31'},
	{user:'User 5', body:'Review of the album', timeOfReview:'21:31'},
	{user:'User 6', body:'Review of the album', timeOfReview:'21:31'},
	{user:'User 7', body:'Review of the album', timeOfReview:'21:31'},
	{user:'User 8', body:'Review of the album', timeOfReview:'21:31'},
]
</script>

<template>
	<div class="metadata">
		<div class="album-jacket">
			<img src="/src/assets/album-placeholder.png" alt="album cover">
		</div>
		<div class="album-info">
			<h1 class="album-title">Title</h1>
			<div class="separator"></div>
			<h2 class="album-artist">Artist</h2>
			<div class="album-release-date">21 September 1999</div>
		</div>
	</div>

	<div class="songlist"> <!--TODO: Make hidden by default ?-->
		<p v-for="song in tracks">{{ song.name }} ... {{ song.duration }}</p>
	</div>

	<div class="reviews">
		<p v-for="review in reviews">{{ review.user }} : "{{ review.body }}" at {{ review.timeOfReview }}</p>
	</div>

</template>

<style scoped>
.metadata {
	background-color: rgb(255, 244, 234);

	display: flex;
	flex-direction: row;
}

.album-jacket {
	background-color: rgb(255, 238, 234);

	width: 40%;
	padding: 20px 0;
}

.album-jacket>img {
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 50%; /* TODO: Gerer l'image */
}

.album-info {

	background-color: rgb(255, 247, 221);
	width: 60%;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-basis: auto;
	
}

.separator {
	width: 80%;
	border-bottom: 2px solid lightgray;
}

.songlist {
	background-color: rgb(240, 255, 216);

	min-height: 100px;
}

.reviews {
	background-color: rgb(216, 255, 247);

	min-height: 100px;
}
</style>