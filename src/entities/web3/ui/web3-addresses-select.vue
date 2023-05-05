<script setup lang="ts">
import { BFormSelect } from 'bootstrap-vue';
import type { Address } from '@/shared/types';
import { addressesStore } from '../models';

export interface Web3AddressesSelectProps {
	readonly modelValue: Address;
}

defineProps<Web3AddressesSelectProps>();
defineEmits(['update:modelValue']);

const addresses = addressesStore.useStore();
</script>
<template>
	<BFormSelect :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
		<option v-for="address in addresses.result" :key="address" :value="address">
			{{ address }}
		</option>
	</BFormSelect>
</template>
