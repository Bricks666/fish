<script setup lang="ts">
import { computed } from 'vue';
import { AnswerRequest } from '@/features/requests';
import { TemplateRequestCard, type TemplateRequestCardProps } from '@/entities/requests';
import { authUserModel } from '@/entities/users';
import { ROLES, STATUSES } from '@/shared/config';

export interface RequestCardProps extends TemplateRequestCardProps {}

const props = defineProps<RequestCardProps>();
const authUser = authUserModel.useStore();

const showActions = computed(
	() => props.status !== STATUSES.WAITING && authUser.result.role === ROLES.ADMIN
);
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
		<template v-if="showActions" #footer>
			<answer-request :id="$props.id" />
		</template>
	</template-request-card>
</template>
