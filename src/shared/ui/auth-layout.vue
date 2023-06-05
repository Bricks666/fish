<script setup lang="ts">
import MainLayout from './main-layout.vue';
import PageCenter from './page-center.vue';
</script>

<template>
	<main-layout>
		<page-center>
			<slot> </slot>
		</page-center>
	</main-layout>
</template>
