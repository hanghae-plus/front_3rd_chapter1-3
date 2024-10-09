import { useThemeContext } from "@/app/context";
import { renderLog } from "@/utils";
import { useProductsContext } from "../context/useProductsContext";

export default function ProductPanel() {
  renderLog("ItemList rendered");
  const { theme } = useThemeContext();
  const { filter, filteredProducts, averagePrice, handleSetFilter } =
    useProductsContext();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">상품 목록</h2>
      <input
        type="text"
        placeholder="상품 검색..."
        value={filter}
        onChange={(e) => handleSetFilter(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
      />
      <p className="mb-4">평균 가격: {averagePrice.toLocaleString()}원</p>
      <ul className="space-y-2">
        {filteredProducts.slice(0, 100).map((item) => (
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
      {filteredProducts.length > 100 && (
        <p className="mt-4">...그 외 {filteredProducts.length - 100}개 상품</p>
      )}
    </div>
  );
}
