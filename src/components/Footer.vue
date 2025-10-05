<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<nav>
		<RouterLink class="link" to="/about">About Us</RouterLink>
		<RouterLink class="link" to="/contact">Contact</RouterLink>
	</nav>
</template>

<style scoped>
nav {
	display: flex;
	justify-content: center;
	
	gap: 70px;
}

.link {
	color: white;
	text-decoration: none;
}
</style>
