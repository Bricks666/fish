<script setup lang="ts">
import { BSpinner } from 'bootstrap-vue';
import { RouterView } from 'vue-router';
</script>

<template>
	<suspense>
		<router-view />
		<template #fallback>
			<b-spinner variant="primary" />
		</template>
	</suspense>
</template>
