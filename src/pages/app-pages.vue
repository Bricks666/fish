<script setup lang="ts">
import { RouterView } from 'vue-router';
import { PageSpinner } from '@/shared/ui';
</script>

<template>
	<suspense>
		<router-view />
		<template #fallback>
			<page-spinner />
		</template>
	</suspense>
</template>
