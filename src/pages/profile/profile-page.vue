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
		<h1 class="h3">Профиль пользователя</h1>
		<b-card>
			<template #header>
				<h2 class="h4">Информация о пользователе</h2>
			</template>
			<profile-info />
		</b-card>
	</main-layout>
</template>
