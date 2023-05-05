<script setup lang="ts">
import { BButton, BFormGroup, BForm, BFormInput } from 'bootstrap-vue';
import { reactive, unref } from 'vue';
import { Web3AddressesSelect } from '@/entities/web3';
import type { LoginParams } from '@/shared/api';
import { useStore } from './model';

const login = useStore();
const form = reactive<LoginParams>({ address: '', password: '', login: '', });
const onSubmit = () => {
	login.start(unref(form));
};
</script>
<template>
	<b-form @submit.prevent="onSubmit">
		<b-form-group label="Адрес кошелька">
			<web3-addresses-select v-model="form.address" />
		</b-form-group>
		<b-form-group label="Логин">
			<b-form-input v-model="form.login" />
		</b-form-group>
		<b-form-group label="Пароль">
			<b-form-input v-model="form.password" type="password" />
		</b-form-group>
		<div :class="$style.controls">
			<slot name="extra-controls"></slot>
			<b-button type="submit" variant="primary" :disabled="login.loading">Войти</b-button>
		</div>
	</b-form>
</template>
<style module>
.controls {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1em;
}
</style>
