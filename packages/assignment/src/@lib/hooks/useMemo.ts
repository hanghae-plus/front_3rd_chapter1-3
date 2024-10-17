import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
    // 1. 이전 의존성과 결과를 저장할 ref 생성
    const prevDepsRef = useRef<DependencyList | null>(null);
    const calculateValue = useRef<T | null>(null);

    // 메모이제이션된 값 반환
    if (calculateValue.current === null || !equals(prevDepsRef.current, deps)) {
        calculateValue.current = factory();
        prevDepsRef.current = deps;
    }

    return calculateValue.current;
}
