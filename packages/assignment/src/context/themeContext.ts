import { Theme } from '../types';
import { createTypedContext } from '../utils';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const { context: ThemeContext, useContext: useTheme } =
  createTypedContext<ThemeContextType>();
