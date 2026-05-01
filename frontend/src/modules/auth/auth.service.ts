import { api } from '@/services/api'

// ✅ Types (important for consistency)
export interface AuthResponse {
  user: {
    id: string
    name: string
    email: string
    role: string
    institution?: string
  }
  accessToken: string
}

// ✅ Mock data flag - set to true to use mock data
const USE_MOCK_DATA = true

// ✅ Mock responses
const mockAuthResponse: AuthResponse = {
  user: {
    id: 'mock-user-123',
    name: 'Mock User',
    email: 'mock@example.com',
    role: 'researcher',
    institution: 'Mock University'
  },
  accessToken: 'mock-jwt-token-12345'
}

// ✅ Login
export const login = (data: { email: string; password: string }) => {
  if (USE_MOCK_DATA) {
    return Promise.resolve({
      data: {
        ...mockAuthResponse,
        user: {
          ...mockAuthResponse.user,
          email: data.email
        }
      }
    })
  }
  return api.post<AuthResponse>('/auth/login', data)
}

// ✅ Register
export const register = (data: {
  name: string
  email: string
  password: string
  role?: string
  institution?: string
}) => {
  if (USE_MOCK_DATA) {
    return Promise.resolve({
      data: {
        ...mockAuthResponse,
        user: {
          ...mockAuthResponse.user,
          name: data.name,
          email: data.email,
          role: data.role || 'researcher',
          institution: data.institution
        }
      }
    })
  }
  return api.post<AuthResponse>('/auth/register', data)
}

// ✅ Current user
export const me = () => {
  if (USE_MOCK_DATA) {
    return Promise.resolve({
      data: mockAuthResponse.user
    })
  }
  return api.get<AuthResponse['user']>('/auth/me')
}

// ✅ Refresh token
export const refresh = () => {
  if (USE_MOCK_DATA) {
    return Promise.resolve({
      data: { accessToken: mockAuthResponse.accessToken }
    })
  }
  return api.post<{ accessToken: string }>('/auth/refresh')
}

// ✅ Logout
export const logout = () => {
  if (USE_MOCK_DATA) {
    return Promise.resolve()
  }
  return api.post('/auth/logout')
}