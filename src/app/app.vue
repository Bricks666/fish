<script setup lang="ts">
import { BButton } from 'bootstrap-vue';
import { RouterLink } from 'vue-router';
import { AppPages } from '@/pages';
import { URLS } from '@/shared/config';
</script>

<template>
	Hello world!
	<RouterLink v-slot="{ href, navigate }" :to="URLS.login" custom>
		<BButton variant="primary" :href="href" @click="navigate">Login</BButton>
	</RouterLink>
	<AppPages />
</template>

<style scoped></style>
