import Vue from 'vue'
import './plugins'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.use(axios);
Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//     const islogin = localStorage.getItem('islogin');
//     console.log("islogin: "+ islogin) 
//     if (islogin==true) {
//       next();
//     } else {
//       if (to.path !== '/login')
//         next({ path: '/login' });
//       else
//         next();
//     }
// });

router.beforeEach((to, from, next) => {
    const islogin = sessionStorage.getItem('islogin');
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!islogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() 
    }
  })

export const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
