import { useContext } from "react";
import { ItemsContext } from "./ItemsContext";

export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(
      "useItemsContext는 ItemsProvider 내부에서 사용해야 합니다."
    );
  }
  return context;
};
