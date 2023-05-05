<script setup lang="ts">
import { BCard, BCardText } from 'bootstrap-vue';
import type { Shop } from '../types';

export interface TemplateShopCardProps extends Shop {}
defineProps<TemplateShopCardProps>();
</script>
<template>
	<b-card>
		<template #header>
			<h2 class="h4">{{ name }}</h2>
		</template>
		<b-card-text>Город {{ city }}</b-card-text>
		<template #footer>
			<slot name="actions"></slot>
		</template>
	</b-card>
</template>
