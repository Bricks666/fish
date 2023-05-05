<script setup lang="ts">
import { BContainer } from 'bootstrap-vue';
</script>

<template>
	<b-container :class="$style.layout">
		<slot name="header"></slot>
		<main :class="$style.main">
			<slot>Missed container content</slot>
		</main>
	</b-container>
</template>

<style module>
.layout {
	display: grid;
	gap: 1em;

	height: 100%;
}
.main {
	display: grid;
	gap: 1em;
}
</style>
