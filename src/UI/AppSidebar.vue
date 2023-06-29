<script setup lang="ts">
import { ref } from 'vue';
import AppDivider from './AppDivider.vue';
import AppArrowLeftIcon from './icons/AppArrowLeftIcon.vue';

defineProps<{
     groups: Array<{
          id: string,
          name: string,
          content: Array<{
               id: string,
               name: string
          }>
     }>
}>()

const isClosed = ref<boolean>(true);
</script>

<template>
     <aside class="sidebar-toggle" :class="{'closed': isClosed}">
          <div class="sidebar">
               <div v-for="(group, index) in groups" :key="group.id">
                    <AppDivider class="divider" v-if="index > 0" />
                    <h6 class="group-name" v-if="group.name">{{ group.name }}</h6>
                    <ul>
                         <li class="item" v-for="item in group.content" :key="item.id">
                              <a :href="`#${item.id}`" :class="{ current: $route.hash === `#${item.id}` }">
                                   {{ item.name }}
                              </a>
                         </li>
                    </ul>
               </div>
          </div>
          <button class="toggle" @click="() => isClosed = !isClosed"><AppArrowLeftIcon /></button>
     </aside>
</template>

<style scoped lang="scss">
aside {
     --sidebar-width: 275px;
     --padding-left: 15px;

     position: fixed;
     top: var(--navbar-height);
     left: 0;
     height: calc(100vh - var(--navbar-height));
     z-index: 10;
     transition: left 0.5s;

     &.closed {
          left: calc(0px - var(--sidebar-width));

          .toggle {
               transform: rotate(180deg);
          }
     }
}

.toggle {
     height: fit-content;
     position: absolute;
     display: flex;
     justify-content: center;
     align-items: center;

     top: 15px;
     padding: 5px;
     right: calc(-16px - 5px * 2 - 10px);
     border-radius: 6px;
     border: none;
     background-color: var(--base-300);
     fill: var(--base-600);
     color: var(--base-600);
     cursor: pointer;
}

.sidebar {
     width: var(--sidebar-width);
     height: calc(100vh - var(--navbar-height));
     padding: 20px 15px 50px var(--padding-left);
     background-color: var(--base-100);
     box-shadow: 2px 0 25px rgba(var(--base-1000-rgb), 0.06);
     overflow-y: auto;

     .divider {
          margin: 10px 0;
     }

     h6 {
          margin-bottom: 10px;
     }

     ul {
          display: flex;
          flex-direction: column;
          gap: 6px;

          list-style-type: none;
          list-style-position: unset;
          padding: 0;
     }
}
.item a {
     position: relative;
     display: block;
     text-decoration: none;
     letter-spacing: 0.08ex;
     color: var(--base-500);

     &::before {
          content: '';
          position: absolute;
          left: calc(0px - var(--padding-left));
          width: 0px;
          height: 100%;
          background-color: transparent;
          transition: background-color 250ms, width 250ms;
     }

     &.current {
          color: var(--main-500);
          text-shadow: -0.05ex 0 0 currentColor, 0.05ex 0 0 currentColor;

          &::before {
               background-color: var(--main-500);
               width: 5px;
          }
     }
}
</style>