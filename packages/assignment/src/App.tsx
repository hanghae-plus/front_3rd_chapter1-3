import React from "react";
import { Header } from "./layouts/Header";
import { NotificationSystem } from "./components/NotificationSystem";
import { ThemeProvider } from "./providers/ThemeProvider";
import { NotificationProvider } from "./providers/NotificationProvider";
import { AuthProvider } from "./providers/AuthProvider";
import Content from "./components/Content";

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <AuthProvider>
        <ThemeProvider>
          <Header />
          <Content />
          <NotificationSystem />
        </ThemeProvider>
      </AuthProvider>
    </NotificationProvider>
  );
};

export default App;
