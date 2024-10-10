import { generateItems } from './utils';
import { AuthProvider, NotificationProvider, ThemeProvider } from './providers';
import Header from './components/Header';
import ItemList from './components/ItemList';
import ComplexForm from './components/ComplexForm';
import NotificationSystem from './components/NotificationSystem';
import ThemeWrapper from './components/ThemeWrapper';

// NotificationSystem 컴포넌트

// 메인 App 컴포넌트
const App = () => {
  const items = generateItems(10000);

  return (
    <NotificationProvider>
      <AuthProvider>
        <ThemeProvider>
          <ThemeWrapper>
            <Header />
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-4">
                  <ItemList items={items} />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <ComplexForm />
                </div>
              </div>
            </div>
            <NotificationSystem />
          </ThemeWrapper>
        </ThemeProvider>
      </AuthProvider>
    </NotificationProvider>
  );
};

export default App;
