<script setup>
import { ref, onMounted } from 'vue'
import { searchDiscogs } from '../api/discogs.js'
import { useAuth } from '../useAuth.js'


const { user } = useAuth()
const artists = ref([])
const albums = ref([])
const songs = ref([])

onMounted(async () => {
  // Fetch Artists
  const artistResults = []
  for (const name of featuredArtists) {
    const data = await searchDiscogs(name, 'artist')
    if (data.results?.length && data.results[0].cover_image) {
      artistResults.push(data.results[0])
    }
  }
  artists.value = artistResults

  // Fetch Albums
  const albumResults = []
  for (const name of topAlbums) {
    const data = await searchDiscogs(name, 'release')
    if (data.results?.length && data.results[0].cover_image) {
      albumResults.push(data.results[0])
    }
  }
  albums.value = albumResults

  // Fetch Songs
  const songResults = []
  for (const name of popularSongs) {
    const data = await searchDiscogs(name, 'master')
    if (data.results?.length && data.results[0].cover_image) {
      songResults.push(data.results[0])
    }
  }
  songs.value = songResults
})
const featuredArtists = ['Muse', 'Daft Punk', 'Taylor Swift', 'Gorillaz', 'Arctic Monkeys']
const topAlbums = ['Random Access Memories', 'Abbey Road', '1989', 'The Dark Side of the Moon', 'In Rainbows']
const popularSongs = ['Get Lucky', 'Come Together', 'Shake It Off', 'Feel Good Inc.', 'Do I Wanna Know?']
</script>
<template>
  <div>
    <div class="homeHero" v-if="user">
      <div class="homeGradient"></div>
      <img src="../assets/placeholder.png" class="homeImage" />
      <h1 class="homeText">
        Review the album of the moment and exchange with other fans.
      </h1>
      <RouterLink class="homeRegisterButton" v-if="!user" to="/AuthForm">Get Started</RouterLink>
    </div>
    <!-- Featured Artists -->
    <section>
      <h2>Featured Artists</h2>
      <div class="grid">
        <RouterLink v-for="artist in artists" :key="artist.id" :to="`/artists/${artist.id}`" class="card">
          <img :src="artist.cover_image" alt="" />
          <p>{{ artist.title }}</p>
        </RouterLink>
      </div>
    </section>

    <!-- Top Albums -->
    <section>
      <h2>Top Albums</h2>
      <div class="grid">
        <RouterLink v-for="album in albums" :key="album.id" :to="`/albums/${album.id}`" class="card">
          <img :src="album.cover_image" alt="" />
          <p>{{ album.title }}</p>
        </RouterLink>
      </div>
    </section>

    <!-- Popular Songs -->
    <section>
      <h2>Popular Songs</h2>
      <div class="grid">
        <RouterLink v-for="song in songs" :key="song.id" :to="`/songs/${song.id}`" class="card">
          <img :src="song.cover_image" alt="" />
          <p>{{ song.title }}</p>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
<style scoped>

.homeHero {
  position: relative;
  text-align: center;
  border-radius: 5px;
  height: 600px;
}

.homeGradient {
  height:100%;
  width:100%;
  position: absolute;
  background: linear-gradient(to top, white, transparent);
}

.homeImage {
  height:100%;
  width:100%;
  object-fit: cover;
  display:block;
}

.homeText {
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
}

.homeRegisterButton {
  background-color: rgb(17, 17, 17);
  color:#ddd;
  position: absolute;
  top:70%;
  left:50%;
  transform: translate(-70%, -50%);
  text-decoration: none;
  padding: 4px;
  border-radius: 5px;
}

.grid {
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
  text-decoration: none;
  color: black;
}

.card:hover {
  transform: scale(1.1);
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
