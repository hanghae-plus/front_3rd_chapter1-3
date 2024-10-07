import React from 'react';
import { NotificationProvider } from './provider/NotificationProvider';
import { UserProvider } from './provider/UserProvider';
import { ThemeProvider } from './provider/ThemeProvider';
import Layout from './components/Layout';
import HomePage from './pages/home';
import NotificationSystem from './components/NotificationSystem';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <NotificationProvider>
            <Layout>
              <HomePage />
            </Layout>
            <NotificationSystem />
          </NotificationProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
