<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Sign Up / Log In</h2>

      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />

      <div class="auth-buttons">
        <button v-if="!user" @click="handleSignUp" class="btn btn-green">Sign Up</button>
        <button v-if="!user" @click="handleLogIn" class="btn btn-blue">Log In</button>
      </div>

      <button
        v-if="user"
        @click="handleSignOut"
        class="btn btn-red w-full"
      >
        Sign Out
      </button>

      <p v-if="user" class="logged-in">
        You are logged in as: <strong>{{ user.email }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuth } from '../useAuth'
import '../assets/AuthForm.css'

export default {
  setup() {
    const { user, signUp, signIn, signOut } = useAuth()
    const email = ref('')
    const password = ref('')

    const handleSignUp = async () => {
      const { error } = await signUp(email.value, password.value)
      if (error) alert(error.message)
      else alert('Check your email to confirm your account!')
    }

    const handleLogIn = async () => {
      const { error } = await signIn(email.value, password.value)
      if (error) alert(error.message)
    }

    const handleSignOut = () => signOut()

    return { email, password, user, handleSignUp, handleLogIn, handleSignOut }
  }
}


</script>
