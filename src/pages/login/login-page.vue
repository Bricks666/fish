<script setup lang="ts">
import { LoginForm } from '@/features/auth';
import { useWeb3AddressesStore } from '@/entities/web3';
import { onMounted } from 'vue';

const { start } = useWeb3AddressesStore();

onMounted(start);
</script>
<template><login-form /></template>
