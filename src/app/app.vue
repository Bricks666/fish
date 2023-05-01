<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { AppPages } from '@/pages';
import { ShopCard } from '@/entities/shops';
import { URLS } from '@/shared/config';

const title = ref('Title');

setInterval(() => {
	title.value += '!';
}, 1000);

const styles = { 'background-color': 'red', };
</script>

<template>
	Hello world!
	<router-link v-slot="{ href, navigate }" :to="URLS.shops" custom>
		<a-button type="link" :href="href" @click="navigate">Shops</a-button>
	</router-link>
	<shop-card v-bind="{ title, style: styles }" />
	<app-pages />
</template>

<style scoped>
@import url('ant-design-vue/dist/antd.css');
</style>
