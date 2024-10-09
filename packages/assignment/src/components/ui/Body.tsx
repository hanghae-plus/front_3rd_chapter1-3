import React, { PropsWithChildren } from 'react';

const Body: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">{children}</div>
    </div>
  );
};

export default Body;
