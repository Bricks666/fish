<script setup lang="ts">
import { BNav } from 'bootstrap-vue';
import { computed, toRef, watch } from 'vue';
import { authUserModel } from '@/entities/users';
import { navigationItems } from '../config';
import { filterItemsByRole, isDropdownNavigation, isSimpleNavigation } from '../lib';
import DropdownNavigationItem from './dropdown-navigation-item.vue';
import SimpleNavigationItem from './simple-navigation-item.vue';

const authUser = authUserModel.useStore();
const role = toRef(authUser.result, 'role');

const items = computed(() => filterItemsByRole(navigationItems, role.value));
</script>
<template>
	<b-nav>
		<template v-for="item in items" :key="item.label">
			<simple-navigation-item
				v-if="isSimpleNavigation(item)"
				:label="item.label"
				:path="item.path" />
			<dropdown-navigation-item
				v-else-if="isDropdownNavigation(item)"
				:label="item.label"
				:children="item.children" />
		</template>
	</b-nav>
</template>
