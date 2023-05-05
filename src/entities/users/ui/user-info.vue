<script setup lang="ts">
import { BListGroup, BListGroupItem } from 'bootstrap-vue';
import { computed } from 'vue';
import { hexToNumberString } from 'web3-utils';
import { ROLES_NAMES } from '@/shared/config';
import type { User } from '../types';

export interface UserInfoProps extends User {}

const props = defineProps<UserInfoProps>();

const showShop = computed(() => {
	return !!props.shopAddress && hexToNumberString(props.shopAddress) !== '0';
});
</script>
<template>
	<b-list-group tag="dl" :class="$style.list" flush>
		<b-list-group-item tag="dt">Логин</b-list-group-item>
		<b-list-group-item tag="dd">{{ login }}</b-list-group-item>
		<b-list-group-item tag="dt">Адрес кошелька</b-list-group-item>
		<b-list-group-item tag="dd">{{ address }}</b-list-group-item>
		<b-list-group-item tag="dt">Имя</b-list-group-item>
		<b-list-group-item tag="dd">{{ name }}</b-list-group-item>
		<b-list-group-item tag="dt">Роль</b-list-group-item>
		<b-list-group-item tag="dd">{{ ROLES_NAMES[role] }}</b-list-group-item>
		<template v-if="showShop">
			<b-list-group-item tag="dt">Магазин</b-list-group-item>
			<b-list-group-item tag="dd">{{ shopAddress }}</b-list-group-item>
		</template>
		<slot></slot>
	</b-list-group>
</template>

<style module>
.list {
	display: grid;
	grid-template-columns: max-content 1fr;
	grid-auto-rows: max-content;
	row-gap: 1em;
}
</style>
