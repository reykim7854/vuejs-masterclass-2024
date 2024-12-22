<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types.ts'

const projects = ref<Tables<'projects'>[] | null>(null)
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
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>
