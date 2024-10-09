import React, { PropsWithChildren, useState } from 'react';
import { useTheme } from './@lib';
import { ComplexForm, Header, ItemList, NotificationSystem } from './@lib/components';
import { NotificationProvider, ThemeProvider, UserProvider } from './@lib/providers';
import { generateItems } from './utils';
import { Main } from './@lib/pages';

export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
}

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};

export default App;
