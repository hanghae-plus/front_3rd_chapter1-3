import { AddNewsForm, CategoryFilter, Header, LoginForm, NewsList, NotificationList } from "./components";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <div className="container mx-auto py-8">
        <CategoryFilter/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <NewsList/>
          </div>
          <div>
            <AddNewsForm/>
            <LoginForm/>
          </div>
        </div>
      </div>
      <NotificationList/>
    </div>
  );
};

export default App;
