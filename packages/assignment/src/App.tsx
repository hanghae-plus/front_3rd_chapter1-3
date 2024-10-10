import { useState } from 'react';
import ComplexForm from './components/ComplexForm';
import Header from './components/Header';
import { ItemList } from './components/ItemList';
import NotificationSystem from './components/NotificationSystem';
import {
  ContentWrapper,
  FlexContainer,
  FlexItem,
  PageWrapper
} from './container';
import NotificationProvider from './provider/NotificationProvider';
import ThemeProvider from './provider/ThemeProvider';
import UserProvider from './provider/UserProvider';
import { generateItems } from './utils';

// 메인 App 컴포넌트
function App() {
  const [items] = useState(generateItems(10000));

  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <PageWrapper>
            <Header />
            <ContentWrapper>
              <FlexContainer>
                <FlexItem className="md:pr-4">
                  <ItemList items={items} />
                </FlexItem>
                <FlexItem className="md:pl-4">
                  <ComplexForm />
                </FlexItem>
              </FlexContainer>
            </ContentWrapper>
            <NotificationSystem />
          </PageWrapper>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
