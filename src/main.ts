import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMathfield from "https://unpkg.com/mathlive/dist/vue-mathlive.mjs";
import * as MathLive from 'mathlive'

import MathJax, { initMathJax, renderByMathjax } from "mathjax-vue3";
const app = createApp(App)
function onMathJaxReady() {

  const el = document.getElementById("elementId");
  renderByMathjax(el);
}
initMathJax({}, onMathJaxReady);

app.use(MathJax)
app.use(VueMathfield, MathLive);
// app.component("custom-tag", Mathfield);
app.use(router)

app.mount('#app')
