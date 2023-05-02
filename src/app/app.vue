<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { AppPages } from '@/pages';
import { URLS } from '@/shared/config';
</script>

<template>
	Hello world!
	<router-link v-slot="{ href, navigate }" :to="URLS.shops" custom>
		<a-button type="link" :href="href" @click="navigate">Shops</a-button>
	</router-link>
	<app-pages />
</template>

<style scoped>
@import url('ant-design-vue/dist/antd.css');
</style>
