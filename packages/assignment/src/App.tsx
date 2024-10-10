import AppContent from "./component/AppContent";
import { NotificationProvider } from "./context/useNotificationContext";
import { ThemeProvider } from "./context/useThemeContext";
import { UserProvider } from "./context/useUserConText";

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>
          <AppContent />
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
