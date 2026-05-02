import { useAuthStore } from '@/modules/auth/auth.store'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function authGuard(
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore()
  const requiresAuth = Boolean(to.meta.requiresAuth)

  // ❌ Not authenticated
  if (requiresAuth && !authStore.isAuthenticated) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }

  // ✅ Authenticated
  next()
}