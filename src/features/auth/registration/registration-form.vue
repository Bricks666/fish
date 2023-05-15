<script setup lang="ts">
import { BForm, BFormInput, BFormGroup, BButton } from 'bootstrap-vue';
import { reactive, unref } from 'vue';
import { Web3AddressesSelect } from '@/entities/web3';
import type { RegistrationParams } from '@/shared/api';
import { useStore } from './model';

const registration = useStore();
const form = reactive<RegistrationParams>({ address: '', name: '', login: '', });
const onSubmit = (evt: any) => {
	evt?.preventDefault();
	registration.start(unref(form));
};
</script>

<template>
	<b-form @submit="onSubmit">
		<b-form-group label="Адрес кошелька">
			<web3-addresses-select v-model="form.address" />
		</b-form-group>
		<b-form-group label="Логин">
			<b-form-input v-model="form.login" />
		</b-form-group>
		<b-form-group label="Имя">
			<b-form-input v-model="form.name" />
		</b-form-group>
		<b-button variant="primary" type="submit" :disabled="registration.loading" block
			>Зарегистрироваться</b-button
		>
	</b-form>
</template>
