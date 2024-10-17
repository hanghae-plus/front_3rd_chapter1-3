import { FC, PropsWithChildren } from "react";
import { useThemeContext } from "./@lib";

const Theme: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}>{children}</div>
  );
};

export default Theme;
