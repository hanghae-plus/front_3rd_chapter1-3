import { useContext } from "react";

export const useSafeContext = <T>(context: React.Context<T>) => {
  const _context = useContext(context);
  if (!_context)
    throw new Error(`Must be used within a ${context.displayName}`);
  return _context;
};
