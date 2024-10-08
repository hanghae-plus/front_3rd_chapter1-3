import { useContext } from 'react'
import { NotificationContext } from '@/context/providers'

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) throw new Error('useNotification는 NotificationProvider 안에서 사용해야 합니다.')
  return context
}
