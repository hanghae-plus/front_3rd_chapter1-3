import { NotificationProvider, ThemeProvider, UserProvider } from '@/context'
import { FC, PropsWithChildren } from 'react'
import { ThemeLayout } from './ThemeLayout'
import { Header } from './Header'
import { NotificationSystem } from './NotificationSystem'

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <ThemeLayout>
            <Header />
            {children}
            <NotificationSystem />
          </ThemeLayout>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}
