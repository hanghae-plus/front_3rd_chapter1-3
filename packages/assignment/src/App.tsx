import React, { useState } from "react";
import { generateItems } from "./utils";
import { useMemo } from "./@lib";
import { NotificationProvider, ThemeProvider, UserProvider } from "./providers";
import { ComplexForm, Header, ItemList } from "./components";

const AppContent: React.FC = () => {
	const [items] = useState(useMemo(() => generateItems(10000), []));

	return (
		<>
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
		</>
	);
};
const App: React.FC = () => {
	return (
		<ThemeProvider>
			<NotificationProvider>
				<UserProvider>
					<AppContent />
				</UserProvider>
			</NotificationProvider>
		</ThemeProvider>
	);
};

export default App;
