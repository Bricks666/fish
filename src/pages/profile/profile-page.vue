<script setup lang="ts">
import { BCard } from 'bootstrap-vue';
import { PageHeader } from '@/widgets/page';
import { ProfileInfo } from '@/widgets/users';
import { MainLayout } from '@/shared/ui';
</script>
<template>
	<main-layout>
		<template #header>
			<page-header />
		</template>
		<b-card>
			<template #header>
				<h1 class="h3">Профиль пользователя</h1>
			</template>
			<profile-info />
		</b-card>
	</main-layout>
</template>
