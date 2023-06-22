<script setup lang="ts">
import type { SelectToggleOption, Formula } from "@/utils/interfaces";
import { computed, ref } from "vue";
import AppCard from "./AppCard.vue";
import AppSelectToggle from "./AppSelectToggle.vue";
import AppDivider from "./AppDivider.vue";

const props = defineProps<{
    formula: Formula
}>()

const formulaOptions = computed(() => {
    const options: Array<SelectToggleOption> = []
    for (const extra of props.formula.extras)
        options.push({ id: extra.id, name: extra.name });
    return options;
})

const selectedOption = ref<string | null>(null);
</script>

<template>
    <AppCard :style="{ padding: '15px 25px' }">
        <h5 class="formula-name" :id="formula.id"><a :href="'#' + formula.id">{{ formula.name }}</a></h5>
        <MathJax class="latex" :latex="formula.latex" />
        <AppSelectToggle v-if="formulaOptions.length > 0" :options="formulaOptions" v-model="selectedOption" />
        <AppDivider class="divider" v-if="selectedOption" />
        <span class="text">
            <component v-for="extra in formula.extras" :key="extra.id" v-show="selectedOption === extra.id"
                :is="extra.content" />
        </span>
    </AppCard>
</template>

<style scoped lang="scss">
.formula-name {
    position: relative;
    cursor: pointer;

    &:hover {
        &:before {
            opacity: 1;
        }
    }

    &:before {
        content: "#";
        transition: opacity 250ms;
        opacity: 0;
        position: absolute;
        left: -12px;
        font-weight: inherit;
    }
}

.latex {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;

    margin: 10px 0;

    background: var(--base-200);
    border-radius: 6px;
}

.divider {
    margin: 10px 0;
}

a {
    color: inherit;
    text-decoration: inherit;
    font-size: inherit;
    font-weight: inherit;
}

.text :deep(h6){
    margin-bottom: 5px;
}
</style>