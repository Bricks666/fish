<script setup lang="ts">
import { BButton } from 'bootstrap-vue';
import { REQUEST_TYPES } from '@/shared/config';
import { useStore } from '../model';

const createShop = useStore();

const onClick = () => {
	createShop.start({
		type: REQUEST_TYPES.TO_ADMIN,
	});
};
</script>
<template>
	<b-button :disabled="createShop.loading" @click="onClick">Быть администратором</b-button>
</template>
