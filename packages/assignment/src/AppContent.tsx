import React from "react";
import { Item } from "./types";
import { useTheme } from "./hooks";
import {
  ComplexForm,
  Header,
  ItemList,
  NotificationSystem,
} from "./components";

export const AppContent: React.FC<{ items: Item[] }> = React.memo(
  ({ items }) => {
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
  }
);
