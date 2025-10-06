import { ref } from 'vue'
import { supabase } from './supabase'

export const user = ref(null)

supabase.auth.onAuthStateChange((event, session) => {
  user.value = session?.user ?? null
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
