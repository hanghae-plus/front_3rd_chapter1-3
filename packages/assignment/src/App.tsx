import React, { useState } from "react";
import { generateItems } from "./utils";
import { Header } from "./components/Header";
import { NotificationSystem } from "./components/NotificationSystem";
import { ItemList } from "./components/ItemList";
import { ComplexForm } from "./components/ComplexForm";
import { ThemeProvider } from "./providers/ThemeProvider";
import { UserProvider } from "./providers/UserProvider";
import { NotificationProvider } from "./providers/NotificationProvider";

const App: React.FC = () => {
  const [items] = useState(generateItems(10000));

  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <Header />
          <div className={"container mx-auto px-4 py-8"}>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 md:pr-4">
                <ItemList items={items} />
              </div>
              <div className="w-full md:w-1/2 md:pl-4">
                <ComplexForm />
              </div>
            </div>
            <NotificationSystem />
          </div>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
