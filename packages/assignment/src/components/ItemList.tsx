import React, { useState } from "react";
import { renderLog } from "../utils";
import { useTheme } from "../hooks/useTheme";
import { ItemType } from "../types/type";
import { memo } from "../@lib";

/**
 * @components ItemList
 * @description 사용자 입력에 따라 필터링 된 상품 목록과 평균 가격을 표시하는 컴포넌트
 * 상품 목록은 items prop을 통해 받고, 사용자는 상품 이름이나 카테고리를 입력하여 필터링을 진행함
 *
 * @param {{ items: ItemType[] }} props - 컴포넌트에 전달된 props
 * @returns 상품 검색 입력창, 필터링 된 상품 목록, 평균 가격을 포함한 UI를 리턴함
 */

export const ItemList: React.FC<{ items: ItemType[] }> = memo(({ items }) => {
  renderLog("ItemList rendered");
  const { theme } = useTheme(); //useTheme 훅을 사용하여 테마에 따라 UI의 스타일을 조정
  const [filter, setFilter] = useState("");

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
  );

  const averagePrice =
    items.reduce((sum, item) => sum + item.price, 0) / items.length;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">상품 목록</h2>
      <input
        type="text"
        placeholder="상품 검색..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
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
});
