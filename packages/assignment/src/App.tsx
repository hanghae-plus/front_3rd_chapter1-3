import { LayoutApp } from "./components";
import { ThemeProvider, NotificationProvider } from "./@lib/context/";

const App = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <LayoutApp />
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
