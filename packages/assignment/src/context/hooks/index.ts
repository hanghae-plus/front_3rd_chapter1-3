import { useContextProvider } from '@/@lib'
import { NotificationContext, ThemeContext, UserContext } from '@/context'

const NOTIFICATION_ERROR_MESSAGE = 'NotificationProvider 내부에서만 사용하세요.'
const USER_ERROR_MESSAGE = 'UserProvider 내부에서만 사용하세요.'
const THEME_ERROR_MESSAGE = 'ThemeProvider 내부에서만 사용하세요.'

export const useNotificationContext = () => {
  return useContextProvider(NotificationContext, NOTIFICATION_ERROR_MESSAGE)
}

export const useUserContext = () => {
  return useContextProvider(UserContext, USER_ERROR_MESSAGE)
}

export const useThemeContext = () => {
  return useContextProvider(ThemeContext, THEME_ERROR_MESSAGE)
}
