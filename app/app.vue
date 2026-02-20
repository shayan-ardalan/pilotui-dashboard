<template>
  <ClientOnly>
    <CLApp direction="rtl" color-scheme="light">
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </CLApp>
    <template #fallback>
      <div class="flex min-h-screen items-center justify-center bg-gray-50">
        <p class="text-gray-500">لطفا صبر کنید...</p>
      </div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const { siteName } = usePanelConfig()
useHead({
  htmlAttrs: { dir: 'rtl', lang: 'fa' },
  title: siteName
})
</script>
