import { NotificationProvider, ThemeProvider, UserProvider } from '@/context'
import { FC, PropsWithChildren } from 'react'
import { ThemeLayout } from './ThemeLayout'
import { NotificationSystem } from './NotificationSystem'

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <ThemeLayout>
            {children}
            <NotificationSystem />
          </ThemeLayout>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}
