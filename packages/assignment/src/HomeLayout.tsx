import React, { useState } from "react";
import { NotificationSystem } from "./components/NotificationSystem";
import { ComplexForm } from "./components/ComplexForm";
import { ItemList } from "./components/ItemList";
import { useMemo } from "./@lib";
import { generateItems } from "./utils";
import Header from "./components/Header";

const HomeLayout: React.FC = () => {
  const [items] = useState(useMemo(() => generateItems(10000), []));

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <NotificationSystem />
        <ComplexForm />
        <ItemList items={items} />
      </div>
    </>
  );
};

export default HomeLayout;
