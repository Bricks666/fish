<script setup lang="ts">
import { BButton } from 'bootstrap-vue';
import { acceptModel, cancelModel } from './models';

export interface AnswerRequestProps {
	readonly id: number;
}

const props = defineProps<AnswerRequestProps>();
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
	<b-button variant="success" @click="onAccept">Принять</b-button>
	<b-button variant="danger" @click="onCancel">Отклонить</b-button>
</template>
