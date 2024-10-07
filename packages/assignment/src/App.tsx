import React from 'react';
import { NotificationProvider } from './provider/NotificationProvider';
import { UserProvider } from './provider/UserProvider';
import { ThemeProvider } from './provider/ThemeProvider';
import Layout from './components/Layout';
import HomePage from './pages/home';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <NotificationProvider>
            <Layout>
              <HomePage />
            </Layout>
          </NotificationProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
