<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
	isLogged: Boolean
})
</script>

<template>
	<a>
		<span v-if="isLogged">Profile</span>
		<span v-else>Register</span>
	</a>
</template>

<style scoped>
a {
	background-color: black;
	border-radius: 8px;

	width: 70px;

	padding: 2px;

	text-align: center;
}

a>span {
	color: white;
}
</style>

