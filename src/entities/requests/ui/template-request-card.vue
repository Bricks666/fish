<script setup lang="ts">
import { BCard, BCardTitle, BCardText } from 'bootstrap-vue';
import { computed } from 'vue';
import { STATUSES_NAMES, REQUEST_TYPES, REQUEST_TYPE_NAMES, ROLES_NAMES } from '@/shared/config';
import type { Request } from '../types';

export interface TemplateRequestCardProps extends Request {}

const props = defineProps<TemplateRequestCardProps>();

const hasShopAddress = computed(() => props.type === REQUEST_TYPES.TO_BUYER);
</script>

<template>
	<b-card>
		<template #header>
			<b-card-title>Заявка {{ id }}</b-card-title>
		</template>
		<b-card-text> Тип: {{ REQUEST_TYPE_NAMES[type] }} </b-card-text>
		<b-card-text> Отправитель: {{ sender }} </b-card-text>
		<b-card-text> Текущая роль отправителя: {{ ROLES_NAMES[currentRole] }} </b-card-text>
		<b-card-text> Желаемая роль отправителя: {{ ROLES_NAMES[newRole] }} </b-card-text>
		<b-card-text> Текущий статус: {{ STATUSES_NAMES[status] }} </b-card-text>
		<b-card-text v-if="hasShopAddress">{{ shopAddress }}</b-card-text>
	</b-card>
</template>
