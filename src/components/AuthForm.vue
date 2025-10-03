<template>
  <div>
    <h2>Sign Up / Sign In</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="handleSignUp">Sign Up</button>
    <button @click="handleSignIn">Sign In</button>
    <button @click="handleSignOut" v-if="user">Sign Out</button>

    <p v-if="user">Logged in as: {{ user.email }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuth } from '../useAuth'

export default {
  setup() {
    const { user, signUp, signIn, signOut } = useAuth()
    const email = ref('')
    const password = ref('')

    const handleSignUp = async () => {
      const { data, error } = await signUp(email.value, password.value)
      if (error) alert(error.message)
      else alert('Check your email to confirm your account!')
    }

    const handleSignIn = async () => {
      const { data, error } = await signIn(email.value, password.value)
      if (error) alert(error.message)
    }

    const handleSignOut = () => signOut()

    return { email, password, user, handleSignUp, handleSignIn, handleSignOut }
  }
}
</script>
