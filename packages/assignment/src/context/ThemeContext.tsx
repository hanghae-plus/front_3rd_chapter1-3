import { createContext } from 'react';
import { ThemeContextType } from '../types/type'

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
