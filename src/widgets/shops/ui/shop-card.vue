<script setup lang="ts">
import { computed } from 'vue';
import { BeSalesman } from '@/features/requests';
import { TemplateShopCard, type TemplateShopCardProps } from '@/entities/shops';
import { authUserModel } from '@/entities/users';
import { ROLES } from '@/shared/config';

export interface ShopCardProps extends TemplateShopCardProps {}

defineProps<ShopCardProps>();

const authUser = authUserModel.useStore();

const isAdmin = computed(() => authUser.result.role === ROLES.ADMIN);
const isUser = computed(() => authUser.result.role === ROLES.USER);

const userCanMakeRequest = computed(() => isUser.value && !authUser.result.onRequest);
</script>
<template>
	<template-shop-card
		:id="$props.id"
		:city="$props.city"
		:address="$props.address"
		:name="$props.name">
		<template v-if="userCanMakeRequest">
			<be-salesman :shop-address="$props.address" />
		</template>
		<template v-else-if="isAdmin">
			<be-salesman :shop-address="$props.address" />
		</template>
	</template-shop-card>
</template>
