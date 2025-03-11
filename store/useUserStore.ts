import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface User {
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

interface UserState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  setUser: (user: User) => void
  setTokens: (access: string, refresh: string) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      setUser: (user) => set({ user }),
      setTokens: (access, refresh) => set({ accessToken: access, refreshToken: refresh }),
      clearUser: () => set({ user: null, accessToken: null, refreshToken: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
)

export const getAccessToken = () => useUserStore.getState().accessToken; 