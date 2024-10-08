import React, { useState } from 'react';
import { generateItems } from './utils';
import { ThemeProvider } from './@lib/provider/ThemeProvider';
import { UserProvider } from './@lib/provider/UserProvider';
import { ComplexForm } from './@lib/components/ComplexForm';
import { ItemList } from './@lib/components/ItemList';
import Header from './@lib/components/header';
import { NotifiProvider } from './@lib/provider/NotificationProvider';


// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items] = useState(generateItems(10000));

  return (
      <ThemeProvider>
        <NotifiProvider>
          <UserProvider>
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
          </UserProvider>
        </NotifiProvider>
      </ThemeProvider>
  );
};

export default App;
