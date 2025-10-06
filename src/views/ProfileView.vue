<script setup>

import { useAuth } from '../useAuth'
import '../assets/AuthForm.css'
const { user, signOut } = useAuth()
const handleSignOut = async () => {
  await signOut()
}
</script>
<template>
	<p>
		Profile Page
		<button
        v-if="user" @click="handleSignOut" class="btn btn-red w-full">
        Sign Out
      </button>

      <p v-if="user" class="logged-in">
        You are logged in as: <strong>{{ user.email }}</strong>
      </p>
	</p>
</template>