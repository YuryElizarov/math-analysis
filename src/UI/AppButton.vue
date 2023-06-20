<template>
<button class="button" @click="onAction"><slot></slot></button>
</template>

<script setup lang="ts">
const emit = defineEmits(['action'])
const onAction = () => emit('action')
</script>

<style scoped lang="scss">
.button {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--c-button-text);
  background: var(--c-button);
  border: none;
  outline: none;
  padding: 15px 15px;
  cursor: pointer;
  &:hover {
    background: var(--c-button-hover);
  }
  &:active {
    background: var(--c-button-active);
  }
  &:disabled {
    background: var(--c-button-disabled);
    cursor: not-allowed;
  }
}
</style>
