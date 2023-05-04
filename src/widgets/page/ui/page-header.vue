<script setup lang="ts">
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse } from 'bootstrap-vue';
import { PageNavigation } from '@/features/page';
</script>
<template>
	<b-navbar tag="header">
		<b-navbar-brand>Golden fish</b-navbar-brand>
		<b-navbar-toggle target="navbar-collapse"></b-navbar-toggle>
		<b-collapse id="navbar-collapse" is-nav>
			<page-navigation />
		</b-collapse>
	</b-navbar>
</template>
