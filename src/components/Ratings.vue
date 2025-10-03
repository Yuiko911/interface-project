<template>
  <div v-if="user">
    <h2>Your Ratings</h2>

    <div>
      <input v-model="itemId" placeholder="Item ID (Spotify Track/Album)" />
      <select v-model="itemType">
        <option value="song">Song</option>
        <option value="album">Album</option>
      </select>
      <select v-model="rating">
        <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
      </select>
      <button @click="addOrUpdateRating">Rate</button>
    </div>

    <ul>
      <li v-for="r in ratings" :key="r.id">
        {{ r.item_type }}: {{ r.item_id }} - Rating: {{ r.rating }}
      </li>
    </ul>
  </div>

  <p v-else>Please sign in to manage ratings.</p>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { supabase } from '../supabase'
import { useAuth } from '../useAuth'

export default {
  setup() {
    const { user } = useAuth()
    const ratings = ref([])
    const itemId = ref('')
    const itemType = ref('song')
    const rating = ref(5)

    // Fetch ratings for the logged-in user
    const fetchRatings = async () => {
      if (!user.value) return
      const { data, error } = await supabase
        .from('ratings')
        .select('*')
        .eq('user_id', user.value.id)
      if (error) console.error(error)
      else ratings.value = data
    }

    // Add or update rating
    const addOrUpdateRating = async () => {
      if (!user.value) return alert('Please sign in first!')

      const { data, error } = await supabase.from('ratings').upsert([
        {
          user_id: user.value.id,
          item_id: itemId.value,
          item_type: itemType.value,
          rating: rating.value
        }
      ], { onConflict: ['user_id', 'item_type', 'item_id'] })

      if (error) console.error(error)
      else fetchRatings()
    }

    onMounted(fetchRatings)

    // Refetch ratings if user changes
    watch(user, () => {
      fetchRatings()
    })

    return { user, ratings, itemId, itemType, rating, addOrUpdateRating }
  }
}
</script>
