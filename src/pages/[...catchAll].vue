<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'

useErrorStore().setError({ error: 'page not found', customCode: 404 })
</script>

<template>
  <AppErrorPage />
</template>
