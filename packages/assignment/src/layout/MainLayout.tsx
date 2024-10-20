import React from "react";
import ComplexForm from "../components/ComplexForm";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import NotificationSystem from "../components/NotificationSystem";
import { useTheme } from "../context/ThemeContext";
import { generateItems } from "../utils";
import { useMemo } from "../@lib";

const MainLayout: React.FC = () => {
  const count = 10000;
  const items = useMemo(() => generateItems(count), [count]);
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"
      }`}
    >
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
    </div>
  );
};

export default MainLayout;
