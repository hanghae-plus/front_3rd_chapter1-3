import { createContext, useContext } from "react";
import { User } from "../types";

interface UserContextType {
	user: User | null;
	login: (email: string, password: string) => void;
	logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) throw new Error("useUser must be used within a UserProvider");
	return context;
};
