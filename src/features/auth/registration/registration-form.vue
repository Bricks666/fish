<script setup lang="ts">
import { BForm, BFormInput, BFormGroup, BButton } from 'bootstrap-vue';
import { reactive, unref } from 'vue';
import { authUserModel } from '@/entities/users';
import { Web3AddressesSelect } from '@/entities/web3';
import type { RegistrationParams } from '@/shared/api';

const { registration, } = authUserModel.useAuthUserStore();
const form = reactive<RegistrationParams>({ address: '', name: '', login: '', });
const onSubmit = (evt: SubmitEvent) => {
	registration(unref(form));
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
		<div :class="$style.controls">
			<slot name="extra-controls"></slot>
			<b-button variant="primary" type="submit">Регистрация</b-button>
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
