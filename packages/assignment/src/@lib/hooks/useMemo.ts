import {DependencyList} from "react";
import {shallowEquals} from "../equalities";
import {useRef} from "./useRef.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
    const funcMemo = useRef<T>();
    const depsMemo = useRef<DependencyList | []>([]);
    if ((!funcMemo.current && depsMemo.current.length === 0) || !equals(deps, depsMemo.current)) {
        depsMemo.current = deps;
        funcMemo.current = factory();
        return funcMemo.current;
    }
    return funcMemo.current;
}
