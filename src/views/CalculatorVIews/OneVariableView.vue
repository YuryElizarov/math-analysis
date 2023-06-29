<template>
  <div class="input-block">
    <AppText>Дифференцировать по аргументу</AppText>
    <AppText>Функция</AppText>
    <div class="variable-block">
      <AppText>f(
        <AppInput v-model="variable"/>
        ) =
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
      <CalculatorStep v-for="(step, index) in steps" :key="index" :step="step" :index="index" />
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
        $${{res}}$$
      </div>
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
const res = ref<string>('')
const variable = ref<string>('x')
const steps = ref<StepProp[]>([])
const isShowSolution = ref<boolean>(false)

watch(func, () => isShowSolution.value = false)

const changeFunc = (_func: string) => {
  func.value = _func
}
const renderResult = () => {
  steps.value = []
  res.value = ''
  console.log('func.value',func.value)
  const resFunc = derivative(func.value, variable.value, steps.value)
  formula.value = `f'(${variable.value})=(${func.value})'_{${variable.value}}`
  formula.value = formula.value.replace('tg', 'tan')
  formula.value = formula.value.replace('ctg', 'cot')
  console.log('resFunc',resFunc)
  const resFuncParsed = mathjs.parse(resFunc)
  res.value = resFuncParsed.toTex()
  isShowSolution.value = true
  nextTick(MathJax.typeset)
}

onMounted(MathJax.typeset)
</script>

<style scoped lang="scss">
@import "./styles";
</style>
