import React, { useState } from 'react'
import { generateItems } from './utils'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import {
  NotificationProvider,
} from './context/NotificationContext'
import { ItemList } from './components/ItemList'
import { Header } from './components/Header'
import { ComplexForm } from './components/ComplexForm'
import { NotificationSystem } from './components/NotificationSystem'

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items] = useState(generateItems(10000))

  return (
    <NotificationProvider>
      <UserProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-100">
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
        </ThemeProvider>
      </UserProvider>
    </NotificationProvider>
  )
}

export default App
