import { Context, useContext } from "react";
import { useRef } from "./useRef.ts";

export function useContextSelector<T, S>(
  context: Context<T>,
  selector: (value: T) => S,
  equals = Object.is
): S {
  const value = useContext(context);
  const selectedValue = selector(value);
  const ref = useRef(selectedValue);

  if (!equals(selectedValue, ref.current)) {
    ref.current = selectedValue;
  }

  return ref.current;
}
