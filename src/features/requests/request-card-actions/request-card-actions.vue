<script setup lang="ts">
import { BButton } from 'bootstrap-vue';
import { acceptModel, cancelModel } from './models';

export interface RequestCardActionsProps {
	readonly id: number;
	readonly isFinish: boolean;
}

const props = defineProps<RequestCardActionsProps>();
const accept = acceptModel.useStore();
const cancel = cancelModel.useStore();

const onAccept = () => {
	accept.start(props.id);
};

const onCancel = () => {
	cancel.start(props.id);
};
</script>

<template>
	<template v-if="!isFinish">
		<b-button variant="success" @click="onAccept">Принять</b-button>
		<b-button variant="danger" @click="onCancel">Отклонить</b-button>
	</template>
</template>
