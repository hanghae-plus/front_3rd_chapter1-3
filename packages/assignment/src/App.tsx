import React, { useState } from "react";
import { NotificationProvider } from "@/providers/notification/NotificationProvider";
import { ThemeProvider } from "@/providers/theme/ThemeProvider";
import { UserProvider } from "@/providers/user/UserProvider";
import ComplexForm from "@/components/ComplexForm";
import Header from "@/components/Header";
import ItemList from "@/components/ItemList";
import NotificationSystem from "@/components/NotificationSystem";
import WrapperComponent from "@/components/WrapperComponent";
import { generateItems } from "@/utils";

const App: React.FC = () => {
  const [items] = useState(generateItems(10000));

  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <WrapperComponent>
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
          </WrapperComponent>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
