import { supabase } from './supabase'
import { useAuth } from './useAuth'
const { user } = useAuth()

export async function fetchReviews(itemType, itemId) {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('item_type', itemType)
    .eq('item_id', itemId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function postReview(itemType, itemId, ratingVal, reviewText) {
  if (!user.value) throw new Error('User not authenticated')

  const payload = {
    user_id: user.value.id,
    item_type: itemType,
    item_id: itemId,
    rating: ratingVal,
    review: reviewText
  }

  console.debug('postReview payload', payload)

  // Use upsert with onConflict so posting the same user/item updates the
  // existing review instead of failing the UNIQUE constraint.
  try {
    console.debug('Calling supabase upsert for reviews...')
    const { data, error } = await supabase
      .from('reviews')
      .upsert([payload], { onConflict: 'user_id,item_type,item_id' })

    console.debug('Supabase upsert returned', { data, error })

    if (error) {
      console.error('postReview error', error)
      return { data: null, error }
    }

    console.log('Review posted!', data)
    return { data, error: null }
  } catch (exception) {
    // Network errors, CORS, or other thrown exceptions will surface here.
    console.error('postReview exception thrown', exception)
    return { data: null, error: exception }
  }
}

export async function deleteReview(reviewId) {
  const { data, error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', reviewId)

  if (error) throw error
  return data
}
