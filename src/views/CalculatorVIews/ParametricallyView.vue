<template>
  <div class="input-block">
    <AppText>Дифференцировать по</AppText>
    <AppText>Функция</AppText>
    <div class="variable-block">
      <AppText>x( t ) =
      </AppText>
    </div>
    <div class="math-block">
      <math-field class="math-field" id="mfX" ref="mfX" @input="changeFuncX(mfX.value)">
        <slot></slot>
      </math-field>
    </div>
    <div class="variable-block">
      <AppText>y( t ) =
      </AppText>
    </div>
    <div class="math-block">
      <math-field class="math-field" id="mfY" ref="mfY" @input="changeFuncY(mfY.value)">
        <slot></slot>
      </math-field>
    </div>
    <div/>
    <AppButton @action="renderResult">Дифференцировать</AppButton>
  </div>
  <div class="solution-wrapper" v-if="isShowSolution">
    <AppHeading>Решение</AppHeading>
    <div class="solution-block">
      <AppText>Функция задана в параметрическом виде. Параметрическое задание функции удобно тем, что оно дает общую запись для прямой и обратной функций. $$y_{x}^{\prime} = \frac{y_{t}^{\prime}}{x_{t}^{\prime}}$$</AppText>
      <AppHeading>Находим производную для x(t)</AppHeading>
      <CalculatorStep v-for="(step, index) in stepsX" :key="`x-${index}`" :step="step" :index="index" />
      <AppHeading>Находим производную для y(t)</AppHeading>
      <CalculatorStep v-for="(step, index) in stepsY" :key="`y-${index}`" :step="step" :index="stepsX.length + index" />
    </div>
    <AppHeading>Ответ</AppHeading>
    <div class="result-block">
      <div class="gray-wrapper source-block">
        $${{formula}}$$
      </div>
      <div class="gray-wrapper source-block">
        =
      </div>
      <div class="gray-wrapper">
        $${{stepResult}}$$
      </div>
      <div class="gray-wrapper source-block">
        =
      </div>
      <div class="gray-wrapper">
        $${{res}}$$
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppText from "@/UI/AppText.vue";
import AppHeading from "@/UI/AppHeading.vue";
import AppButton from "@/UI/AppButton.vue";
import CalculatorStep from "@/components/CalculatorStep.vue";

import {derivative} from "@/utils/derivative";
import {nextTick, onMounted, ref, watch} from "vue";
import {StepProp} from "@/config/steps";
import {all, create} from "mathjs";

const mathjs = create(all);
const mfX = ref<any>(null)
const mfY = ref<any>(null)

const funcX = ref<string>(``)
const funcY = ref<string>(``)
const formula = ref<string>('')
const stepResult = ref<string>('')
const res = ref<string>('')
const stepsX = ref<StepProp[]>([])
const stepsY = ref<StepProp[]>([])
const isShowSolution = ref<boolean>(false)

watch(funcX, () => isShowSolution.value = false)
watch(funcY, () => isShowSolution.value = false)

const changeFuncX = (_func: string) => {
  funcX.value = _func
}
const changeFuncY = (_func: string) => {
  funcY.value = _func
}
const renderResult = () => {
  stepsX.value = []
  stepsY.value = []
  stepResult.value = ''
  res.value = ''
  // console.log('func.value',func.value)
  formula.value = `\\left\\{\\begin{array}{l}x(t) = ${funcX.value} \\\\ y(t) = ${funcY.value}\\end{array}\\right.`
  formula.value = formula.value.replace('tg', 'tan')
  formula.value = formula.value.replace('ctg', 'cot')
  const resFuncX = derivative(funcX.value, 't', stepsX.value)
  const resFuncY = derivative(funcY.value, 't', stepsY.value)
  const resFuncParsedX = mathjs.parse(resFuncX).toTex()
  const resFuncParsedY = mathjs.parse(resFuncY).toTex()
  stepResult.value = `\\left\\{\\begin{array}{l}x_{t}^{\\prime} = ${resFuncParsedX} \\\\ y_{t}^{\\prime} = ${resFuncParsedY}\\end{array}\\right.`
  res.value = `\\frac{${resFuncParsedY}}{${resFuncParsedX}}`
  isShowSolution.value = true
  nextTick(MathJax.typeset)
}

onMounted(MathJax.typeset)
</script>

<style scoped lang="scss">
@import "./styles";
</style>
