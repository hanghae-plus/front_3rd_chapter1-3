import { Item } from ".";

// 컴포넌트 Props 타입
export interface LayoutProps {
  children: React.ReactNode;
}

export interface AppContentProps {
  items: Item[];
}
