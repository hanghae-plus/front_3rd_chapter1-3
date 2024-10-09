import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  const ref = useRef<{
    deps: DependencyList;
    result:T;
    initialized: boolean;
    
  }>({ deps: [] as unknown as DependencyList,
    result: null as unknown as T,
    initialized: false })

    //의존성 비교 
    const depsChanged = !ref.current.initialized || !equals(ref.current.deps, deps);

    if(depsChanged){
      ref.current.deps = deps;
      ref.current.result = factory();
      ref.current.initialized = true;
    }
    return ref.current.result;
}
