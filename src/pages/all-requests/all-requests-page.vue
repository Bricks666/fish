<script setup lang="ts">
import { BCardGroup } from 'bootstrap-vue';
import { onMounted } from 'vue';
import { PageHeader } from '@/widgets/page';
import { RequestCard } from '@/widgets/requests';
import { requestsModel } from '@/entities/requests';
import { MainLayout } from '@/shared/ui';

const requests = requestsModel.useStore();

onMounted(requests.start);
</script>
<template>
	<main-layout>
		<template #header>
			<page-header />
		</template>
		<h1 class="h3">Все запросы</h1>
		<b-card-group>
			<request-card v-for="request in requests.result" v-bind="request" :key="request.id" />
		</b-card-group>
	</main-layout>
</template>
