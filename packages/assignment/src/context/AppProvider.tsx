import { ItemsProvider } from "./providers/items/ItemsProvider";
import { NotificationProvider } from "./providers/notification/NotificationProvider";
import { ThemeProvider } from "./providers/theme/ThemeProvider";
import { UserProvider } from "./providers/user/UserProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

const providers = [
  NotificationProvider,
  ThemeProvider,
  UserProvider,
  ItemsProvider,
];

export function AppProvider({ children }: AppProviderProps) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
}
