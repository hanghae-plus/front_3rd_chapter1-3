import { useState } from "react";
import { ComplexForm } from "./component/ComplexForm";
import { Header } from "./component/Header";
import { ItemList } from "./component/ItemList";
import { NotificationSystem } from "./component/NotificationSystem";
import { NotificationProvider } from "./component/provider/NotificationProvider";
import { UserProvider } from "./component/provider/UserProvider";
import { Theme } from "./component/Theme";
import { generateItems } from "./utils";
import { ThemeProvider } from "./component/provider/ThemeProvider";

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items] = useState(generateItems(10000));

  return (
    <NotificationProvider>
      <ThemeProvider>
        <UserProvider>
          <Theme>
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
          </Theme>
        </UserProvider>
      </ThemeProvider>
    </NotificationProvider>
  );
};

export default App;
