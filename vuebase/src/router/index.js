import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '/',
        component: () => import('../layouts/VuebaseLayout'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/Home'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('../views/Dashboard/Layout'),
                meta: {
                    requiresAuth: true
                },
                children: [
                    {
                        path: 'record',
                        name: 'dashboard.record',
                        component: () => import('../views/Dashboard/Record'),
                        meta: {
                            requiresAuth: true
                        }
                    },
                    {
                        path: 'upload',
                        name: 'dashboard.upload',
                        component: () => import('../views/Dashboard/Upload'),
                        meta: {
                            requiresAuth: true
                        }
                    },
                    {
                        path: 'logs',
                        name: 'dashboard.logs',
                        component: () => import('../views/Dashboard/Logs'),
                        meta: {
                            requiresAuth: true
                        }
                    }
                ]
            },
            {
                path: 'nlpmanage',
                name: 'dashboard.nlpmanage',
                component: () => import('../views/Dashboard/NlpManage'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'nlptag',
                name: 'dashboard.nlptag',
                component: () => import('../views/Dashboard/NlpTag'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/Login'),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Login/Register'),
        meta: {
            requiresAuth: false
        }
    },
]

export default new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
})
