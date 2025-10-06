<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchAlbum } from '../api/discogs.js'

const route = useRoute()
const album = ref(null)

onMounted(async () => {
  const id = route.params.id
  console.log('Album ID:', id)
  if (!id) {
    console.error('No album ID provided!')
    return
  }
  album.value = await fetchAlbum(id)
})
</script>

<template>
  <div v-if="album">
    <h1>{{ album.title }}</h1>
    <img :src="album.images?.[0]?.uri" alt="album cover" />
  </div>
</template>
<style scoped>
.metadata {
	/* background-color: rgb(255, 244, 234); */
	margin: 20px 0;

	display: flex;
	flex-direction: row;
}

.album-jacket {
	/* background-color: rgb(255, 238, 234); */

	width: 50%;
	padding: 20px 0;
}

.album-jacket>img {
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 50%;
	/* TODO: Gerer l'image */
}

.album-info {
	/* background-color: rgb(255, 247, 221); */
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	flex-basis: auto;
}

.album-title {
	font-size: 3em;
	margin-bottom: 0;
	margin-top: 0;
}

.album-artist {
	font-weight: normal;
	margin-top: 0;
}

/* .separator {
	width: 80%;
	border-bottom: 2px solid lightgray;
} */

.album-data {
	padding: 0 20px;
	margin: 20px 0;

	width: 100%;
	display: flex;
	flex-direction: row;
}

.songlist {
	/* background-color: rgb(240, 255, 216); */
	width: 50%;
	min-height: 100px;
}

th:nth-child(1) {
	width: 5%;
}

th:nth-child(3) {
	width: 12%;
}


.songlist>* {
	margin: 0;
	padding: 6px 0;
	padding-left: 6px;
}

.songlist> :nth-child(odd) {
	background-color: rgb(240, 240, 240);
}

.songlist> :nth-child(even) {
	background-color: rgb(247, 247, 247);
}

.description {
	/* background-color: rgb(222, 255, 216); */
	margin-left: auto;
	width: 40%;
}

.reviews {
	/* background-color: rgb(216, 255, 247); */
	min-height: 100px;
	margin: 20px 0;
}
</style>