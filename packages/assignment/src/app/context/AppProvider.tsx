import { NotificationProvider, ThemeProvider, UserProvider } from "./providers";

type AppProviderProps = {
  children: React.ReactNode;
};

const providers = [NotificationProvider, ThemeProvider, UserProvider];

export function AppProvider({ children }: AppProviderProps) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
}
