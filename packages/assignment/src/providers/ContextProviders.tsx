import React, { PropsWithChildren } from 'react';
import ThemeProvider from './theme/ThemeProvider';
import AuthProvider from './auth/AuthProvider';
import NotificationProvider from './notification/NotificationProvider';

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