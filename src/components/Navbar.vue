<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<nav>
		<RouterLink class="link" to="/songs">Songs</RouterLink>
		<RouterLink class="link" to="/albums">Albums</RouterLink>
		<RouterLink class="link" to="/artists">Artists</RouterLink>
		<RouterLink class="link" to="/users">Users</RouterLink>
	</nav>
</template>

<style scoped>
nav {
	/* height: 100%; */

	display: flex;
	justify-content: center;
	/* align-items: center; */

	gap: 40px;
}

.link {
	color: black;
	text-decoration: none;
}
</style>

