import React, { useState } from 'react';
import { generateItems } from './utils';
import {
  Header,
  Body,
  Layout,
  Theme,
  ItemList,
  ComplexForm,
  NotificationSystem,
} from './components';
import { NotificationProvider, ThemeProvider, UserProvider } from './provider';

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items] = useState(generateItems(10000));

  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <Theme>
            <Header />
            <Body>
              <Layout>
                <ItemList items={items} />
              </Layout>
              <Layout>
                <ComplexForm />
              </Layout>
            </Body>
            <NotificationSystem />
          </Theme>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
