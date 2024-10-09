import { AuthProvider } from "../contexts/AuthContext";
import { NotificationProvider } from "../contexts/NotificationContext";
import { ThemeProvider } from "../contexts/ThemeContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>{children}</AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default Layout;
