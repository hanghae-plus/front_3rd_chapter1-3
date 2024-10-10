import React from "react";
import { ComplexForm, ItemList } from "./components";
import { AppContentProps } from "./types";

// 재사용 가능한 ContentWrapper 컴포넌트
export const ContentWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`w-full ${className}`}>{children}</div>
);

export const AppContent: React.FC<AppContentProps> = React.memo(({ items }) => {
  return (
    <>
      <ContentWrapper className="md:w-1/2 md:pr-4">
        <ItemList items={items} />
      </ContentWrapper>
      <ContentWrapper className="md:w-1/2 md:pl-4">
        <ComplexForm />
      </ContentWrapper>
    </>
  );
});
