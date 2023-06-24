<template>
  <div class="step">
    <div class="step--number">{{props.index + 1}}</div>
    <div class="step--content">
      <h3 class="step--title">{{stepData.title}}</h3>
<!--      <p class="gray-wrapper"><math-jax latex="\left(a^{ x}\right)_{x}^{\prime}=a^{x}\cdot\ln{ x}"></math-jax></p>-->
      <p class="gray-wrapper"><math-jax :latex="props.step.tableDerivative || stepData.formula"></math-jax></p>
      <p><math-jax :latex="props.step.formula"></math-jax></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {StepProp, steps} from "@/config/steps";
// import {parse} from 'mathjs'

const props = defineProps<{ step: StepProp, index: number }>()
const stepData = steps[props.step.step]
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
