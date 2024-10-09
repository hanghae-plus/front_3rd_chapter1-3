import React from "react";
import { generateItems } from "./utils";
import { Header } from "./components/Header";
import { ItemList } from "./components/ItemList";
import { ComplexForm } from "./components/ComplexForm";
import { NotificationSystem } from "./components/NotificationSystem";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/userContext";
import { NotificationProvider } from "./context/NotificationContext";

// 메인 App 컴포넌트
const App: React.FC = () => {
  const items = generateItems(10000);

  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>
          <div className="min-h-screen">
            <Header />
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-4">
                  <ItemList items={items} />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <ComplexForm />
                </div>
              </div>
            </div>
          </div>
          <NotificationSystem />
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
