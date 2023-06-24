<template>
  <main id="elementId">
    <AppHeading>Пошаговый калькулятор производных</AppHeading>
    <AppCard>
      <AppTabs title="Вид функции" :tabs="functionTypesTabs" :selected-tab="functionType" @select="selectFunctionType"/>
      <AppTabs title="Способ дифференирования" :tabs="derivationMethodTabs" :selected-tab="derivationMethod"
               @select="selectDerivationMethod"/>
      <div class="input-block">
        <AppText>Дифференцировать по</AppText>
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
      <div class="solution-wrapper">
        <AppHeading>Решение</AppHeading>
        <div class="solution-block">
          <CalculatorStep v-for="(step, index) in steps" :key="index" :step="step" :index="index" />
        </div>
        <AppHeading>Ответ</AppHeading>
        <div class="result-block">
          <div class="gray-wrapper source-block">
            <math-jax :latex="formula + '='"></math-jax>
          </div>
          <div class="gray-wrapper">
            <math-jax :latex="res"></math-jax>
          </div>
          <div class="gray-wrapper source-block">
            =
          </div>
          <div class="gray-wrapper">
            <math-jax :latex="simple"></math-jax>
          </div>
        </div>
      </div>
    </AppCard>
  </main>
</template>

<script setup lang="ts">
import {derivative} from "@/utils/derivative";
// import {parse, simplify} from "mathjs";
import {create, all} from 'mathjs';
import AppHeading from "@/UI/AppHeading.vue";
import AppCard from "@/UI/AppCard.vue";
import AppTabs from "@/UI/AppTabs.vue";
import {ref} from "vue";
import AppText from "@/UI/AppText.vue";
import AppInput from "@/UI/AppInput.vue";
import AppButton from "@/UI/AppButton.vue";
import CalculatorStep from "@/components/CalculatorStep.vue";
import {StepProp} from "@/config/steps";

const mathjs = create(all);
// mathjs.config({ number: 'Fraction' });

const functionTypesTabs: string[] = ['ФОП',
  // 'Неяввно заданная функция',
  // 'Параметрически заданная функция'
]
const derivationMethodTabs: string[] = [
  "Стандартный",
  // "Логарифмирование"
]

const mf = ref<any>(null)

const func = ref<string>(`sin(x)^2-x^3+(1)/(x)+4`)
const formula = ref<string>('')
const res = ref<string>('')
const simple = ref<string>('')
const variable = ref<string>('x')
const steps = ref<StepProp[]>([])

const functionType = ref<string>(functionTypesTabs[0])
const derivationMethod = ref<string>(derivationMethodTabs[0])

const selectFunctionType = (_functionType: string) => {
  functionType.value = _functionType
}
const selectDerivationMethod = (_derivationMethod: string) => {
  derivationMethod.value = _derivationMethod
}
const changeFunc = (_func: string) => {
  func.value = _func
}
const renderResult = () => {
  steps.value = []
  console.log('func.value',func.value)
  const resFunc = derivative(func.value, variable.value, steps.value)
// formula.value = parse(func.value).toTex()
  formula.value = `f'(x)=(${func.value})'_{${variable.value}}`
  formula.value = formula.value.replace('tg', 'tan')
  formula.value = formula.value.replace('ctg', 'cot')
  console.log('resFunc',resFunc)
  const resFuncParsed = mathjs.parse(resFunc)
  res.value = resFuncParsed.toTex()
  simple.value = mathjs.simplify(resFuncParsed).toTex()
}

</script>

<style scoped lang="scss">
main {
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.card {
  margin-top: 25px;
  width: 100%;
  max-width: 804px;
  gap: 10px;
}

.input-block {
  width: 100%;
  display: grid;
  grid-template-columns: .75fr 2.5fr;
  grid-gap: 10px;
}

.variable-block {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;

  .input {
    max-width: 24px;
  }
}

.math-field {
  width: 100%;
  outline: none;
  align-items: center;
  border: none;
  border-radius: 8px 0 0 8px;
  background: var(--c-input);
  font-size: 20px;
  line-height: 1;
  font-family: "Inter", sans-serif;
  padding: 5px;
}

.math-block {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  width: 100%;

  .input {
    width: 100%;
  }
}

.solution-wrapper {
  .heading {
    text-align: left;
    padding-left: 20px;
  }
  margin-top: 25px;
}

.solution-block {
  margin-top: 10px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
}

.result-block {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;

  .source-block {
    background: transparent;
  }
}
</style>
