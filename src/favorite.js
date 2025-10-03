import { supabase } from './supabase'

export async function addFavorite(itemType, itemId, metadata = {}) {
  const { data: { session } } = await supabase.auth.getSession()
  const userId = session?.user?.id
  if (!userId) throw new Error('Not logged in')

  const { data, error } = await supabase
    .from('favorites')
    .insert([{ user_id: userId, item_type: itemType, item_id: itemId, metadata }])
  return { data, error }
}

export async function listFavorites() {
  const { data, error } = await supabase.from('favorites').select('*')
  return { data, error }
}
