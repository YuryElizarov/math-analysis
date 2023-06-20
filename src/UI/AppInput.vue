<template>
  <input type="text" class="input"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
.input {
  border: none;
  background: var(--c-input);
  padding: 3.5px 8px;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--c-text);
  width: unset;
  outline: none;
}
</style>
