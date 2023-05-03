<script setup lang="ts">
import { BContainer } from 'bootstrap-vue';
</script>

<template>
	<b-container :class="$style.layout">
		<slot>Missed container content</slot>
	</b-container>
</template>

<style module>
.layout {
	display: grid;

	height: 100%;
}
</style>
