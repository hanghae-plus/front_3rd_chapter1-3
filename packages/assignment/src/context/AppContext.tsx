// context/AppContext.tsx
import React, { createContext, ReactNode, useContext } from "react";

const AppContext = createContext<undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <AppContext.Provider value={undefined}>{children}</AppContext.Provider>
  );
};
