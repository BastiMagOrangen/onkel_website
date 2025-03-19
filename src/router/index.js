import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OrdinationView from '../views/OrdinationView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import DatenschutzView from '../views/DatenschutzView.vue'
import WerdegangView from '../views/WerdegangView.vue'
import WahlarztView from '../views/WahlarztView.vue'
import LeistungenView from '../views/LeistungenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/ordination",
      name: "ordination",
      component: OrdinationView
    },
    {
      path: "/impressum",
      name: "impressum",
      component: ImpressumView
    },
    {
      path: "/datenschutz",
      name: "datenschutz",
      component: DatenschutzView
    },
    {
      path: "/werdegang",
      name: "werdegang",
      component: WerdegangView
    },
    {
      path: "/wahlarzt",
      name: "wahlarzt",
      component: WahlarztView
    },
    {
      path: "/leistungen",
      name: "leistungen",
      component: LeistungenView
    }
  ]

})

export default router
