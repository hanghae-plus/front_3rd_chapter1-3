import { useState } from "react";
import { useCallback, useMemo } from "@/@lib";
import { generateItems } from "@/utils";
import { ItemsContext, ItemsContextType } from "./ItemsContext";

type ItemsProviderProps = {
  children: React.ReactNode;
};

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const [filter, setFilter] = useState("");

  const initialItems = useMemo(() => generateItems(100000), []);
  const [items, setItems] = useState(initialItems);

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

  const addItem = useCallback((item: ItemsContextType["items"][number]) => {
    setItems((prev) => [...prev, item]);
  }, []);

  const values: ItemsContextType = useMemo(
    () => ({
      addItem,
      handleSetFilter,
      filter,
      items,
      filteredItems,
      averagePrice,
    }),
    [filter, handleSetFilter, filteredItems, averagePrice, addItem, items]
  );

  return (
    <ItemsContext.Provider value={values}>{children}</ItemsContext.Provider>
  );
};
