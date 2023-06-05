<script setup lang="ts"></script>
<template>
	<div :class="$style.wrapper">
		<slot></slot>
	</div>
</template>
<style module>
.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1em;

	min-height: 100vh;
}
</style>
