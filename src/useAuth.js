import { ref } from 'vue'
import { supabase } from './supabase'

export const user = ref(null)

// Ensure a profile row exists for the authenticated user. We use upsert so
// repeated calls are safe and won't create duplicates.
async function ensureProfileExists(userObj) {
  if (!userObj) return

  const profile = {
    id: userObj.id,
    email: userObj.email,
    username: userObj.email?.split('@')[0] ?? userObj.id
  }

  // Debug: log what we're about to upsert so we can see why RLS or
  // NOT NULL constraints may reject the row.
  console.debug('ensureProfileExists: upserting profile', profile)

  const { data, error } = await supabase
    .from('profiles')
    .upsert(profile, { onConflict: 'id' })
    .select()

  if (error) {
    console.error('Error adding user to table:', error, 'profile:', profile)
  } else {
    console.debug('Profile upsert result:', data)
  }

  return { data, error }
}

// Single auth state change handler. When a user signs in, try to create
// their profile row. Note: this still requires a matching RLS policy in
// your Supabase project that allows authenticated users to insert/upsert
// their own row (see instructions in README or below).
supabase.auth.onAuthStateChange(async (event, session) => {
  user.value = session?.user ?? null
  if (event === 'SIGNED_IN' && session?.user) {
    await ensureProfileExists(session.user)
  }
})

export function useAuth() {
  async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  return { data, error }
}

  async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    return { data, error }
  }

  async function signOut() {
    await supabase.auth.signOut()
    user.value = null
  }

  return { user, signUp, signIn, signOut }
}
