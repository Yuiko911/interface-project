<script setup>
import { ref, onMounted } from 'vue'
import { fetchReviews, postReview } from '../reviews.js'
import { useAuth } from '../useAuth.js'

const props = defineProps({
  itemType: String,   // 'song', 'album', 'artist'
  itemId: String
})

const { user } = useAuth()
const reviews = ref([])
const rating = ref(5)
const comment = ref('')

async function loadReviews() {
  console.debug('Loading reviews for', props.itemType, props.itemId)
  const rows = await fetchReviews(props.itemType, props.itemId)
  console.debug('Fetched reviews', rows)
  reviews.value = rows
}

async function submitReview() {
  if (!user.value) return alert('You must be logged in!')
  console.debug('Submitting review', { itemType: props.itemType, itemId: props.itemId, rating: rating.value, review: comment.value, user: user.value?.id })
  await postReview(props.itemType, props.itemId, rating.value, comment.value)
  rating.value = 5
  comment.value = ''
  await loadReviews()
}

onMounted(loadReviews)
</script>

<template>
  <div class="reviews">
    <h3>Reviews</h3>

    <div v-if="user" class="new-review">
      <select v-model="rating">
        <option v-for="n in 5" :key="n" :value="n">{{ n }} Star{{ n > 1 ? 's' : '' }}</option>
      </select>
      <textarea v-model="comment" placeholder="Write your review..."></textarea>
      <button @click="submitReview">Submit</button>
    </div>
    <div v-else>
        <p><em>You need to log in to write a review.</em></p>
    </div>
    <div v-if="reviews.length === 0">No reviews yet.</div>

    <ul>
      <li v-for="rev in reviews" :key="rev.id">
        <strong>{{ rev.rating }} ⭐</strong>
        <p>{{ rev.review }}</p>
        <small>{{ rev.created_at }}</small>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.reviews {
  margin-top: 20px;
}
.new-review textarea {
  width: 100%;
  height: 80px;
  margin: 5px 0;
}
</style>
