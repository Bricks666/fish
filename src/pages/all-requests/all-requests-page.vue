<script setup lang="ts">
import { BCardGroup } from 'bootstrap-vue';
import { onMounted } from 'vue';
import { PageHeader } from '@/widgets/page';
import { requestsModel, TemplateRequestCard } from '@/entities/requests';
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
			<template-request-card
				v-for="request in requests.result"
				:key="request.id"
				v-bind="request" />
		</b-card-group>
	</main-layout>
</template>
