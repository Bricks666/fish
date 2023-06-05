<script setup lang="ts">
import { PageCenter } from '@/shared/ui';

export interface PageErrorProps {
	readonly text: string;
	readonly subtext?: string;
}

defineProps<PageErrorProps>();
</script>
<template>
	<page-center>
		<p class="h2 text-center">{{ text }}</p>
		<p v-if="subtext" class="text-center">{{ subtext }}</p>
		<slot></slot>
	</page-center>
</template>
