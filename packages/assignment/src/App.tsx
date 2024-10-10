import React, {useState} from 'react';
import {generateItems} from './utils';
import {Header} from "./components/Header.tsx";
import {UserProvider} from "./context/userContext.tsx";
import {ThemeProvider} from "./context/themeContext.tsx";
import {NotificationProvider} from "./context/notificationContext.tsx";
import {ItemList} from "./components/ItemList.tsx";
import {ComplexForm} from "./components/ComplexForm.tsx";
import {NotificationSystem} from "./components/NotificationSystem.tsx";
import {Layout} from "./components/Layout.tsx";
import {Main} from "./components/Main.tsx";

// 메인 App 컴포넌트
const App: React.FC = () => {
    const [items] = useState(generateItems(10000));

    return (
        <ThemeProvider>
            <NotificationProvider>
                <UserProvider>
                    <Layout>
                        <Header/>
                        <Main>
                            <ItemList items={items}/>
                            <ComplexForm/>
                        </Main>
                    </Layout>
                    <NotificationSystem/>
                </UserProvider>
            </NotificationProvider>
        </ThemeProvider>
    );
};

export default App;
