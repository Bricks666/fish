<script setup lang="ts">
import MainLayout from './main-layout.vue';
</script>

<template>
	<main-layout :class="$style.layout">
		<slot> </slot>
	</main-layout>
</template>

<style module>
.layout {
	display: flex;
	align-items: center;
	justify-content: center;

	min-height: 100vh;
}
</style>
