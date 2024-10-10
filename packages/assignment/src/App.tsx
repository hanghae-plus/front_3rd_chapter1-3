import React from "react";
import { UserProvider } from "./@lib/context/UserContext";
import { ThemeProvider } from "./@lib/context/ThemeContext";
import { NotificationProvider } from "./@lib/context/NotificationContext";
import HomeLayout from "./HomeLayout";
import { ItemProvider } from "./@lib/context/ItemContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <ItemProvider>
            <HomeLayout />
          </ItemProvider>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
