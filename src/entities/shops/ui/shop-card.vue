<script setup lang="ts">
import type { Shop } from '@/shared/api';

export interface ShopCardProps extends Shop {
}
defineProps<ShopCardProps>();
</script>
<template>
	<a-card style="background-color: green">
		<template #title>{{ name }}</template>
	</a-card>
</template>
