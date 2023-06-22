<script setup lang="ts">
import { computed } from 'vue';
import terms from "@/assets/terms"
import AppSidebar from '@/UI/AppSidebar.vue';
import AppTheoryCard from '@/UI/AppTheoryCard.vue';

const sidebarGroups = computed(() =>
([{
     id: "0",
     name: "",
     content: terms.map(term => ({
          id: term.id,
          name: term.name
     }))
}])
);
</script>



<template>
     <div class="container">
          <AppSidebar :groups="sidebarGroups" />
          <main>
               <section>
                    <h2>Термины</h2>
                    <AppTheoryCard :style="{ padding: '10px 20px' }" v-for="term in terms" :key="term.id" :title="term.name"
                         :id="term.id" :extras="term.extras">
                         <component :is="term.content" />
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

section {
     display: flex;
     flex-direction: column;
     gap: 10px;
     width: 900px;
}

h2 {
     position: relative;
     cursor: pointer;
     padding-left: 15px;
}
</style>