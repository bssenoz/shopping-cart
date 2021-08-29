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
      path: '/Yonetim', component: Yonetim,
      children: [
        { path: '/Yonetim/Stok', component: Stok },
        { path: '/Yonetim/Cuzdan', component: Cuzdan }
      ]
    },
    { path: '/', component: Market },
    { path: '/Market', component: Market },
    { path: '/Sepet', component: Sepet }
  ],

})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
