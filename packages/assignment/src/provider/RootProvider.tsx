import ThemeContextProvider from "../features/theme/provider/ThemeContextProvider";
import NotificationContextProvider from "../features/notification/provider/NotificationContextProvider";
import AuthContextProvider from "../features/auth/provider/AuthContextProvider";

type Props = {
  children: React.ReactNode;
};

export default function RootProvider({ children }: Props) {
  return (
    <ThemeContextProvider>
      <NotificationContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </NotificationContextProvider>
    </ThemeContextProvider>
  );
}
