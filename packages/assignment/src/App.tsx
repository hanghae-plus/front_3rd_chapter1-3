import React from "react";
import { Header } from "./components/Header";
import { ItemList } from "./components/ItemList";
import { ComplexForm } from "./components/ComplexForm";
import { NotificationSystem } from "./components/NotificationSystem";
import { generateItems } from "./utils";
import { ThemeProvider, UserProvider, NotificationProvider } from "./providers";

/**
 * @description 앱의 최상위 컴포넌트로, 다양한 Provider를 포함한 컴포넌트를 감싸는 역할을 합니다.
 * Theme, User, Notification의 컨텍스트를 제공하며, 상품 목록과 폼, 알림 시스템을 렌더링합니다.
 */
const App: React.FC = () => {
  const items = generateItems(10000);

  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
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
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
