<script setup lang="ts">
import type { TheoryExtra } from "@/utils/interfaces";
import { computed, ref } from "vue";
import AppCard from "./AppCard.vue";
import AppSelectToggle from "./AppSelectToggle.vue";
import AppDivider from "./AppDivider.vue";

const props = defineProps<{
    id: string,
    title: string,
    extras: Array<TheoryExtra>
}>()

const selectToggleOptions = computed(() => 
    props.extras.map(extra => ({
        id: extra.id,
        name: extra.name
    }))
);

const selectedOption = ref<string | null>(null);
</script>

<template>
    <AppCard class="card">
        <h5 :id="id"><a :href="'#' + id">{{ title }}</a></h5>
        <slot />

        <AppSelectToggle class="select-toggle" v-if="selectToggleOptions.length > 0" :options="selectToggleOptions" v-model="selectedOption" />
        <AppDivider class="divider" v-if="selectedOption" />
        <span class="text">
            <component v-for="extra in extras" :key="extra.id" v-show="selectedOption === extra.id"
                :is="extra.content" />
        </span>
    </AppCard>
</template>

<style scoped lang="scss">
.card {
    max-width: 900px;
}

h5 {
    position: relative;
    margin-bottom: 5px;
    scroll-margin-top: 80px;

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
        left: -14px;
        font-weight: inherit;
    }
}

.select-toggle {
    margin-top: 10px;
}

.card-title {
    position: relative;
    cursor: pointer;
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

.text {
    line-height: 1.5;

    :deep(h6) {
        margin-bottom: 5px;
    }

    :deep(img) {
        display: block;
        margin: 0 auto;
    }

    :deep(li:not(:last-child)) {
        margin-bottom: 3px;
    }
}
</style>