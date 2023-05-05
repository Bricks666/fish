<script setup lang="ts">
import { BCardGroup } from 'bootstrap-vue';
import { PageHeader } from '@/widgets/page';
import { ShopCard } from '@/widgets/shops';
import { shopsModel } from '@/entities/shops';
import { MainLayout } from '@/shared/ui';

const shops = shopsModel.useStore();
</script>
<template>
	<main-layout>
		<template #header>
			<page-header />
		</template>
		<h1 class="h3">Магазины</h1>
		<b-card-group deck>
			<shop-card v-for="shop in shops.result" v-bind="shop" :key="shop.id" />
		</b-card-group>
	</main-layout>
</template>
