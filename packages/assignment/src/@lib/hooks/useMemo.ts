import { DependencyList } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from './useRef';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
	const currentValue = useRef<T | null>(null);
	const prevDeps = useRef<DependencyList | null>(null);

	if (currentValue.current === null || !equals(deps, prevDeps.current)) {
		currentValue.current = factory();
		prevDeps.current = deps;
	}

	return currentValue.current as T;
}
