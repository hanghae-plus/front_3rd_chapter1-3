import {
  NotificationProvider,
  ThemeProvider,
  UserProvider,
} from "../context/provider";
import { ItemsProvider } from "./ItemsProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <NotificationProvider>
      <ThemeProvider>
        <UserProvider>
          <ItemsProvider>{children}</ItemsProvider>
        </UserProvider>
      </ThemeProvider>
    </NotificationProvider>
  );
}
