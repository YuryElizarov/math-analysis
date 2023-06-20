<template>
<div class="card">
  <slot></slot>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.card {
  padding: 25px;
  background: var(--c-card);
  box-shadow: 0 0 100px rgba(21, 22, 27, 0.03);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
