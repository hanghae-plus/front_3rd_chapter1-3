import React, { useCallback, useMemo, useState } from "react";
import { Item } from "../types/Item";
import { renderLog } from "../utils";
import { useTheme } from "../context/useThemeContext";

export const ItemList: React.FC<{ items: Item[] }> = React.memo(
  ({ items }) => {
    renderLog("ItemList rendered");
    const [filter, setFilter] = useState("");
    const { theme } = useTheme();

    const filteredItems = useMemo(() => {
      return items.filter(
        (item) =>
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.category.toLowerCase().includes(filter.toLowerCase())
      );
    }, [items, filter]);

    const averagePrice = useMemo(() => {
      return items.reduce((sum, item) => sum + item.price, 0) / items.length;
    }, [items]);

    const handleFilterChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
      },
      []
    );

    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">상품 목록</h2>
        <input
          type="text"
          placeholder="상품 검색..."
          value={filter}
          onChange={handleFilterChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
        />
        <p className="mb-4">평균 가격: {averagePrice.toLocaleString()}원</p>
        <ul className="space-y-2">
          {filteredItems.slice(0, 100).map((item) => (
            <li
              key={item.id}
              className={`p-2 rounded shadow ${
                theme === "light"
                  ? "bg-white text-black"
                  : "bg-gray-700 text-white"
              }`}
            >
              {item.name} - {item.category} - {item.price.toLocaleString()}원
            </li>
          ))}
        </ul>
        {filteredItems.length > 100 && (
          <p className="mt-4">...그 외 {filteredItems.length - 100}개 상품</p>
        )}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.items === nextProps.items;
  }
);

export default ItemList;
