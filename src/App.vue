<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
	<header>
		<div>
			<RouterLink to="/"><img alt="Betterboxd logo" class="logo" src="@/assets/logo.png" /></RouterLink>
		</div>
		<Navbar />
		<div>
			<RouterLink to="/signin">Register</RouterLink>
		</div>
	</header>
	<div class="spacer"></div>

	<main>
		<RouterView />
	</main>

	<div>
		Discover what users had to say
	</div>

	<footer>
		feet
	</footer>

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
	width: 75%;
	min-height: 500px; /* Might not be useful */
}

footer {
	border-top: 2px solid lightgrey;
	
	width: 100%;
	margin-top: auto;
}
</style>
