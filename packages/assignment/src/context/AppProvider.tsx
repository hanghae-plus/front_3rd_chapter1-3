import {
  NotificationProvider,
  ThemeProvider,
  UserProvider,
  ItemsProvider,
} from "./providers";

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
