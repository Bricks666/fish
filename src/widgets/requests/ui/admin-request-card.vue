<script setup lang="ts">
import { computed } from 'vue';
import { RequestCardActions } from '@/features/requests';
import { TemplateRequestCard, type TemplateRequestCardProps } from '@/entities/requests';
import { STATUSES } from '@/shared/config';

export interface AdminRequestCardProps extends TemplateRequestCardProps {}

const props = defineProps<AdminRequestCardProps>();

const isFinished = computed(() => props.status !== STATUSES.WAITING);
</script>
<template>
	<template-request-card
		:id="$props.id"
		:current-role="$props.currentRole"
		:new-role="$props.newRole"
		:sender="$props.sender"
		:status="$props.status"
		:shop-address="$props.shopAddress"
		:type="$props.type">
		<template #footer>
			<request-card-actions :id="$props.id" :is-finish="isFinished" />
		</template>
	</template-request-card>
</template>
