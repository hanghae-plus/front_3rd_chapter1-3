import React, { useState } from 'react';
import { memo } from './@lib';
import { RootProviders } from './providers';
import { Header, ItemList, NotificationSystem, ComplexForm } from './components';
import { generateItems } from './utils';

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items] = useState(generateItems(10000));

  const MemoizedItemList = memo(ItemList);

  return (
    <RootProviders>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <MemoizedItemList items={items} />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <ComplexForm />
          </div>
        </div>
        <NotificationSystem />
      </div>
    </RootProviders>
  );
};

export default App;
