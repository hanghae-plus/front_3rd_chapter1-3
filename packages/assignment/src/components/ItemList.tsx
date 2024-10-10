import { useState } from "react";
import { renderLog } from "../utils";
import { useSafeContext } from "../hooks/useSafeContext";
import { Theme_e } from "../models/Theme";
import { Contexts } from "../contexts";
import { Item } from "../models/Item";

export const ItemList: React.FC<{ items: Item[] }> = ({ items }) => {
  renderLog("ItemList rendered");

  // ! state
  const [filter, setFilter] = useState("");

  // ! hooks
  const { theme } = useSafeContext(Contexts.Theme);

  // ! const
  const isLightTheme = theme === Theme_e.light;

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
  );

  const averagePrice =
    items.reduce((sum, item) => sum + item.price, 0) / items.length;

  // ! render
  return (
    <div className="mt-8">
      <h2 className={`text-2xl font-bold mb-4`}>상품 목록</h2>
      <input
        type="text"
        placeholder="상품 검색..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
      />
      <p className={`mb-4`}>평균 가격: {averagePrice.toLocaleString()}원</p>
      <ul className="space-y-2">
        {filteredItems.slice(0, 100).map((item) => (
          <li
            key={item.id}
            className={`p-2 rounded shadow ${
              isLightTheme ? "bg-white text-black" : "bg-gray-700 text-white"
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
};
