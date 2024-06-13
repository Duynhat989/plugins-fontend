import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExtensionMoreView from '../views/ExtensionMore.vue'
import ProductView from '../views/ProductView.vue'
import DomainView from '../views/SetupView.vue'
import ManagerView from '../views/ManagerView.vue'
import DashView from '../views/DashView.vue'
import ErrorView from '@/components/layouts/Error.vue'
import CoderView from '@/views/CoderView.vue'
import SevicesView from '@/components/sevices/Index.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/components/contact/Index.vue'
import SetupView from '../views/SetupView.vue'
const turn_on_auth = () => {
  window.postMessage({
      active:'auth'
  }, window.location.href);
}
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/plugin/:slug",
      name: "plugin_show",
      component: DashView,
    },
    {
      path: "/product",
      name: "product_list",
      component: ExtensionMoreView,
    },
    {
      path: "/manager",
      name: "manager",
      component: ManagerView,
    },
    {
      path: "/dash",
      name: "dash",
      component: SetupView,
    },
    {
      path: "/sevices",
      name: "sevices",
      component: SevicesView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/new-jobs",
      name: "jobs",
      component: CoderView,
    }
    ,
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: ErrorView
    }
  ]
})
router.beforeEach((to, from, next) => {
  const publicPages = ["/","/contact","/about","/new-jobs"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user") || false
  if (authRequired && !loggedIn) {
    next("/")
    turn_on_auth()
  } else {
    next();
  }
});
export default router;