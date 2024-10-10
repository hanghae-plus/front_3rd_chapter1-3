import React from "react";

import Header from "./layouts/Header";
import MainContent from "./layouts/Main";
import NotificationSystem from "./components/NotificationSystem";
import RootProvider from "./providers";
import Container from "./layouts/Container";

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <RootProvider>
      <Container>
        <Header />
        <MainContent />

        <NotificationSystem />
      </Container>
    </RootProvider>
  );
};

export default App;
