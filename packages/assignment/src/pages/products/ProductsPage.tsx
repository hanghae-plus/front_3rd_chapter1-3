import { ProductPanel, ProductAddForm } from "./components";
import { ProductsProvider } from "./context/ProductsProvider";

export default function ProductsPage() {
  return (
    <ProductsProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <ProductPanel />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <ProductAddForm />
          </div>
        </div>
      </div>
    </ProductsProvider>
  );
}
