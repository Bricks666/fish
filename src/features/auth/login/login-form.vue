<script setup lang="ts">
import { BButton, BFormGroup, BForm, BFormInput } from 'bootstrap-vue';
import { reactive } from 'vue';
import { Web3AddressesSelect } from '@/entities/web3';

const formState = reactive({ address: '', password: '' });
const onSubmit = (...args: any[]) => {
	console.log(...args);
};
</script>
<template>
	<BForm @submit="onSubmit">
		<BFormGroup label="Адрес кошелька">
			<Web3AddressesSelect v-model="formState.address" />
		</BFormGroup>
		<BFormGroup label="Пароль">
			<BFormInput v-model="formState.password" type="password" />
		</BFormGroup>
		<BButton type="submit" variant="primary">Войти</BButton>
	</BForm>
</template>

<style module>
</style>
