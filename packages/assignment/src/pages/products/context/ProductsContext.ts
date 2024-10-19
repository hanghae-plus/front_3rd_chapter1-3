import { createContext } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface ProductsContextType {
  products: Product[];
  filter: string;
  handleSetFilter: (filter: string) => void;
  filteredProducts: Product[];
  averagePrice: number;
  addProduct: (product: Product) => void;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);
