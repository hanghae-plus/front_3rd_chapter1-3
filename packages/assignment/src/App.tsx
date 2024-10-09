import React from 'react'
import { generateItems } from './utils'
import {
  ThemeProvider,
  UserProvider,
  NotificationProvider,
  useThemeContext,
} from './contexts'
import { useMemo } from './@lib'

// components
import { ItemList, Header, ComplexForm, NotificationSystem } from './components'

const AppContent: React.FC = () => {
  const { theme } = useThemeContext()
  const items = useMemo(() => generateItems(10000), [])

  return (
    <div
      className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}
    >
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <ItemList items={items} />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <ComplexForm />
          </div>
        </div>
      </div>
      <NotificationSystem />
    </div>
  )
}

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default App
