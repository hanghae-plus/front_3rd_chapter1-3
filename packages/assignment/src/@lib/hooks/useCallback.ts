import {DependencyList} from "react";
import {useRef} from "./useRef.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function useCallback<T extends (...args: any[]) => any>(factory: T, deps: DependencyList): T {
    const previousDepsRef = useRef<DependencyList | null>(null)
    const previousFactoryRef = useRef<T | null>(null)

    const shouldUpdate = previousDepsRef.current === null || !previousDepsRef.current.every((value, index) => value === deps[index])

    if (shouldUpdate) {
        previousFactoryRef.current = factory
        previousDepsRef.current = deps
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return previousFactoryRef.current
}
