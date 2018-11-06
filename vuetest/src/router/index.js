import Vue from 'vue'
import Router from 'vue-router'
// import Elementui from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import HelloWorld from '@/components/HelloWorld'
 import Test from '@/components/test1'
 import Site from '@/components/site'

Vue.use(Router)
// Vue.use(Elementui)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/site',
      name: 'Site',
      component: Site
    }
  ]
})
