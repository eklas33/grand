import type { AxiosError, AxiosInstance } from 'axios'
import { useAuthStore } from '@/modules/auth/auth.store'
import * as authService from '@/modules/auth/auth.service'

export function registerInterceptors(api: AxiosInstance) {
  // ✅ Attach token
  api.interceptors.request.use((config) => {
    const auth = useAuthStore()

    if (auth.token) {
      config.headers = config.headers ?? {}
      config.headers.Authorization = `Bearer ${auth.token}`
    }

    return config
  })

  // ✅ Handle response
  api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<any>) => {
      const auth = useAuthStore()
      const originalRequest: any = error.config

      // 🔥 Prevent infinite loop
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        try {
          const res = await authService.refresh()
          const newToken = res.data.accessToken

          auth.setToken(newToken)

          // 🔁 Retry request
          originalRequest.headers.Authorization = `Bearer ${newToken}`
          return api(originalRequest)

        } catch (refreshError) {
          // ❌ Refresh failed → logout
          auth.logout()
          return Promise.reject(refreshError)
        }
      }

      if (error.response) {
        return Promise.reject(error.response.data)
      }

      return Promise.reject({ message: error.message || 'Network error' })
    }
  )
}