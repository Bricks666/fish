<script setup lang="ts">
import { BCard, BLink } from 'bootstrap-vue';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { LoginForm } from '@/features/auth';
import { addressesStore } from '@/entities/web3';
import { URLS } from '@/shared/config';
import { AuthLayout } from '@/shared/ui';

const addresses = addressesStore.useStore();

onMounted(addresses.start);
</script>
<template>
	<auth-layout>
		<b-card :class="$style.card">
			<h1 class="h3" :class="$style.title">Вход</h1>
			<login-form>
				<template #extra-controls>
					<router-link v-slot="{ href, navigate }" :to="URLS.registration" custom>
						<b-link :href="href" @click="navigate"> Регистрация </b-link></router-link
					>
				</template>
			</login-form>
		</b-card>
	</auth-layout>
</template>

<style module>
.card {
	width: min(100%, 450px);
}
.title {
	text-align: center;
}
</style>
