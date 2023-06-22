import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormulasView from "../views/FormulasView.vue"
import TermsView from "../views/TermsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/formulas",
      name: "formulas",
      component: FormulasView
    },
    {
      path: "/terms",
      name: "terms",
      component: TermsView
    }
  ]
})

export default router
