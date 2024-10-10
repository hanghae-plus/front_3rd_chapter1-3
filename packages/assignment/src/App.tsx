import React, { useState } from "react";
import { generateItems } from "./utils";
import { ThemeProvider, UserProvider, NotificationProvider } from "./providers";
import { AppContent } from "./AppContent";
import { Layout } from "./components/Layout";

const App: React.FC = () => {
  const [items] = useState(() => generateItems(10000));

  return (
    <NotificationProvider>
      <UserProvider>
        <ThemeProvider>
          <Layout>
            <AppContent items={items} />
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </NotificationProvider>
  );
};

export default App;
