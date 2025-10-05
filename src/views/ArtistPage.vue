<script setup>
const reviews = [
	{ user: 'User 1', body: 'Review of the artist', timeOfReview: '21:31' },
	{ user: 'User 2', body: 'Review of the artist', timeOfReview: '21:31' },
	{ user: 'User 3', body: 'Review of the artist', timeOfReview: '21:31' },
	{ user: 'User 4', body: 'Review of the artist', timeOfReview: '21:31' },
	{ user: 'User 5', body: 'Review of the artist', timeOfReview: '21:31' },
	{ user: 'User 6', body: 'Review of the artist', timeOfReview: '21:31' },
	{ user: 'User 7', body: 'Review of the artist', timeOfReview: '21:31' },
	{ user: 'User 8', body: 'Review of the artist', timeOfReview: '21:31' },
]
</script>

<template>
	<div class="metadata">
		<div class="artist-picture">
			<img src="/src/assets/album-placeholder.png" alt="artist picture">
		</div>
		<div class="artist-info">
			<h1 class="artist-name">Artist {{ $route.params.id }}</h1>
			<div class="separator"></div>
			<h2 class="artist-origin">Origin</h2>
			<div class="artist-birthday">21 September 1999</div>
		</div>
	</div>

	<div class="artist-data">
		<div class="description"> <!--TODO: Make hidden by default ?-->
			<p>Genre: Electronic</p>
			<p>Style: Hardcore, J-Core, Dubstep, Drum n Bass, Speedcore, Hard Techno</p>
			<p>Rating : 5/5</p>
		</div>
	</div>

	<div class="reviews">
		<p v-for="review in reviews">{{ review.user }} : "{{ review.body }}" at {{ review.timeOfReview }}</p>
	</div>

</template>

<style scoped>
.metadata {
	/* background-color: rgb(255, 244, 234); */
	margin: 20px 0;

	display: flex;
	flex-direction: row;
}

.artist-picture {
	/* background-color: rgb(255, 238, 234); */

	width: 50%;
	padding: 20px 0;
}

.artist-picture>img {
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 50%;
	/* TODO: Gerer l'image */
}

.artist-info {
	/* background-color: rgb(255, 247, 221); */
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	flex-basis: auto;
}

.artist-name {
	font-size: 3em;
	margin-bottom: 0;
	margin-top: 0;
}

.artist-origin {
	font-weight: normal;
	margin-top: 0;
}

/* .separator {
	width: 80%;
	border-bottom: 2px solid lightgray;
} */

.artist-data {
	padding: 0 20px;
	margin: 20px 0;

	width: 100%;
	display: flex;
	flex-direction: row;

	/* Jsp ou le mettre */
	justify-content: center;
}

.description {
	/* background-color: rgb(222, 255, 216); */
	/* margin-left: auto; */
	width: 40%;
}

.reviews {
	/* background-color: rgb(216, 255, 247); */
	min-height: 100px;
	margin: 20px 0;
}
</style>