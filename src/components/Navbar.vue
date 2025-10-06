<script setup>
import { RouterLink } from 'vue-router'
import { useAuth } from '../useAuth.js'

const { user } = useAuth()
</script>

<template>
  <nav>
    <RouterLink class="link" to="/singles">Singles</RouterLink>
    <RouterLink class="link" to="/albums">Albums</RouterLink>
    <RouterLink class="link" to="/artists">Artists</RouterLink>
    <RouterLink class="link" to="/users">Users</RouterLink>
    <RouterLink class="registerButton" v-if="!user" to="/AuthForm">Register</RouterLink>
    <RouterLink class="link" v-else to="/profile">Profile</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.link {
  color: black;
  text-decoration: none;
}

.registerButton {
  background-color: black;
  border-radius: 8px;
  color: white;
  width: 70px;
  text-decoration: none;
  padding: 2px;
  text-align: center;
}
</style>
