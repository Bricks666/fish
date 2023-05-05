<script setup lang="ts">
import { BCardGroup } from 'bootstrap-vue';
import { computed, onMounted } from 'vue';
import { PageHeader } from '@/widgets/page';
import { requestsModel, TemplateRequestCard } from '@/entities/requests';
import { authUserModel } from '@/entities/users';
import { MainLayout } from '@/shared/ui';

const authUser = authUserModel.useStore();
const requests = requestsModel.useStore();

const filtered = computed(() => {
	return requests.result.filter((request) => request.sender === authUser.result.address);
});

onMounted(requests.start);
</script>
<template>
	<main-layout>
		<template #header>
			<page-header />
		</template>
		<h1 class="h3">Мои запросы</h1>
		<b-card-group>
			<template-request-card v-for="request in filtered" :key="request.id" v-bind="request" />
		</b-card-group>
	</main-layout>
</template>
