import { ReactNode } from "react";
import useTheme from "../provider/theme/useTheme";

const Layout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"
      }`}
    >
      {children}
    </div>
  );
};

export default Layout;
