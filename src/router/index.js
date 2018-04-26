import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Message from '@/views/Message'
import My from '@/views/My'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})
