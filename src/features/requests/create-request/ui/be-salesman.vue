<script setup lang="ts">
import { BButton } from 'bootstrap-vue';
import { REQUEST_TYPES } from '@/shared/config';
import type { Address } from '@/shared/types';
import { useStore } from '../model';

export interface BeSalesmanProps {
	readonly shopAddress: Address;
}

const props = defineProps<BeSalesmanProps>();

const createShop = useStore();

const onClick = () => {
	createShop.start({
		type: REQUEST_TYPES.TO_SALESMAN,
		shopAddress: props.shopAddress,
	});
};
</script>
<template>
	<b-button :disabled="createShop.loading" @click="onClick">Быть продавцом</b-button>
</template>
