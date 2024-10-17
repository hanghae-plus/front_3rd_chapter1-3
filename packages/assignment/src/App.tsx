import React from "react";
import { NotificationProvider, ThemeProvider, UserProvider } from "./providers";
import Home from "./Home";

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <Home />
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
