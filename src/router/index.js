import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from "../views/User/404.vue";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import( /* webpackChunkName: "layout" */ '../layout/UserLayout.vue'),
    children: [{
        path: '/',
        redirect: '/user/login'
      },
      {
        path: '/user/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '../views/User/LoginPage.vue')
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '../views/User/RegisterPage.vue')
      }
    ]
  },

  //dashboard
  {
    path: '/dashboard',
    component: () => import( /* webpackChunkName: "layout" */ '../layout/BasicLayout.vue'),
    children: [{
        path: '/dashboard',
        redirect: '/dashboard/analysis'
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: {
          render: h => h("router-view")
        },
        children: [{
          path: '/dashboard/analysis',
          name: 'analysis',
          component: () => import( /* webpackChunkName: "layout" */ '../views/Dashboard/Analysis.vue')
        }]
      },
      //form
      {
        path: '/form',
        name: 'form',
        component: {
          render: h => h("router-view")
        },
        children: [{
            path: '/form/basic-form',
            name: 'basicform',
            component: () => import( /* webpackChunkName: "form" */ '../views/Forms/BasicForm.vue')
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: () => import( /* webpackChunkName: "form" */ '../views/Forms/StepForm'),
            children: [{
                path: '/form/step-form',
                redirect: '/form/step-form/info'
              },
              {
                path: '/form/step-form/info',
                name: 'stepform',
                component: () => import( /* webpackChunkName: "form" */ '../views/Forms/StepForm/Step1'),
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: () => import( /* webpackChunkName: "form" */ '../views/Forms/StepForm/Step2'),
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: () => import( /* webpackChunkName: "form" */ '../views/Forms/StepForm/Step3'),
              },
            ]
          }
        ]
      },
      {
        path:'/usermanage',
        name:'usermanage',
        component: () => import( /* webpackChunkName: "usermanage" */ '../views/Usermanage/User.vue')
      }
    ]
  },



  {
    path: '*',
    namn: '404',
    component: NotFound,
  }

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/user/login') {
    next();
  } else if (sessionStorage.getItem('token')) {
    next()
  } else {
    next('/user/login')
  }
})

export default router