<script setup lang="ts">
import { RegistrationForm } from '@/features/auth';
import { URLS } from '@/shared/config';
import { AuthLayout } from '@/shared/ui';
import { BCard, BLink } from 'bootstrap-vue';
import { RouterLink } from 'vue-router';
</script>
<template>
	<auth-layout>
		<b-card :class="$style.card">
			<h1 class="h3" :class="$style.title">Регистрация</h1>
			<registration-form>
				<template #extra-controls>
					<router-link v-slot="{ href, navigate }" :to="URLS.login" custom>
						<b-link :href="href" @click="navigate"> Войти </b-link></router-link
					>
				</template>
			</registration-form>
		</b-card>
	</auth-layout>
</template>

<style module>
.card {
	width: min(450px, 100%);
}
.title {
	text-align: center;
}
</style>
