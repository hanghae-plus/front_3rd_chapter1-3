import { PropsWithChildren } from 'react';
import ThemeProvider from './theme/ThemeProvider';
import NotificationProvider from './notification/NofiticationProvider';
import AuthProvider from './auth/AuthProvider';

const ContextProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>{children}</AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default ContextProviders;
