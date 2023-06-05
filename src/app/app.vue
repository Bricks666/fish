<script setup lang="ts">
import { BButton } from 'bootstrap-vue';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { AppPages } from '@/pages';
import { PageError } from '@/widgets/page';
import { URLS } from '@/shared/config';
import { initContractModel } from '@/shared/models';
import { PageSpinner } from '@/shared/ui';

const initContract = initContractModel.useStore();

onMounted(initContract.start);
</script>

<template>
	<app-pages v-if="initContract.result" />
	<page-spinner v-else-if="initContract.loading" />
	<page-error
		v-else-if="!!initContract.error"
		text="Не удалось загрузить контракт"
		subtext="Мы постараемся исправить это как можно скорее">
		<b-button variant="primary" :to="URLS.login" :tag="RouterLink"> На форму входа </b-button>
	</page-error>
</template>

<style>
@import url('./styles/index.css');
</style>
