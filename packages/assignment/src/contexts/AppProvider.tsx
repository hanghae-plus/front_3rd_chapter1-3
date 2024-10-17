import { AuthProvider } from "./auth/AuthProvider";
import { NotificationProvider } from "./notification/NotificationProvider";
import { ThemeProvider } from "./theme/ThemeProvider";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider>
            <NotificationProvider>
                <AuthProvider>{children}</AuthProvider>
            </NotificationProvider>
        </ThemeProvider>
    );
};
