<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Sign Up / Log In</h2>

      <input v-model="email" type="email" placeholder="Email" class="auth-input"/>
      <input v-model="password" type="password" placeholder="Password" class="auth-input"/>

      <div class="auth-buttons">
        <button v-if="!user" @click="handleSignUp" class="btn btn-green">Sign Up</button>
        <button v-if="!user" @click="handleLogIn" class="btn btn-blue">Log In</button>
      </div>

      <button v-if="user" @click="handleSignOut" class="btn btn-red w-full">Sign Out</button>

      <p v-if="user" class="logged-in">
        You are logged in as: <strong>{{ user.email }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase.js'

const email = ref('')
const password = ref('')
const user = ref(null)

// Sign up
const handleSignUp = async () => {
  const { data, error } = await supabase.auth.signUp({ 
    email: email.value, 
    password: password.value 
  })

  if (error) return alert(error.message)

  const { user: authUser } = data
  // Profile creation is handled by the auth state change handler
  // (upsert) in `useAuth.js`. Inserting here can fail due to RLS.
  alert('Check your email to confirm your account!')
  user.value = authUser
}

// Log in
const handleLogIn = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) return alert(error.message)
  user.value = data.user
}

// Sign out
const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) alert(error.message)
  else user.value = null
}
</script>

<style scoped>
.auth-input {
  width: 80%;
  margin: 5px 0;
  padding: 8px;
}
</style>
