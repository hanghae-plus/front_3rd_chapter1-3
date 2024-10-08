import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full md:w-1/2 md:pr-4">{children}</div>;
};

export default Layout;
