<script setup lang="ts">
import { projectsQuery } from '@/utils/supaQueries.js'
import type { Projects } from '@/utils/supaQueries.js'
import { columns } from '@/utils/tableColumns/projectsColumns'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)
const getProjects = async () => {
  const { data, error } = await projectsQuery

  if (error) console.error(error)

  projects.value = data
}

await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
