import React, { useState } from 'react';
import { generateItems } from './utils';
import ComplexForm from './components/ComplexForm';
import NotificationSystem from './components/NotificationSystem';
import Header from './components/layouts/Header';
import ItemList from './components/ItemList';
import ThemeProvider from './components/providers/ThemeProvider';
import DefaultLayout from './components/layouts/DefaultLayout';
import NotificationProvider from './components/providers/NotificationProvider';
import UserProvider from './components/providers/UserProvider';

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items] = useState(generateItems(10000));

  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <DefaultLayout>
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
          </DefaultLayout>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
