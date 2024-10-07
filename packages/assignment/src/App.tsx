import React, { useState } from "react";
import RootProvider from "./provider/RootProvider";
import { useThemeContext } from "./features/theme/hook/useThemeContext";
import { NotificationSystem } from "./features/notification/components";
import { Header } from "./components";
import { ItemList } from "./features/prodcut/components/ItemList";
import { ComplexForm } from "./features/survey/components/ComplexForm";
import { generateItems } from "./utils";

// 메인 App 컴포넌트
const App: React.FC = () => {
  const { theme } = useThemeContext();
  const [itemList] = useState(generateItems(10000));
  return (
    <RootProvider>
      <div
        className={`min-h-screen ${
          theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"
        }`}
      >
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:pr-4">
              <ItemList itemList={itemList} />
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <ComplexForm />
            </div>
          </div>
        </div>
        <NotificationSystem />
      </div>
    </RootProvider>
  );
};

export default App;
