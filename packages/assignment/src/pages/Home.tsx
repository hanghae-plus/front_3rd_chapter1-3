import React from 'react';
import { ComplexForm, ItemList } from '../components';
import { AppContentProps } from '../types';

export const Home: React.FC<AppContentProps> = React.memo(({ items }) => {
    return (
        <>
            <div className="w-full md:w-1/2 md:pr-4">
                <ItemList items={items} />
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
                <ComplexForm />
            </div>
        </>
    );
});
