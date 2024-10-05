import { useContext } from "react";
import { NotificationContext } from "./NotificationProvider";
import { UserContext } from "./UserProvider";
import { ThemeContext } from "./ThemeProvider";
import { ItemsContext } from "./ItemsProvider";

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider"
    );
  }
  return context;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useItemsContext must be used within a ItemsProvider");
  }
  return context;
};
