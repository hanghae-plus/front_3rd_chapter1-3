import { useContext } from "react";

interface UseContextHookProps<T> {
  context: React.Context<T | null>;
  name: string;
}

// context선언 후 null 체크
export const useContextHook = <T,>({ context, name }: UseContextHookProps<T>) => {
  const result = useContext(context);
  if (result === null) {
    throw new Error(`use${name} must be used within a ${name}Provider`);
  }
  return result;
};
