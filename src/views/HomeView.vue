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
<!--          <math-field class="math-field" id="mf" ref="mf" @input="changeFunc(mf.value)">-->
<!--            <slot></slot>-->
<!--          </math-field>-->
          <AppInput v-model="func"/>
          <AppButton @action="renderResult">Дифференцировать</AppButton>
        </div>
        <p>
          <math-jax :latex="formula"></math-jax><br/><br/>
          <math-jax :latex="res"></math-jax><br/><br/>
          <math-jax :latex="simple"></math-jax>
        </p>
      </div>
    </AppCard>
  </main>
</template>

<script setup lang="ts">
import {derivative} from "@/utils/derivative";
import {parse, simplify} from "mathjs";
import AppHeading from "@/UI/AppHeading.vue";
import AppCard from "@/UI/AppCard.vue";
import AppTabs from "@/UI/AppTabs.vue";
import {computed, ref, watch} from "vue";
import AppText from "@/UI/AppText.vue";
import AppInput from "@/UI/AppInput.vue";
import AppButton from "@/UI/AppButton.vue";

const functionTypesTabs: string[] = ['ФОП',
  // 'Невявно заданная функция',
  // 'Невявно заданная функция'
]
const derivationMethodTabs: string[] = [
  "Стандартный",
  // "Логарифмирование"
]

const mf = ref<any>(null)

const func = ref<string>(``)
const formula = ref<string>('')
const res = ref<string>('')
const simple = ref<string>('')
const variable = ref<string>('x')

const functionType = ref<string>(functionTypesTabs[0])
const derivationMethod = ref<string>(derivationMethodTabs[0])
// watch(mf, (newValue, oldValue) => {
//   console.log('mf', newValue)
// })
watch(func, (newValue, oldValue) => {
  console.log('func', newValue)
})



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
  const resFunc = derivative(func.value, 'x')
// formula.value = parse(func.value).toTex()
  formula.value = func.value
  const resFuncParsed = parse(resFunc)
  res.value = resFuncParsed.toTex()
  simple.value = simplify(resFuncParsed).toTex()
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
</style>
