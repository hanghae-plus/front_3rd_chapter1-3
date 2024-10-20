import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
	// 1. 이전 의존성과 결과를 저장할 ref 생성
	const prevResult = useRef<T>(null as T);
	const prevDeps = useRef<DependencyList | null>(null);

	// 2. 현재 의존성과 이전 의존성 비교
	// 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
	if (!prevDeps.current || !equals(prevDeps.current, deps)) {
		prevResult.current = factory();
		prevDeps.current = deps;
	}

	// 4. 메모이제이션된 값 반환
	return prevResult.current;
}
