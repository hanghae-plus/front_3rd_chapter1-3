import React, { useState } from 'react';
import { Item } from './types';
import { generateItems } from './utils';
import {
  AuthProvider,
  NotificationProvider,
  ThemeProvider,
} from './components/providers';
import {
  ComplexForm,
  Header,
  ItemList,
  NotificationSystem,
} from './components/ui';

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items] = useState<Item[]>(() => generateItems(1000));

  return (
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>
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
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
