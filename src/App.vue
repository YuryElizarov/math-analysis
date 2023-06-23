<script setup lang="ts">
import AppNavbar from './UI/AppNavbar.vue'
</script>

<template>
  <AppNavbar />
  <RouterView v-slot="{ Component }">
    <KeepAlive include="FormulasView,TermsView">
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>
