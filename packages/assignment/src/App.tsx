import React, { useState } from 'react';
import { generateItems } from './utils';
import { Header } from './components/Header';
import { ItemList } from './components/ItemList';
import { ComplexForm } from './components/ComplexForm';
import { NotificationSystem } from './components/NotificationSystem';
import { ThemeProvider } from './contexts/ThemeProvider';
import { UserProvider } from './contexts/UserProvider';
import { NotiProvider } from './contexts/NotiProvider';
import { DefaultLayout } from './components/DefaultLayoutl';

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items] = useState(generateItems(10000));

  return (
    <ThemeProvider>
      <NotiProvider>
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
      </NotiProvider>
    </ThemeProvider>
  );
};

export default App;
