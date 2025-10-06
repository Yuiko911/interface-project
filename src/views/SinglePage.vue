<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchSong } from '../api/discogs.js'
import Reviews from './Reviews.vue'

const route = useRoute()
const single = ref(null)

onMounted(async () => {
  const id = route.params.id
  if (!id) return
  single.value = await fetchSong(id)
  console.log(single.value)
})
</script>

<template>
  <div v-if="single">
    <div class="metadata">
		<div class="single-jacket">
			<img :src="single.images?.[0]?.uri" alt="album cover">
		</div>
		<div class="single-info">
			<h1 class="single-title">{{ single.title }}</h1>
			<div class="separator"></div>
			<h2 class="single-artist"><span v-if="single.artists?.length">{{ single.artists[0].name }}</span></h2>
			<div class="single-release-date">{{ single.year }}</div>
		</div>
	</div>

	<div class="single-data">
		<div class="single-length">
			<p>{{ single.notes }}</p>
		</div>
		<div class="description"> <!--TODO: Make hidden by default ?-->
			<p>Length: {{ single.tracklist[0]?.duration }}</p>
			<p>Genre: {{ single.genres?.join([separator = ', ']) }}</p>
			<p>Style: {{ single.styles?.join([separator = ', ']) }}</p>
			<p>Rating : 5/5</p> <!--TODO-->
		</div>
	</div>

	<div class="reviews">
		<Reviews itemType="song" :itemId="route.params.id" />
		<!-- <p v-for="review in reviews">{{ review.user }} : "{{ review.body }}" at {{ review.timeOfReview }}</p> -->
	</div>

  </div>
  <div v-else>
    Loading song...
  </div>
</template>

<style scoped>
.metadata {
	/* background-color: rgb(255, 244, 234); */
	margin: 20px 0;

	display: flex;
	flex-direction: row;
}

.single-jacket {
	/* background-color: rgb(255, 238, 234); */

	width: 50%;
	padding: 20px 0;
}

.single-jacket>img {
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 50%;
	/* TODO: Gerer l'image */
}

.single-info {
	/* background-color: rgb(255, 247, 221); */
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	flex-basis: auto;
}

.single-title {
	font-size: 3em;
	margin-bottom: 0;
	margin-top: 0;
}

.single-artist {
	font-weight: normal;
	margin-top: 0;
}

/* .separator {
	width: 80%;
	border-bottom: 2px solid lightgray;
} */

.single-data {
	padding: 0 20px;
	margin: 20px 0;

	width: 100%;
	display: flex;
	flex-direction: row;

	/* Jsp ou le mettre */
	justify-content: center;
}
.single-length {
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