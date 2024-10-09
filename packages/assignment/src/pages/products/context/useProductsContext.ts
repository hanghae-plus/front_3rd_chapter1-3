import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      "useProductsContext는 ProductsProvider 내부에서 사용해야 합니다."
    );
  }
  return context;
};
