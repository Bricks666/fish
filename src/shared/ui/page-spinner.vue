<script setup lang="ts">
import { BSpinner } from 'bootstrap-vue';
import PageCenter from './page-center.vue';
</script>
<template>
	<page-center>
		<b-spinner variant="primary" style="width: 5rem; height: 5rem" />
		<slot></slot>
	</page-center>
</template>
