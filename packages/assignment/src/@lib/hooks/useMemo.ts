import {DependencyList} from "react";
import {shallowEquals} from "../equalities";
import {useRef} from "./useRef.ts";

export function useMemo<T>(factory: () => T | null, deps: DependencyList, equals = shallowEquals): T | null {

    const previousDepsRef = useRef<DependencyList | null>(null);
    const memoizedValueRef = useRef<T | null>(null);
    const shouldUpdate = previousDepsRef === null || !equals(previousDepsRef.current ?? [], deps)

    if (shouldUpdate) {
        previousDepsRef.current = deps;
        memoizedValueRef.current = factory();
    }

    return memoizedValueRef.current;
}
