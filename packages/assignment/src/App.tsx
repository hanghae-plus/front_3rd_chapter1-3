import React, { useState } from 'react';
import { generateItems } from './utils';
import { ThemeProvider, UserProvider, NotificationProvider } from './contexts';
import { Layout } from './components/templates/Layout';
import { Home } from './pages/Home';

const App: React.FC = () => {
    const [items] = useState(() => generateItems(10000));

    return (
        <NotificationProvider>
            <UserProvider>
                <ThemeProvider>
                    <Layout>
                        <Home items={items} />
                    </Layout>
                </ThemeProvider>
            </UserProvider>
        </NotificationProvider>
    );
};

export default App;
