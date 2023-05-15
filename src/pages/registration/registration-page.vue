<script setup lang="ts">
import { BCard, BLink } from 'bootstrap-vue';
import { onMounted } from 'vue';
import { RegistrationForm } from '@/features/auth';
import { addressesStore } from '@/entities/web3';
import { URLS } from '@/shared/config';
import { AuthLayout } from '@/shared/ui';

const addresses = addressesStore.useStore();

onMounted(addresses.start);
</script>
<template>
	<auth-layout>
		<div>
			<h1 class="h3" :class="$style.title">Добро пожаловать!</h1>
			<p :class="$style.subtitle">Уже есть аккаунт? <b-link :to="URLS.login">Войти</b-link></p>
		</div>
		<b-card :class="$style.card">
			<registration-form />
		</b-card>
	</auth-layout>
</template>

<style module>
.title {
	text-align: center;
}

.subtitle {
	text-align: center;
}

.card {
	width: min(calc(100vw - 32px), 450px);
}
</style>
