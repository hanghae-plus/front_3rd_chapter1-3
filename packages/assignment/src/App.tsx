import React from 'react';
import { useMemo } from './@lib';
import { NotificationProvider } from './contexts/NotificationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import ComplexForm from './pages/ComplexForm';
import { Header } from './pages/Header';
import ItemList from './pages/ItemList';
import { NotificationSystem } from './pages/NotificationSystem';
import { generateItems } from './utils';

// 메인 App 컴포넌트
const App: React.FC = () => {
  const items = useMemo(() => generateItems(10000), []);

  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <div className='min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white'>
            <Header />
            <div className='container mx-auto px-4 py-8'>
              <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 md:pr-4'>
                  <ItemList items={items} />
                </div>
                <div className='w-full md:w-1/2 md:pl-4'>
                  <ComplexForm />
                </div>
              </div>
            </div>
            <NotificationSystem />
          </div>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
