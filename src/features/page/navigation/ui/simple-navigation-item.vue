<script setup lang="ts">
import { BNavItem } from 'bootstrap-vue';
import { RouterLink } from 'vue-router';

export interface SimpleNavigationItemProps {
	readonly label: string;
	readonly path: string;
}

defineProps<SimpleNavigationItemProps>();
</script>
<template>
	<b-nav-item :tag="RouterLink" :to="path">{{ label }} </b-nav-item>
</template>
