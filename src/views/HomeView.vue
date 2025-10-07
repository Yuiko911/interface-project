<script setup>
import { ref, onMounted } from 'vue'
import { searchDiscogs } from '../api/discogs.js'
import { useAuth } from '../useAuth.js'


const { user } = useAuth()
const artists = ref([])
const albums = ref([])
const singles = ref([])

onMounted(async () => {
  const featuredArtists = ['Muse', 'Daft Punk', 'Taylor Swift', 'Gorillaz', 'Arctic Monkeys']
  const topAlbums = ['Random Access Memories', 'Abbey Road', '1989', 'The Dark Side of the Moon', 'In Rainbows']
  const popularSongs = ['Get Lucky', 'Come Together', 'Shake It Off', 'Feel Good Inc.', 'Do I Wanna Know?']

  // Fetch Artists
  // const artistResults = []
  // for (const name of featuredArtists) {
  //   const data = await searchDiscogs(name, 'artist')
  //   if (data.results?.length && data.results[0].cover_image) {
  //     artistResults.push(data.results[0])
  //   }
  // }
  // artists.value = artistResults
  artists.value = [
    {
      "id": 1003,
      "title": "Muse",
      "cover_image": "https://i.discogs.com/QKEaORm6iAMK64D513rhp5yrhKWH7FtQnjam6s0JFuo/rs:fit/g:sm/q:90/h:317/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEwMDMt/MTM0OTY5OTgxNi02/OTEzLmpwZWc.jpeg",
    },
    {
      "id": 1289,
      "title": "Daft Punk",
      "cover_image": "https://i.discogs.com/sP_wDoC5MsG9lZUfb9thLbpmMmL__nuVnGMNpwgjirE/rs:fit/g:sm/q:90/h:438/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEyODkt/MTYxNTQ4NDUyOS00/Mjg0LmpwZWc.jpeg",
    },
    {
      "id": 1124645,
      "title": "Taylor Swift",
      "cover_image": "https://i.discogs.com/WjFuJxO2OvPQ2vrIC7gudKAG2P7Lbj6NgKhjGYBfWK0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTExMjQ2/NDUtMTc1Nzk3ODM4/OS0zNjgyLmpwZWc.jpeg",
    },
    {
      "id": 6378,
      "title": "Gorillaz",
      "cover_image": "https://i.discogs.com/UmJzdvwVcDmExo6VqSQZg_EhsgXphDiQDsQvcD9GdYM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTYzNzgt/MTc1ODYyODY3Ni0y/NzUwLnBuZw.jpeg",

    },
    {
      "id": 391170,
      "title": "Arctic Monkeys",
      "cover_image": "https://i.discogs.com/YSYhf8n0KBdNDCBvqCl-wXmRQeg2VHOWfaov2tnbSsc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTM5MTE3/MC0xNjc1ODg5MDYx/LTg1NDMucG5n.jpeg",
    }
  ]

  // Fetch Albums
  // const albumResults = []
  // for (const name of topAlbums) {
  //   const data = await searchDiscogs(name, 'master', 'album')
  //   if (data.results?.length && data.results[0].cover_image) {
  //     albumResults.push(data.results[0])
  //   }
  // }
  // albums.value = albumResults
  albums.value = [
    {
      "id": 556257,
      "title": "Daft Punk - Random Access Memories",
      "cover_image": "https://i.discogs.com/IR6_z_1KUErO-OORqXG2_MJhqWxsaPxYRi-hOLLdHic/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1NzAz/NjYtMTc0OTM3MjMx/Ny0xODg1LmpwZWc.jpeg",
    },
    {
      "id": 24047,
      "title": "The Beatles - Abbey Road",
      "cover_image": "https://i.discogs.com/M2yc5OJZPdVoDm2_UlRRXuDlDguamLLSdnbziNmZoQI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MDc0/MjQtMTYzMDYwMTA4/Ny0xMTk5LmpwZWc.jpeg",
    },
    {
      "id": 750386,
      "title": "Taylor Swift - 1989",
      "cover_image": "https://i.discogs.com/P5sv32IczQ5xAgjvQusxAru1ddYWDMIXx_H9lDRRPDs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwODk2/NjktMTQ1OTU4MzY2/MS0xMjk1LmpwZWc.jpeg",
    },
    {
      "id": 10362,
      "title": "Pink Floyd - The Dark Side Of The Moon",
      "cover_image": "https://i.discogs.com/oHPDj8NWtkGhq7kSCJuJ4pEnThoYx3JgU9kcDyvbeKo/rs:fit/g:sm/q:90/h:609/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NzMw/MTMtMTcyNzc2NDkx/OS04NTI3LmpwZWc.jpeg",
    },
    {
      "id": 21520,
      "title": "Radiohead - In Rainbows",
      "cover_image": "https://i.discogs.com/7y0jjFTZp88uBO380fsYcO36I3ex_er3lZn8COq90Vc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzQy/OTYtMTY5NzMyNzQ3/Ny0yMzQ1LmpwZWc.jpeg",
    }
  ]

  // Fetch Songs
  // const songResults = []
  // for (const name of popularSongs) {
  //   const data = await searchDiscogs(name, 'master', 'single')
  //   if (data.results?.length && data.results[0].cover_image) {
  //     songResults.push(data.results[0])
  //   }
  // }
  // songs.value = songResults
  singles.value = [
    {
      "id": 546596,
      "title": "Daft Punk - Get Lucky",
      "cover_image": "https://i.discogs.com/S4j_f1N1YqBv_QohV8i4YoD2jwPtG_58z_zQy5XwVCI/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0ODg5/NjgtMTM2NjM0NjA5/NC03NDQwLmpwZWc.jpeg",
    },
    {
      "id": 54558,
      "title": "The Beatles - Something / Come Together",
      "cover_image": "https://i.discogs.com/duMSijzRUs4xtqxqaz7Fil2HoOGwY_2Og6CagUawZFo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxMzQy/Ny0xMjc4NTkwMjAz/LmpwZWc.jpeg",
    },
    {
      "id": 79011,
      "title": "Mariah Carey - Shake It Off",
      "cover_image": "https://i.discogs.com/e_llOtNauI_AN4BMNUFRbv56nlfurlZt-frq57qnCUo/rs:fit/g:sm/q:90/h:522/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzMjYz/NS0xNDM1MTk1MTkw/LTQwMTIuanBlZw.jpeg",
    },
    {
      "id": 58046,
      "title": "Gorillaz - Feel Good Inc",
      "cover_image": "https://i.discogs.com/JwjRwOAarI8NeL0f0Uo_OoAhhHmsElve9W09wia0a9E/rs:fit/g:sm/q:90/h:501/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1ODQ3/Ni0xNjgwMDA1MjQ0/LTM3NzAuanBlZw.jpeg",
    },
    {
      "id": 576586,
      "title": "Arctic Monkeys - Do I Wanna Know?",
      "cover_image": "https://i.discogs.com/bBvghX_07xcY14OuT_ELWVIsJqwi9iXEd2Agy1m5aVI/rs:fit/g:sm/q:90/h:604/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ3NDUy/MDctMTM3NzY1MDY2/Mi01MzA2LmpwZWc.jpeg",
    }
  ]
})
</script>
<template>
  <div>
    <div class="homeHero">
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
        <RouterLink v-for="single in singles" :key="single.id" :to="`/singles/${single.id}`" class="card">
          <img :src="single.cover_image" alt="" />
          <p>{{ single.title }}</p>
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
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(to top, white, transparent);
  backdrop-filter: blur(6px);
}

.homeImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
}

.homeText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.homeRegisterButton {
  background-color: rgb(17, 17, 17);
  color: #ddd;
  position: absolute;
  top: 70%;
  left: 50%;
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
