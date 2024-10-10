import React from 'react';

import Layout from "./components/Layout.tsx";
import {NotificationProvider} from "./provider/NotificationProvider.tsx";
import {ThemeProvider} from "./provider/ThemeProvider.tsx";
import {UserProvider} from "./provider/UserProvider.tsx";

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