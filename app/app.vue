<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="#000000" />
  <UApp :toaster="{ position: 'top-center' }">
    <NuxtPage />
  </UApp>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Nuxt templates',
  description:
    'Collection of UI templates, SaaS starter Kits, and fullstack projects for Nuxt',
})
</script>
