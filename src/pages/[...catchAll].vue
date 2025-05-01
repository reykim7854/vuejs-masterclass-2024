<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'
import { userErrorStore } from '@/stores/error';

userErrorStore().setError()
</script>

<template>
  <AppErrorPage />
</template>
