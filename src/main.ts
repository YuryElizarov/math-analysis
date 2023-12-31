import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMathfield from "https://unpkg.com/mathlive/dist/vue-mathlive.mjs";
import * as MathLive from 'mathlive'

const app = createApp(App)

app.use(VueMathfield, MathLive);
// app.component("custom-tag", Mathfield);
app.use(router)

app.mount('#app')
