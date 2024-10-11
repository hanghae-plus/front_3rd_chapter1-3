import {DependencyList} from "react";
import {shallowEquals} from "../equalities";
import {useMemo} from "./useMemo.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
export function useCallback<T extends (...args: any[]) => any>(factory: T, deps: DependencyList): T {
    const callback = useMemo(()=> factory, deps, shallowEquals);
    return callback as T
}
