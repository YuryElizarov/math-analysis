<script setup lang="ts">
import AppSidebar from "@/UI/AppSidebar.vue";
import formulas from "@/assets/formulas";
import { computed } from "vue";
import AppTheoryCard from "@/UI/AppTheoryCard.vue";

const sidebarGroups = computed(() =>
     formulas.map(group => ({
          id: group.id,
          name: group.name,
          content: group.content.map(formula => ({
               id: formula.id,
               name: formula.name
          }))
     })
));
</script>

<template>
     <div class="container">
          <AppSidebar :groups="sidebarGroups" />
          <main>
               <section v-for="group in formulas" :key="group.id" class="group">
                    <h2 class="group-name" :id="group.id"><a :href="'#' + group.id">{{ group.name }}</a></h2>
                    <AppTheoryCard :style="{ padding: '15px 25px' }" v-for="formula in group.content" :key="formula.id"
                         :id="formula.id" :title="formula.name" :extras="formula.extras">
                         <div class="latex">${{ formula.latex }}$</div>
                    </AppTheoryCard>
               </section>
          </main>
     </div>
</template>

<style scoped lang="scss">
.container {
     position: relative;
}

main {
     flex: 1;
     display: flex;
     gap: 25px;
     max-width: 100%;
     flex-direction: column;
     align-items: center;
}

.group {
     display: flex;
     flex-direction: column;
     gap: 15px;
     width: 900px;
}

.group-name {
     position: relative;
     cursor: pointer;
     padding-left: 15px;

     a {
          color: inherit;
          text-decoration: inherit;
          font-size: inherit;
          font-weight: inherit;
     }

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
          left: -5px;
          font-weight: inherit;
     }
}

.latex {
     font-size: 18px;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 5px 10px;

     background: var(--base-200);
     border-radius: 6px;
}
</style>