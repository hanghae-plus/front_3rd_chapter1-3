export type NewsCategory = '정치' | '경제' | '사회' | '문화';

export interface NewsItem {
  id: number;
  title: string;
  category: NewsCategory;
  content: string;
  likes: number;
}

export interface User {
  name: string;
  email: string;
}

export interface Notification {
  id: number;
  message: string;
}
