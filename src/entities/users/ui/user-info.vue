<script setup lang="ts">
import { BListGroup, BListGroupItem } from 'bootstrap-vue';
import { computed } from 'vue';
import { hexToNumberString } from 'web3-utils';
import type { User } from '@/entities/users';
import { ROLES_NAME } from '@/shared/config';

export interface UserInfoProps extends User {}

const props = defineProps<UserInfoProps>();

const showShop = computed(() => {
	return !!props.shopAddress && hexToNumberString(props.shopAddress) !== '0';
});
</script>
<template>
	<b-list-group is="dl" :class="$style.list">
		<b-list-group-item is="dt">Логин</b-list-group-item>
		<b-list-group-item is="dd">{{ login }}</b-list-group-item>
		<b-list-group-item is="dt">Адрес кошелька</b-list-group-item>
		<b-list-group-item is="dd">{{ address }}</b-list-group-item>
		<b-list-group-item is="dt">Имя</b-list-group-item>
		<b-list-group-item is="dd">{{ name }}</b-list-group-item>
		<b-list-group-item is="dt">Роль</b-list-group-item>
		<b-list-group-item is="dd">{{ ROLES_NAME[role] }}</b-list-group-item>
		<template v-if="showShop">
			<b-list-group-item is="dt">Магазин</b-list-group-item>
			<b-list-group-item is="dd">{{ shopAddress }}</b-list-group-item>
		</template>
		<slot></slot>
	</b-list-group>
</template>

<style module>
.list {
	display: grid;
	grid-template-columns: max-content 1fr;
	row-gap: 1em;
}
</style>
