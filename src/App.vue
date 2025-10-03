<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { ref } from 'vue';

const loggedin = ref(false)
</script>

<template>
	<header>
		<img alt="Betterboxd logo" class="logo" src="@/assets/logo.png" />
		<Navbar />
		<div @click="loggedin = !loggedin">
			<div v-if="loggedin">Register</div>
			<div v-else>Profile</div>
		</div>
	</header>
	<div class="spacer"></div>

	<main>
		<RouterView />
	</main>

	

</template>

<style scoped>
header {
	z-index: 999;

	position: fixed;
	top: 0;
	left: 0;

	height: 75px;
	width: 100%;

	display: flex;
	justify-content: space-between;

	background-color: white;
	border-bottom: 2px solid lightgray;
}

.logo {
	height: 100%;
}

.spacer {
	position: relative;
	top: 0;
	left: 0;

	height: 75px;
	width: 100%;
}

main {
	display: flex;
	flex-direction: column;
	align-items: center;	
}
</style>
