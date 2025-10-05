<script setup>
const reviews = [
	{ user: 'User 1', body: 'Review of the song', timeOfReview: '21:31' },
	{ user: 'User 2', body: 'Review of the song', timeOfReview: '21:31' },
	{ user: 'User 3', body: 'Review of the song', timeOfReview: '21:31' },
	{ user: 'User 4', body: 'Review of the song', timeOfReview: '21:31' },
	{ user: 'User 5', body: 'Review of the song', timeOfReview: '21:31' },
	{ user: 'User 6', body: 'Review of the song', timeOfReview: '21:31' },
	{ user: 'User 7', body: 'Review of the song', timeOfReview: '21:31' },
	{ user: 'User 8', body: 'Review of the song', timeOfReview: '21:31' },
]
</script>

<template>
	<div class="metadata">
		<div class="song-jacket">
			<img src="/src/assets/album-placeholder.png" alt="album cover">
		</div>
		<div class="song-info">
			<h1 class="song-title">Title {{ $route.params.id }}</h1>
			<div class="separator"></div>
			<h2 class="song-artist">Artist | Album</h2>
			<div class="song-release-date">21 September 1999</div>
		</div>
	</div>

	<div class="song-data">
		<div class="song-length">
			<p>Length: 2:30</p>
		</div>
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

.song-jacket {
	/* background-color: rgb(255, 238, 234); */

	width: 50%;
	padding: 20px 0;
}

.song-jacket>img {
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 50%;
	/* TODO: Gerer l'image */
}

.song-info {
	/* background-color: rgb(255, 247, 221); */
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	flex-basis: auto;
}

.song-title {
	font-size: 3em;
	margin-bottom: 0;
	margin-top: 0;
}

.song-artist {
	font-weight: normal;
	margin-top: 0;
}

/* .separator {
	width: 80%;
	border-bottom: 2px solid lightgray;
} */

.song-data {
	padding: 0 20px;
	margin: 20px 0;

	width: 100%;
	display: flex;
	flex-direction: row;

	/* Jsp ou le mettre */
	justify-content: center;
}
.song-length {
	width: 60%;
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