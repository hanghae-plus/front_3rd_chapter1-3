import { createContext, useState, useContext } from "react";
import { useCallback, useMemo } from "../hooks";
import { Item } from "./type";

interface ItemContextType {
  items: Item[];
  filteredItems: (filter: string) => Item[];
  averagePrice: () => number;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<Item[]>([]);

  const filteredItems = useCallback(
    (filter: string) =>
      items.filter(
        (item) =>
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.category.toLowerCase().includes(filter.toLowerCase())
      ),
    [items]
  );

  const averagePrice = useCallback(
    () => items.reduce((sum, item) => sum + item.price, 0) / items.length,
    [items]
  );

  const contextValue = useMemo<ItemContextType>(
    () => ({
      items,
      filteredItems,
      averagePrice,
      setItems,
    }),
    [items, filteredItems, averagePrice]
  );

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};

export const useItemContext = (): ItemContextType => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error("useItemContext must be used within an ItemProvider");
  }
  return context;
};
