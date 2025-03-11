export interface User {
  id: number
  username: string
  email: string
  role: string
  phone_number: string
  profile_picture: string | null
  resume: string | null
  experience_level: string
  industry: string
  job_role: string
  is_premium: boolean
  timezone: string
}

export const setAuthData = (access: string, refresh: string, user: User) => {
  localStorage.setItem('accessToken', access)
  localStorage.setItem('refreshToken', refresh)
  localStorage.setItem('userData', JSON.stringify(user))
}

export const getAuthData = () => {
  const access = localStorage.getItem('accessToken')
  const refresh = localStorage.getItem('refreshToken')
  const userData = JSON.parse(localStorage.getItem('userData') || '{}') as User
  return { access, refresh, userData }
}

export const clearAuthData = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('userData')
}

export const isAuthenticated = () => {
  return !!localStorage.getItem('accessToken')
} 