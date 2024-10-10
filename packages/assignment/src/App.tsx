import React from "react";

import Header from "./layouts/Header";
import MainContent from "./layouts/Main";
import NotificationSystem from "./components/NotificationSystem";
import RootProvider from "./providers";

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <RootProvider>
      <Header />
      <MainContent />

      <NotificationSystem />
    </RootProvider>
  );
};

export default App;
