<template>
  <main id="elementId">
    <AppHeading>Калькулятор пошагового нахождения производных</AppHeading>
    <AppCard>
      <AppTabs title="Вид функции" :tabs="functionTypesTabs" :selected-tab="functionType" @select="selectFunctionType"/>
      <AppTabs title="Способ дифференирования" :tabs="derivationMethodTabs" :selected-tab="derivationMethod"
               @select="selectDerivationMethod"/>
      <OneVariableView v-if="functionType === functionTypesTabs[0]"/>
      <ImplicitView v-if="functionType === functionTypesTabs[1]"/>
      <ParametricallyView v-if="functionType === functionTypesTabs[2]"/>
    </AppCard>
  </main>
</template>

<script setup lang="ts">
import AppHeading from "@/UI/AppHeading.vue";
import AppCard from "@/UI/AppCard.vue";
import AppTabs from "@/UI/AppTabs.vue";
import {ref} from "vue";
import OneVariableView from "@/views/CalculatorVIews/OneVariableView.vue";
import ImplicitView from "@/views/CalculatorVIews/ImplicitView.vue";
import ParametricallyView from "@/views/CalculatorVIews/ParametricallyView.vue";

const functionTypesTabs: string[] = ['ФОП',
  'Неявно заданная функция',
  'Параметрически заданная функция'
]
const derivationMethodTabs: string[] = [
  "Стандартный",
  // "Логарифмирование"
]


const functionType = ref<string>(functionTypesTabs[0])
const derivationMethod = ref<string>(derivationMethodTabs[0])

const selectFunctionType = (_functionType: string) => {
  functionType.value = _functionType
}
const selectDerivationMethod = (_derivationMethod: string) => {
  derivationMethod.value = _derivationMethod
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
</style>
