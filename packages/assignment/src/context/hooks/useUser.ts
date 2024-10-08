import { useContext } from 'react'
import { UserContext } from '@/context/providers'

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser는 UserProvider 안에서 사용해야 합니다.')
  return context
}
