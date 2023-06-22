<script setup lang="ts">
import AppCalculatorIcon from "./icons/AppCalculatorIcon.vue"
import AppNoteIcon from "./icons/AppNoteIcon.vue"
import AppFunctionIcon from "./icons/AppFunctionIcon.vue"

</script>

<template>
     <nav>
          <ol>
               <li>
                    <RouterLink to="/">
                         <AppCalculatorIcon />
                         Калькулятор
                    </RouterLink>
               </li>
               <li>
                    <RouterLink to="/terms">
                         <AppNoteIcon />
                         Термины
                    </RouterLink>
               </li>
               <li>
                    <RouterLink to="/formulas">
                         <AppFunctionIcon />
                         Формулы
                    </RouterLink>
               </li>
          </ol>
     </nav>
</template>

<style scoped lang="scss">
nav {
     display: flex;
     justify-content: center;
     align-items: center;

     background-color: var(--base-100);
     box-shadow: 0px 2px 25px rgba(var(--base-1000-rgb), 0.06);
     height: var(--navbar-height);
     width: 100%;
     margin-bottom: 15px;
     z-index: 20;
}

ol {
     display: flex;
     gap: 10px;
     padding: 0;
     list-style-type: none;
     list-style-position: unset;
}

a {
     display: flex;
     align-items: center;
     padding: 5px 8px;
     gap: 5px;
     text-decoration: inherit;
     color: var(--base-700);
     fill: var(--base-700);
     font-size: 16px;
     font-weight: 600;
     border-radius: 6px;
     transition: background-color 250ms, color 250ms;

     svg {
          width: 24px;
          height: 24px;
          transition: inherit;
     }

     &:hover {
          background-color: rgba(var(--main-500-rgb), 0.15);
          color: var(--main-500);
          fill: var(--main-500);
     }

     &.router-link-active {
          background-color: var(--main-500);
          color: var(--base-100);
          font-weight: 700;
          fill: var(--base-100);
     }
}
</style>