import React, { useState } from "react";
import { NotificationSystem } from "./components/NotificationSystem";
import { ComplexForm } from "./components/ComplexForm";
import { ItemList } from "./components/ItemList";
import { useMemo } from "./@lib";
import { generateItems } from "./utils";
import Header from "./components/Header";
import { useThemeContext } from "./@lib/context/ThemeContext";

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      {children}
    </div>
  );
};

const HomeLayout: React.FC = () => {
  const [items] = useState(useMemo(() => generateItems(10000), []));

  return (
    <ThemeWrapper>
      <Header />
      <NotificationSystem />
      <ComplexForm />
      <ItemList items={items} />
    </ThemeWrapper>
  );
};

export default HomeLayout;
