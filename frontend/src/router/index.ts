import { createRouter, createWebHistory } from "vue-router"

// ✅ Import module routes
import authRoutes from "@/modules/auth/auth.routes"
import userRoutes from "@/modules/user/user.routes"
import resourceRoutes from "@/modules/resource/resource.routes"
import adminRoutes from "@/modules/admin/admin.routes"

// ✅ Import guards
import { authGuard } from "@/middleware/authGuard"
import { roleGuard } from "@/middleware/roleGuard"

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Projects from '@/pages/Projects.vue'
import News from '@/pages/News.vue'
import GetInvolved from '@/pages/GetInvolved.vue'
import Events from '@/pages/Events.vue'
import SupportUs from '@/pages/SupportUs.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'
import TermsOfUse from '@/pages/TermsOfUse.vue'
import ContactUs from '@/pages/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: GetInvolved,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/support-us',
    name: 'SupportUs',
    component: SupportUs,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/terms-of-use',
    name: 'TermsOfUse',
    component: TermsOfUse,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
    meta: { layout: 'MainLayout' }
  },
  ...authRoutes,
  ...userRoutes,
  ...resourceRoutes,
  ...adminRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ✅ Apply guards (ORDER MATTERS)
router.beforeEach(authGuard)
router.beforeEach(roleGuard)

export default router