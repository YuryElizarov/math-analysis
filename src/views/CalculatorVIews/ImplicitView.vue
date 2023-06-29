<template>
  <div class="input-block">
    <AppText>Дифференцировать по</AppText>
    <AppText>Функция</AppText>
    <div class="variable-block">
      <AppText>F(x, y) =
      </AppText>
    </div>
    <div class="math-block">
      <math-field class="math-field" id="mf" ref="mf" @input="changeFunc(mf.value)">
        <slot></slot>
      </math-field>
      <!--          <AppInput v-model="func"/>-->
      <AppButton @action="renderResult">Дифференцировать</AppButton>
    </div>
  </div>
  <div class="solution-wrapper" v-if="isShowSolution">
    <AppHeading>Решение</AppHeading>
    <div class="solution-block">
      <AppText>Поскольку функция задана в неявном виде, то производную ищем по формуле:
        $$\frac{\partial y}{\partial x} = -\frac{\frac{\partial F(x,y)}{\partial x}}{\frac{\partial F(x,y)}{\partial y}}$$
      </AppText>
      <CalculatorStep v-for="(step, index) in stepsX" :key="`x-${index}`" :step="step" :index="index" />
      <div class="gray-wrapper source-block">$${{ resX }}$$</div>
      <CalculatorStep v-for="(step, index) in stepsY" :key="`y-${index}`" :step="step" :index="stepsX.length + index" />
      <div class="gray-wrapper source-block">
        $${{ resY }}$$
      </div>
    </div>
    <AppHeading>Ответ</AppHeading>
    <div class="result-block">
      <div class="gray-wrapper source-block">
        $${{ formula }}$$
      </div>
      <div class="gray-wrapper source-block">=</div>
      <div class="gray-wrapper">$$\frac{\partial y}{\partial x}$$</div>
      <div class="gray-wrapper source-block">=</div>
      <div class="gray-wrapper">$${{ res }}$$</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppText from "@/UI/AppText.vue";
import AppInput from "@/UI/AppInput.vue";
import AppButton from "@/UI/AppButton.vue";
import CalculatorStep from "@/components/CalculatorStep.vue";

import {derivative} from "@/utils/derivative";
import {nextTick, onMounted, ref, watch} from "vue";
import {StepProp} from "@/config/steps";
import {all, create} from "mathjs";

const mathjs = create(all);
const mf = ref<any>(null)

const func = ref<string>(``)
const formula = ref<string>('')
const resX = ref<string>('')
const resY = ref<string>('')
const res = ref<string>('')
const stepsX = ref<StepProp[]>([])
const stepsY = ref<StepProp[]>([])
const isShowSolution = ref<boolean>(false)

watch(func, () => isShowSolution.value = false)

const changeFunc = (_func: string) => {
  func.value = _func
}
const renderResult = () => {
  stepsX.value = []
  stepsY.value = []
  res.value = ''
  const resFuncX = derivative(func.value, 'x', stepsX.value)
  const resFuncY = derivative(func.value, 'y', stepsY.value)
  const resFuncParsedX = mathjs.parse(resFuncX).toTex()
  const resFuncParsedY = mathjs.parse(resFuncY).toTex()
  resX.value = `\\frac{\\partial F(x,y)}{\\partial x} = ${resFuncParsedX}`
  resY.value = `\\frac{\\partial F(x,y)}{\\partial y} = ${resFuncParsedY}`
  formula.value = `F(x,y)=${func.value}`
  formula.value = formula.value.replace('tg', 'tan')
  formula.value = formula.value.replace('ctg', 'cot')
  res.value = `-\\frac{${resFuncParsedX}}{${resFuncParsedY}}`
  isShowSolution.value = true
  nextTick(MathJax.typeset)
}

onMounted(MathJax.typeset)
</script>

<style scoped lang="scss">
@import "./styles";
</style>
