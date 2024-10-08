import { LayoutApp } from "./components";
import { ThemeProvider, NotificationProvider, UserProvider } from "./@lib/context/";

const App = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <LayoutApp />
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
