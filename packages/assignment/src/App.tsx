import React, { PropsWithChildren } from 'react';
import { Main } from './@lib/pages';
import { NotificationProvider, ThemeProvider, UserProvider } from './@lib/providers';

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
