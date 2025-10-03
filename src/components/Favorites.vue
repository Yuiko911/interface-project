<template>
  <div v-if="user">
    <h2>Your Favorites</h2>
    <input v-model="itemId" placeholder="Item ID (Spotify Track/Album)" />
    <select v-model="itemType">
      <option value="song">Song</option>
      <option value="album">Album</option>
    </select>
    <button @click="addFavorite">Add Favorite</button>

    <ul>
      <li v-for="fav in favorites" :key="fav.id">
        {{ fav.item_type }}: {{ fav.item_id }}
      </li>
    </ul>
  </div>
  <p v-else>Please sign in to manage favorites.</p>
</template>

<script>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'
import { useAuth } from '../useAuth'

export default {
  setup() {
    const { user } = useAuth()
    const favorites = ref([])
    const itemId = ref('')
    const itemType = ref('song')

    const fetchFavorites = async () => {
      if (!user.value) return
      const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', user.value.id)
      if (error) console.error(error)
      else favorites.value = data
    }

    const addFavorite = async () => {
      if (!user.value) return alert('Please sign in first!')
      const { data, error } = await supabase.from('favorites').insert([
        { user_id: user.value.id, item_id: itemId.value, item_type: itemType.value }
      ])
      if (error) console.error(error)
      else fetchFavorites()
    }

    onMounted(fetchFavorites)

    return { user, favorites, itemId, itemType, addFavorite }
  }
}
</script>
