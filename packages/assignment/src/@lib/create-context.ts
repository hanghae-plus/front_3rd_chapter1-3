import { createContext as createReactContext, useContext as useReactContext } from 'react';

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

interface CreateContextOption<T> {
  name: string;
  errorMessage?: string;
  defaultValue?: T;
}
const getErrorMessage = (name: string) => `use${name} must be used within a ${name}Provider`;

export const createContext = <T>(options: CreateContextOption<T>) => {
  const { name, errorMessage, defaultValue } = options;

  const Context = createReactContext<T | undefined>(defaultValue);
  const useContext = () => {
    const context = useReactContext(Context);
    if (!context) {
      const error = new Error(errorMessage || getErrorMessage(name));
      throw error;
    }
    return context;
  };

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
};
