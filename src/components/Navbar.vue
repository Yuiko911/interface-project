<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<nav>
		<RouterLink to="/">Home</RouterLink> <!-- Retirer de la, home en cliquant sur le logo ? -->
		<RouterLink to="/songs">Songs</RouterLink>
		<RouterLink to="/albums">Albums</RouterLink>
		<RouterLink to="/artists">Artists</RouterLink>
		<RouterLink to="/users">Users</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</nav>
</template>

