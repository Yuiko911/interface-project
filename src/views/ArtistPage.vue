<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArtist } from '../api/discogs.js'

const route = useRoute()
const artist = ref(null)

onMounted(async () => {
  const id = route.params.id
  if (!id) return
  artist.value = await getArtist(id)
  console.log(artist.value)
})

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
	<div v-if="artist">
		<div class="metadata">
			<div class="artist-picture">
				<img :src="artist.images[0]?.uri" alt="artist picture">
			</div>
			<div class="artist-info">
				<h1 class="artist-name">{{ artist.name }}</h1>
				<div class="separator"></div>
				<h2 class="artist-origin">Origin</h2>
				<div class="artist-birthday">21 September 1999</div>
			</div>
		</div>
	
		<div class="artist-data">
			<div class="description">
				<p>{{ artist.profile }}</p>
			</div>
		</div>
	
		<div class="reviews">
			<p v-for="review in reviews">{{ review.user }} : "{{ review.body }}" at {{ review.timeOfReview }}</p>
		</div>
	</div>
	<div v-else>
		Loading artist...
	</div>
</template>

<style scoped>
.metadata {
	margin: 20px 0;

	display: flex;
	flex-direction: row;
}

.artist-picture {
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
	width: 70%;
}

.reviews {
	min-height: 100px;
	margin: 20px 0;
}
</style>