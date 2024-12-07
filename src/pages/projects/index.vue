<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'

const projects = ref()
  ; (async () => {
    const { data, error } = await supabase.from('projects').select()

    if (error) console.error(error)

    projects.value = data

    console.log('Projects : ', projects.value)
  })()
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <router-link to="/">Go to Home</router-link>
    {{ projects }}
  </div>
</template>
