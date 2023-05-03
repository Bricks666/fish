<script setup lang="ts">
import { LoginForm } from '@/features/auth';
import { useWeb3AddressesStore } from '@/entities/web3';
import { AuthLayout } from '@/shared/ui';
import { onMounted } from 'vue';
import { BCard, BLink } from 'bootstrap-vue';
import { RouterLink } from 'vue-router';
import { URLS } from '@/shared/config';

const { start } = useWeb3AddressesStore();

onMounted(start);
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
