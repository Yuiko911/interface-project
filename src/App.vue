<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import RegisterButton from './components/RegisterButton.vue';
</script>

<template>
	<header>
		<div>
			<RouterLink to="/"><img alt="Betterboxd logo" class="logo" src="@/assets/logo.png" /></RouterLink>
		</div>
		<Navbar class="navbar-text" />
		<RegisterButton :is-logged="false"/>
	</header>
	<div class="spacer"></div>

	<main>
		<RouterView />
	</main>

	<div>
		Discover what users had to say
	</div>

	<footer>
		<Footer />
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
	align-items: center;

	background-color: white;
	border-bottom: 2px solid var(--lighter-grey);
}

header > :first-child {
	margin-left: 20px;
}

header > :nth-child(2) {
	margin-left: auto;
	margin-right: 40px;
}

header > :last-child {
	margin-right: 20px;
}

.logo {
	height: 50px;
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
	min-height: 500px;
	/* Might not be useful */
}

footer {
	background-color: var(--background-color);

	width: 100%;
	height: 100px;
	margin-top: auto;

	display: flex;
	justify-content: center;
	/* Centers child horizontally */
	align-items: center;
	/* Centers child vertically */

}
</style>
