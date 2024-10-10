import { NotificationProvider, ThemeProvider, UserProvider } from "./provider"
import { Main } from "./pages/Main"

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <Main />
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default App
