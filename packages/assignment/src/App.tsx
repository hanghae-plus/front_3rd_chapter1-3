import React, { useState } from 'react';
import {
  ComplexForm,
  Header,
  ItemList,
  NotificationSystem,
  ThemeContainer,
} from './components';
import { generateItems } from './utils';

const App: React.FC = () => {
  const [items] = useState(generateItems(10000));

  return (
    <ThemeContainer>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <ItemList items={items} />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <ComplexForm />
          </div>
        </div>
      </div>
      <NotificationSystem />
    </ThemeContainer>
  );
};

export default App;
