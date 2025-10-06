<script setup>
import debounce from 'lodash.debounce'
import { ref } from 'vue'

const query = ref('')

const emit = defineEmits(['search'])
const search = debounce(() => {
  emit('search', query.value)
}, 500)

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Year', value: 'year' },
  { label: 'Genre', value: 'genre' },
  { label: 'Style', value: 'style' },
  { label: 'Rating', value: 'rating' },
]
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
