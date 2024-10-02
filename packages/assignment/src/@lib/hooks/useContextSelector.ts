import { Context, useContext } from "react";

export function useContextSelector<T, S>(
  context: Context<T>,
  selector: (value: T) => S,

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = Object.is
): S {
  const value = useContext(context);
  return selector(value);
}
