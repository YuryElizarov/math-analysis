<template>
  <div class="step">
    <div class="step--number">{{props.index + 1}}</div>
    <div class="step--content">
      <h3 class="step--title">{{stepData.title}}</h3>
      <RouterLink v-if="props.step.tableDerivative?.link || stepData.link" :to="`/formulas#${props.step.tableDerivative?.link || stepData.link}`" class="gray-wrapper">$${{ props.step.tableDerivative?.latex || stepData.formula }}$$</RouterLink>
      <p v-else class="gray-wrapper">$${{ props.step.tableDerivative?.latex || stepData.formula }}$$</p>
      <p>$${{props.step.formula}}$$</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {StepProp, steps} from "@/config/steps";
import {computed} from "vue";
// import {parse} from 'mathjs'

const props = defineProps<{ step: StepProp, index: number }>()
const stepData = computed(() => steps[props.step.step])
</script>

<style scoped lang="scss">
.step {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
}
.step--number {
  display: flex;
  padding: 3px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 24px;
  min-width: 23px;
  height: 23px;
  background: var(--c-step-bg);
  color: #247AFB;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
}

.step--content {
  padding-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  font-size: 14px;
}
.step--title {
  color: var(--c-text);
}
</style>
