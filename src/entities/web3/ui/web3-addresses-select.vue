<script setup lang="ts">
import { BFormSelect } from 'bootstrap-vue';
import type { Address } from '@/shared/types';
import { addressesStore } from '../models';

export interface Web3AddressesSelectProps {
	readonly modelValue: Address;
}

defineProps<Web3AddressesSelectProps>();
const emit = defineEmits(['update:modelValue']);

const addresses = addressesStore.useStore();

const onChange = (value: string) => {
	emit('update:modelValue', value);
};
</script>
<template>
	<b-form-select :value="modelValue" @change="onChange">
		<option v-for="address in addresses.result" :key="address" :value="address">
			{{ address }}
		</option>
	</b-form-select>
</template>
