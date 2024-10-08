import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import { NotificationProvider } from "./NotificationContext";

const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
