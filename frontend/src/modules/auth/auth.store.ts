import { defineStore } from 'pinia'
import * as authService from './auth.service'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as { role?: string } | null,
    token: null as string | null,
    loading: false,
    error: null as string | null
  }),

  getters: {
    isAuthenticated: (state) => Boolean(state.token),

    // ✅ RBAC helpers
    hasRole: (state) => (role: string) => {
      return state.user?.role === role
    },

    hasAnyRole: (state) => (roles: string[]) => {
      return roles.includes(state.user?.role || '')
    }
  },

  actions: {
    // ✅ Initialize on app load
    async initialize() {
      const token = localStorage.getItem('token')
      if (!token) return

      this.token = token

      try {
        const res = await authService.me()
        this.user = res.data
      } catch {
        this.logout() // 🔥 critical
      }
    },

    // ✅ Token setter
    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },

    // ✅ Login
    async login(credentials: { email: string; password: string }) {
      this.loading = true
      this.error = null

      try {
        const res = await authService.login(credentials)

        this.user = res.data.user
        this.setToken(res.data.accessToken)

        return res
      } catch (err: any) {
        this.error =
          err?.message ||
          err?.response?.data?.message ||
          'Login failed'
        throw err
      } finally {
        this.loading = false
      }
    },

    // ✅ Register
    async register(data: {
      name: string
      email: string
      password: string
      role?: string
      institution?: string
    }) {
      this.loading = true
      this.error = null

      try {
        const res = await authService.register(data)

        this.user = res.data.user
        this.setToken(res.data.accessToken)

        return res
      } catch (err: any) {
        const serverMessage = err?.response?.data?.message || err?.response?.data || err?.message
      this.error = serverMessage || 'Registration failed'
      throw err
      } finally {
        this.loading = false
      }
    },

    // ✅ Logout
    async logout() {
      try {
        await authService.logout()
      } catch {
        // ignore backend failure
      }

      this.user = null
      this.token = null
      localStorage.removeItem('token')
    }
  }
})