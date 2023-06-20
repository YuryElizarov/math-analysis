<template>
  <p class="text">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.text {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--c-text);
}
</style>
