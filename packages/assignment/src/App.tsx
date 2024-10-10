import React from 'react';

import { NotificationProvider, ThemeProvider, UserProvider } from './provider/index.ts';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <ThemeProvider>
        <UserProvider>
          <Layout/>
        </UserProvider>
      </ThemeProvider>
    </NotificationProvider>
  );
};

export default App;
