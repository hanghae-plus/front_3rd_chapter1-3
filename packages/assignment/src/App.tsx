import React from 'react';
import { ThemeProvider } from './provider/ThemeProvider'
import { UserProvider } from './provider/UserProvider'
import { NotificationProvider } from './provider/NotificationProvider'
import { Header } from './components/Header';
import { ItemList } from './components/ItemList';
import { ComplexForm } from './components/ComplexForm';
import { NotificationSystem } from './components/NotificationSystem';
import { ThemeComponent } from './components/ThemeComponent';
import { generateItems } from './utils';

const App: React.FC = () => {
  const items = generateItems(10000);

  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <ThemeComponent>
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
          </ThemeComponent>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;