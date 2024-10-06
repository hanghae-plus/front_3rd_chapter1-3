import React from "react";

import Header from "@/app/components/Header";
import { AppProvider } from "@/app/context";
import { ProductsPage } from "@/pages";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Header />
      <ProductsPage />
    </AppProvider>
  );
};

export default App;
