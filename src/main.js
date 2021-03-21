import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'
import Yonetim from './views/Yonetim.vue'
import Market from './views/Market.vue'
import Sepet from './views/Sepet.vue'
import Stok from './components/Stok.vue'
import Cuzdan from './components/Cuzdan.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/yonetim', component: Yonetim,
      children: [
        { path: '/yonetim/stok', component: Stok },
        { path: '/yonetim/cuzdan', component: Cuzdan }
      ]
    },
    { path: '/market', component: Market },
    { path: '/sepet', component: Sepet }
  ],

})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
