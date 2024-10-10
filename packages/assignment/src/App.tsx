import React, { useState } from "react";
import { generateItems } from "./utils";
import { Header } from "./components/header";
import { ItemList } from "./components/item-list";
import { ComplexForm } from "./components/complex-form";
import { NotificationSystem } from "./components/notification-system";
import { UserProvider } from "./contexts";
import { NotificationProvider } from "./contexts";
import { ThemeProvider } from "./contexts";
import { Layout } from "./components/layout";

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items] = useState(generateItems(10000));

  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <Layout>
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
            <NotificationSystem />
          </Layout>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
