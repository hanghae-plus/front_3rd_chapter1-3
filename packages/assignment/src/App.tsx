import React, { useState } from "react";
import { generateItems } from "./utils";
import { AppProvider } from "./contexts/AppProvider";
import { ThemeContainer } from "./components/layout/ThemeContainer";
import { Header } from "./components/layout/Header";
import { ItemList } from "./components/ItemList";
import { ComplexForm } from "./components/ComplexForm";

// 메인 App 컴포넌트
const App: React.FC = () => {
    const [items] = useState(generateItems(10000));

    return (
        <AppProvider>
            <ThemeContainer>
                <Header />
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 md:pr-4">
                            <ItemList items={items} />
                        </div>
                        <div className="w-full md:w-1/2 md:pr-4">
                            <ComplexForm />
                        </div>
                    </div>
                </div>
            </ThemeContainer>
        </AppProvider>
    );
};

export default App;
