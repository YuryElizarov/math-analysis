<template>
  <div class="tabs">
    <AppText>{{ props.title }}</AppText>
    <div class="tabs-wrapper">
      <div class="tab" v-for="(item, index) in props.tabs" :class="{active: item === props.selectedTab}"  :key="index" @click="onSelect(item)">
        <AppText >{{ item }}</AppText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppText from "@/UI/AppText.vue";
const props = defineProps<{
  title: string
  tabs: string[],
  selectedTab: string
}>()
const emit = defineEmits<{
  select: [tab: string]
}>()
const onSelect = (tab: string) => emit('select', tab)
</script>

<style scoped lang="scss">
.tabs {

}

.tabs-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px;
  gap: 5px;
  background: var(--c-input);
  border-radius: 9px;
  margin-top: 5px;
  width: fit-content;
}

.tab {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  gap: 10px;
  background: var(--c-input);
  border-radius: 6px;
  cursor: pointer;
  .text {
    color: var(--c-inactive);
  }
  &.active {
    background: var(--c-card);
    .text {
      color: var(--c-text);
    }
  }
  &:hover {
    background: var(--c-input-hover);
    .text {
      color: var(--c-text);
    }
    &.active {
      background: var(--c-card-hover);
    }
  }
  &:active {
    background: var(--c-input-active);
    .text {
      color: var(--c-text);
    }
    &.active {
      background: var(--c-card-active);
    }
  }
}
</style>
