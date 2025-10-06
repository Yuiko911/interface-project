<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { searchDiscogs } from '../api/discogs.js'

const query = ref('')
const type = ref('artist')
const filter = ref('all')
const results = ref([])

const router = useRouter()

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Year', value: 'year' },
  { label: 'Genre', value: 'genre' },
  { label: 'Style', value: 'style' },
  { label: 'Rating', value: 'rating' },
]

async function search() {
  if (!query.value) {
    results.value = []
    return
  }

  let searchQuery = query.value

  if (filter.value === 'year') searchQuery += '&year=2020'
  else if (filter.value === 'genre') searchQuery += '&genre=Rock'
  else if (filter.value === 'style') searchQuery += '&style=Alternative'

  const data = await searchDiscogs(searchQuery, type.value)
  results.value = data.results?.filter(item => item.cover_image) || []
}

function selectResult(item) {
  query.value = item.title
  results.value = []

  if (type.value === 'artist') router.push(`/artists/${item.id}`)
  else if (type.value === 'release') router.push(`/albums/${item.id}`)
  else if (type.value === 'master') router.push(`/songs/${item.id}`)
}
</script>

<template>
  <div class="search-container">
    <div class="search-input">
      <input
        v-model="query"
        @input="search"
        type="text"
        placeholder="Search for artists, albums or songs..."
      />
      <!--<button @click="search">Search</button> // c'est mieux sans le bouton imo-->

      <ul v-if="results.length" class="autocomplete-list">
        <li v-for="item in results" :key="item.id" @click="selectResult(item)">
          <img :src="item.cover_image" alt="" width="40" />
          {{ item.title }}
        </li>
      </ul>
    </div>

    <div class="search-type">
      <label for="type">Search for:</label>
      <select id="type" v-model="type" @change="search">
        <option value="artist">Artist</option>
        <option value="release">Album</option>
        <option value="master">Song</option>
      </select>
    </div>

    <!-- Filter options -->
    <div class="search-filters">
      <label for="filter">Filter by:</label>
      <select id="filter" v-model="filter" @change="search">
        <option v-for="opt in filterOptions" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
}

.search-input {
  position: relative;
}

.search-input input {
  height: 30px;
  width: 250px;
  border-radius: 2px;
  border: 1px solid #ccc;
  padding: 0 10px;
}

.search-input button {
  height: 34px;
  width: 80px;
  margin-left: 10px;
  border-radius: 2px;
  border: none;
  background-color: #e28e19;
  color: white;
  cursor: pointer;
}

.search-input button:hover {
  background-color: #f6b503;
}

.autocomplete-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  padding: 0;
  margin: 0;
  list-style: none;
}

.autocomplete-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  cursor: pointer;
}

.autocomplete-list li:hover {
  background-color: #f0f0f0;
}

.search-filters,
.search-type {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-filters select,
.search-type select {
  height: 30px;
  border-radius: 2px;
  border: 1px solid #ccc;
  padding: 0 10px;
  background-color: #f0f0f0;
}
</style>
