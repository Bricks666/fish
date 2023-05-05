<script setup lang="ts">
import { BButton } from 'bootstrap-vue';
import { REQUEST_TYPES } from '@/shared/config';
import { useStore } from '../model';

const createShop = useStore();

const onClick = () => {
	createShop.start({
		type: REQUEST_TYPES.TO_USER,
	});
};
</script>
<template>
	<b-button :disabled="createShop.loading" @click="onClick">Быть пользователем</b-button>
</template>
