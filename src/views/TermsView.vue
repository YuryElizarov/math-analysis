<script setup lang="ts">
import { computed, onMounted } from 'vue';
import terms from "@/assets/terms"
import AppSidebar from '@/UI/AppSidebar.vue';
import AppTheoryCard from '@/UI/AppTheoryCard.vue';
import { useRoute } from 'vue-router';

const sidebarGroups = computed(() =>
     terms.map(group => ({
          id: group.id,
          name: group.name,
          content: group.content.map(term => ({
               id: term.id,
               name: term.name
          }))
     })
));

const route = useRoute()
onMounted(() => {
     document.getElementById(route.hash.slice(1))?.scrollIntoView()
     MathJax.typeset()
})
</script>



<template>
     <div class="container">
          <AppSidebar :groups="sidebarGroups" />
          <main>
               <section v-for="group in terms" :key="group.id" class="group">
                    <h2 class="group-name" :id="group.id">{{ group.name }}</h2>
                    <AppTheoryCard :style="{ padding: '15px 25px' }" v-for="term in group.content" :key="term.id"
                         :id="term.id" :title="term.name" :extras="term.extras">
                         <component :is="term.content" />
                    </AppTheoryCard>
               </section>
          </main>
     </div>
</template>

<style scoped lang="scss">
.container {
     position: relative;
     margin-bottom: 25px;
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