import React, { useState } from "react";
import { generateItems } from "./utils";
import { ThemeProvider, UserProvider, NotificationProvider } from "./context";
import { AppContent } from "./AppContent";

const App: React.FC = () => {
  const [items] = useState(() => generateItems(10000));

  return (
    <NotificationProvider>
      <UserProvider>
        <ThemeProvider>
          <AppContent items={items} />
        </ThemeProvider>
      </UserProvider>
    </NotificationProvider>
  );
};

export default App;
