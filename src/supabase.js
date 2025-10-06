import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://tsfzyctmwdqzgplqdxjz.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZnp5Y3Rtd2RxemdwbHFkeGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0OTQ4NjcsImV4cCI6MjA3NTA3MDg2N30.pdGvp711KcS4l1Xp3hf1CC8V8Hl7i3nps7dodkTlCq0'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


export async function signUpUser(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password })

  if (error) return { data, error }

  const authUser = data.user
  return { data, error: null }
}

export async function signInUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  return { data, error }
}


export async function signOutUser() {
  const { error } = await supabase.auth.signOut()
  return { error }
}
