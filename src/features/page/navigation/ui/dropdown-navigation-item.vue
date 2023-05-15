<script setup lang="ts">
import { BNavItemDropdown, BDropdownItem } from 'bootstrap-vue';
import { RouterLink } from 'vue-router';

interface DropdownChild {
	readonly label: string;
	readonly path: string;
}

export interface DropdownNavigationItemProps {
	readonly children: Array<DropdownChild>;
	readonly label: string;
}

defineProps<DropdownNavigationItemProps>();
</script>
<template>
	<b-nav-item-dropdown :text="label">
		<b-dropdown-item
			v-for="child in children"
			:key="child.path"
			:to="child.path"
			:tag="RouterLink"
			>{{ child.label }}</b-dropdown-item
		>
	</b-nav-item-dropdown>
</template>
