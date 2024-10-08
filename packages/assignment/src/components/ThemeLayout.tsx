import { memo } from '@/@lib'
import { THEME } from '@/constants'
import { useTheme } from '@/context/hooks'
import { FC } from 'react'

export const ThemeLayout: FC<React.PropsWithChildren> = memo(({ children }) => {
  const { theme } = useTheme()
  const themeClass = theme === THEME.LIGHT ? 'bg-gray-100' : 'bg-gray-900 text-white'
  return <div className={`min-h-screen ${themeClass}`}>{children}</div>
})
