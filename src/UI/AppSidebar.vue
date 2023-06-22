<script setup lang="ts">
import AppDivider from './AppDivider.vue';

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


</script>

<template>
     <aside class="sidebar-toggle">
          <div class="sidebar">
               <div v-for="(group, index) in groups" :key="group.id">
                    <AppDivider class="divider" v-if="index > 0" />
                    <h6 class="group-name">{{ group.name }}</h6>
                    <ul>
                         <li class="item" v-for="item in group.content" :key="item.id">
                              <RouterLink :to="`#${item.id}`" :class="{ current: $route.hash === `#${item.id}` }" :data-text="item.name">
                                   {{ item.name }}
                              </RouterLink>
                         </li>
                    </ul>
               </div>
          </div>
          <button class="toggle"> &lt; </button>
     </aside>
</template>

<style scoped lang="scss">
aside {
     position: fixed;
     top: var(--navbar-height);
     height: calc(100vh - var(--navbar-height));
     z-index: 10;
}

.toggle {
     position: absolute;
}

.sidebar {
     width: 250px;
     height: 100vh;
     padding: 20px 10px;
     background-color: var(--base-100);
     box-shadow: 2px 0 25px rgba(var(--base-1000-rgb), 0.06);

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
          left: -10px;
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
               width: 3px;
          }
     }
}
</style>