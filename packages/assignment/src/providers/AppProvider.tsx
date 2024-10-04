import React, { createContext, PropsWithChildren, useState } from "react";
import { NewsCategory, NewsItem, Notification, User } from "../domain";
import { Theme } from "../theme";
import { useCallback, useMemo } from "../@lib";
import { dummyNewsData } from "../dummies";

export interface AppState {
  theme: Theme;
  user: User | null;
  news: NewsItem[];
  notifications: Notification[];
  category: NewsCategory | null;
  toggleTheme: () => void;
  login: (name: string, email: string) => void;
  logout: () => void;
  addNews: (news: Omit<NewsItem, 'id' | 'likes'>) => void;
  likeNews: (id: number) => void;
  setCategory: (category: NewsCategory | null) => void;
  addNotification: (message: string) => void;
  removeNotification: (id: number) => void;
}

export const AppContext = createContext<AppState>({
  theme: 'light',
  user: null,
  news: [],
  notifications: [],
  category: null,
  toggleTheme: ()=> null,
  login: ()=> null,
  logout: ()=> null,
  addNews: ()=> null,
  likeNews: ()=> null,
  setCategory: ()=> null,
  addNotification: ()=> null,
  removeNotification: ()=> null,
});

// Provider 컴포넌트
export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [user, setUser] = useState<User | null>(null);
  const [news, setNews] = useState<NewsItem[]>(dummyNewsData.slice(0, 3));
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [category, setCategory] = useState<NewsCategory | null>(null);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const login = useCallback((name: string, email: string) => {
    setUser({ name, email });
  }, []);

  const logout = () => {
    setUser(null);
  };

  const addNews = useCallback((newNews: Omit<NewsItem, 'id' | 'likes'>) => {
    setNews(prev => [...prev, { ...newNews, id: Date.now(), likes: 0 }]);
  }, []);

  const likeNews = useCallback((id: number) => {
    setNews(prev => prev.map(item =>
      item.id === id ? { ...item, likes: item.likes + 1 } : item
    ));
  }, []);

  const addNotification = useCallback((message: string) => {
    setNotifications(prev => [...prev, { id: Date.now(), message }]);
  }, []);

  const removeNotification = useCallback((id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  }, []);

  const value: AppState = useMemo(() => ({
    theme,
    user,
    news,
    notifications,
    category,
    toggleTheme,
    login,
    logout,
    addNews,
    likeNews,
    setCategory,
    addNotification,
    removeNotification
  }), [addNews, addNotification, category, likeNews, login, news, notifications, removeNotification, theme, toggleTheme, user]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
