import { ThemeContext, ThemeContextType } from "../@lib/context/theme-context";
import { useContextHook } from "../@lib/context/useContextHook";
import { ComplexForm } from "./complex-form";
import { Header } from "./header";
import { ItemList } from "./item-list";
import { NotificationSystem } from "./notification-system";

export const LayoutApp = () => {
  const { theme } = useContextHook<ThemeContextType>({ context: ThemeContext, name: "Theme" });
  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}>
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
      </div>
      <NotificationSystem />
    </div>
  );
};
