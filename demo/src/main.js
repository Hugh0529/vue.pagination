import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Demo from './Demo.vue'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  '/': {
    component: Demo
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
