import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import { NotificationProvider } from "./NotificationContext";

const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>{children}</UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
