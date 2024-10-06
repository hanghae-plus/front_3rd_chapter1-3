import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  const prevDepsRef = useRef<DependencyList | undefined>(undefined);
  const resultRef = useRef<T | undefined>(undefined); 

  const isSameDeps = prevDepsRef.current !== undefined && equals(prevDepsRef.current, deps);

  if (!isSameDeps) {
    resultRef.current = factory(); 
    prevDepsRef.current = deps; 
  }

  return resultRef.current as T;
}
