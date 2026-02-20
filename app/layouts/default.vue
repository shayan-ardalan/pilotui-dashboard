<template>
  <CLDashboardShell :brand-title="config.siteName" :brand-logo="config.logoPath">
    <template #sidebar-menu>
      <CLSidebarMenu
        :title="config.siteName"
        :brand-logo="config.logoPath"
        :items="menuItems"
        @item-click="handleMenuClick"
      />
    </template>

    <template #content>
      <slot />
    </template>
  </CLDashboardShell>
</template>

<script setup lang="ts">
//  منو و قالب داشبورد 
const router = useRouter()
const config = usePanelConfig()
const menuItems = getMenuItems()

// وقتی روی منو کلیک میکنه بره همون صفحه
function handleMenuClick(item: { to?: string }) {
  if (item?.to) {
    router.push(item.to)
  }
}
</script>
