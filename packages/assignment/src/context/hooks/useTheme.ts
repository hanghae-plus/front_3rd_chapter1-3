import { useContext } from 'react'
import { ThemeContext } from '@/context/providers'

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme는 ThemeProvider 안에서 사용해야 합니다.')
  return context
}
