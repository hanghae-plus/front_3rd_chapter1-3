import { useState } from "react";
import { useCallback, useMemo } from "@/@lib";
import { generateItems } from "@/utils";
import { ProductsContext, ProductsContextType } from "./ProductsContext";

type ProductsProviderProps = {
  children: React.ReactNode;
};

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState(() => generateItems(100000));

  const handleSetFilter = useCallback((filter: string) => {
    setFilter(filter);
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (item) =>
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.category.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, products]
  );

  const averagePrice = useMemo(
    () => products.reduce((sum, item) => sum + item.price, 0) / products.length,
    [products]
  );

  const addProduct = useCallback(
    (product: ProductsContextType["products"][number]) => {
      setProducts((prev) => [...prev, product]);
    },
    []
  );

  const values: ProductsContextType = useMemo(
    () => ({
      addProduct,
      handleSetFilter,
      filter,
      products,
      filteredProducts,
      averagePrice,
    }),
    [
      filter,
      handleSetFilter,
      filteredProducts,
      averagePrice,
      addProduct,
      products,
    ]
  );

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};
