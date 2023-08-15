// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import { createRouter, createWebHashHistory } from 'vue-router'
// import App from './App.vue'
// import SignUp from '../src/components/SignUp.vue'
// import TaskForm from '../src/components/TaskForm.vue'

// const app = createApp(App)

// app.use(createPinia())

// const routes = [
//     {path:'/sign-up', component:SignUp },
//     {path:'/task-form', component:TaskForm}
// ]
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes // short for `routes: routes`
// })

// app.use(router)
// app.mount('#app')


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import SignUp from '../src/components/SignUp.vue'
import TaskForm from '../src/components/TaskForm.vue'
import LogIn from '@/components/LogIn.vue';

const app = createApp(App)

app.use(createPinia())

const routes = [
  {
    path: '/',
    component: SignUp
  },
  {
    path: '/task-form',
    component: TaskForm
  },
  {
    path: '/login',
    component: LogIn
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



app.use(router).mount('#app')
