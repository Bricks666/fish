<script setup lang="ts">
export interface ShopCardProps {
	readonly title: string;
}
defineProps<ShopCardProps>();
</script>
<template>
	<a-card style="background-color: green" >
		<template #title>{{ title }}</template>
	</a-card>
</template>
