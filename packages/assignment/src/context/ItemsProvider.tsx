import { createContext, useState } from "react";
import { useCallback, useMemo } from "../@lib";
import { generateItems } from "../utils";

// 타입 정의
interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface ItemsContextType {
  filter: string;
  handleSetFilter: (filter: string) => void;
  filteredItems: Item[];
  averagePrice: number;
  addItem: (item: Item) => void;
}

export const ItemsContext = createContext<ItemsContextType | undefined>(
  undefined
);

type ItemsProviderProps = {
  children: React.ReactNode;
};

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const [filter, setFilter] = useState("");

  const initialItems = useMemo(() => generateItems(100000), []);
  const [items, setItems] = useState<Item[]>(initialItems);

  const handleSetFilter = useCallback((filter: string) => {
    setFilter(filter);
  }, []);

  const filteredItems = useMemo(
    () =>
      items.filter(
        (item) =>
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.category.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, items]
  );

  const averagePrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0) / items.length,
    [items]
  );

  const addItem = useCallback((item: Item) => {
    setItems((prev) => [...prev, item]);
  }, []);

  const values = useMemo(
    () => ({
      addItem,
      handleSetFilter,
      filter,
      filteredItems,
      averagePrice,
    }),
    [filter, handleSetFilter, filteredItems, averagePrice, addItem]
  );

  return (
    <ItemsContext.Provider value={values}>{children}</ItemsContext.Provider>
  );
};
