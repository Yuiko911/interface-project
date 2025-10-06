<script setup>
import SortAndSearchBar from '@/components/SortAndSearchBar.vue';
import { searchDiscogs } from '../api/discogs.js';
import { ref, onMounted } from 'vue';

const featuredArtists = ['Muse', 'Daft Punk', 'Taylor Swift', 'Gorillaz', 'Arctic Monkeys']
const artists = ref([])

onMounted(async () => {
  const results = []
  for (const name of featuredArtists) {
    const data = await searchDiscogs(name, 'artist')
    if (data.results?.length) {
      results.push(data.results[0])
    }
  }
  artists.value = results
})
</script>

<template>
	<SortAndSearchBar />
	<div>
    <h1>Featured Artists</h1>
    <div class="grid">
      <div v-for="artist in artists" :key="artist.id" class="card">
        <img :src="artist.cover_image" alt="" width="150" />
        <p>{{ artist.title }}</p>
      </div>
    </div>
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
.grid{
	display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 0px;
  padding: 10px;
  background-color: #fafafa;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.card p {
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
}
</style>