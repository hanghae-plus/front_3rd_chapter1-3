import React from "react";
import {
  ComplexForm,
  Header,
  ItemList,
  NotificationProvider,
  NotificationSystem,
  ThemeProvider,
  UserProvider,
} from "./components";

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <Header />
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 md:pr-4">
                <ItemList />
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
