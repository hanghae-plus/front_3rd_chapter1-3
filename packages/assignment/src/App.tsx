import React, { useState } from 'react';
import { generateItems } from './utils';
import Header from './component/Header';
import ContextProviders from './provider/ContextProviders';
import ItemList from './component/template/ItemList';
import ComplexForm from './component/template/ComplexForm';
import NotificationSystem from './component/template/NotificationSystem';
import Layout from './component/Layout';

const App: React.FC = () => {
  const [items] = useState(() => generateItems(10000));
  return (
    <ContextProviders>
      <Layout>
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
      </Layout>
    </ContextProviders>
  );
};

export default App;
