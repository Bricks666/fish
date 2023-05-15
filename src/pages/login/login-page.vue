<script setup lang="ts">
import { BCard, BLink } from 'bootstrap-vue';
import { onMounted } from 'vue';
import { LoginForm } from '@/features/auth';
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
			<p :class="$style.subtitle">
				Еще нет аккаунта? <b-link :to="URLS.registration">Зарегистрироваться</b-link>
			</p>
		</div>
		<b-card :class="$style.card">
			<login-form />
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
