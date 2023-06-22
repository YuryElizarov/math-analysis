<script setup lang="ts">
import type { SelectToggleOption } from '@/utils/interfaces';

const props = defineProps<{
    options: Array<SelectToggleOption>,
    modelValue: string | null
}>()

defineEmits<{
    "update:modelValue": [optionId: string | null]
}>();

function update(optionId: string) {
    return optionId === props.modelValue ? null : optionId;
}
</script>

<template>
    <div class="container">
        <button :class="{selected: option.id === modelValue}" v-for="option in options" :key="option.id" @click="$emit('update:modelValue', update(option.id))">
            {{ option.name }}
        </button>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

button {
    padding: 8px 15px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: rgba(var(--main-500-rgb), 0.15);
    font-weight: 600;
    font-size: 14px;
    color: var(--main-500);

    &:hover {
        background-color: rgba(var(--main-500-rgb), 0.25)
    }

    &:active {
        background-color: rgba(var(--main-500-rgb), 0.35);
    }

    &.selected {
        background-color: var(--main-500);
        color: var(--base-100);

        &:hover {
            background-color: var(--main-400);
        }

        &:active {
            background-color: var(--main-600);
        }
    }
}
</style>