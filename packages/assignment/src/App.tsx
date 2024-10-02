import { AddNewsForm, CategoryFilter, Header, LoginForm, NewsList, NotificationList } from "./components";
import { useNews, useNotification, useTheme, useUser } from "./providers";
import { useCallback, useMemo } from "./@lib";
import { NewsItem } from "./domain";

const App = () => {
  const { user, logout } = useUser();
  const { addNotification } = useNotification();
  const { category, setCategory, likeNews, addNews, filteredNews } = useNews();
  const { theme, toggleTheme } = useTheme();
  const { notifications, removeNotification } = useNotification();

  const handleNewsFormSubmit = useCallback((payload: Pick<NewsItem, 'title' | 'category' | 'content'>) => {
    addNews(payload)
    addNotification(`새 뉴스가 추가되었습니다: ${payload.title}`)
  }, [addNews, addNotification]);

  const newsItemClassName = useMemo(() => theme === 'light' ? 'bg-white' : 'bg-gray-700 text-gray-200', [theme]);

  const themeLabel = useMemo(() => theme === 'light' ? '다크 모드' : '라이트 모드', [theme]);
  const headerClassName = useMemo(() => theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200', [theme]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        themeLabel={themeLabel}
        className={headerClassName}
        notifications={notifications}
        user={user}
        onLogoutClick={logout}
        onToggleThemeClick={toggleTheme}
      />
      <div className="container mx-auto py-8">
        <CategoryFilter value={category} onCategoryClick={setCategory} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <NewsList items={filteredNews} onLikeClick={likeNews} childClassName={newsItemClassName} />
          </div>
          <div>
            <AddNewsForm onSubmit={handleNewsFormSubmit}  />
            <LoginForm/>
          </div>
        </div>
      </div>
      <NotificationList items={notifications} onCloseClick={removeNotification} />
    </div>
  );
};

export default App;
