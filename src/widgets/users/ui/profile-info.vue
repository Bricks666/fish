<script setup lang="ts">
import { BListGroupItem } from 'bootstrap-vue';
import { toRef } from 'vue';
import { fromWei } from 'web3-utils';
import { UserInfo, authUserModel } from '@/entities/users';
import { useBalance } from '@/entities/web3';

const profileStore = authUserModel.useAuthUserStore();
const address = toRef(profileStore.user, 'address');
const balance = useBalance(address);
</script>
<template>
	<user-info v-bind="profileStore.user">
		<b-list-group-item is="dt">Баланс</b-list-group-item>
		<b-list-group-item is="dd">{{ fromWei(balance, 'ether') }} ETH</b-list-group-item>
	</user-info>
</template>
