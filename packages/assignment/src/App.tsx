import React from "react";
import AppProviders from "./context/AppProvider";
import MainLayout from "./layout/MainLayout";

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <AppProviders>
      <MainLayout />
    </AppProviders>
  );
};

export default App;
