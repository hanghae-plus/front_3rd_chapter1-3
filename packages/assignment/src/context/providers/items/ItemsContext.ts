import { createContext } from "react";

interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface ItemsContextType {
  items: Item[];
  filter: string;
  handleSetFilter: (filter: string) => void;
  filteredItems: Item[];
  averagePrice: number;
  addItem: (item: Item) => void;
}

export const ItemsContext = createContext<ItemsContextType | undefined>(
  undefined
);
