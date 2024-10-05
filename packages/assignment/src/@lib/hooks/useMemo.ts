import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(
	factory: () => T,
	deps: DependencyList,
	equals = shallowEquals
): T {
	const ref = useRef<{ depns: DependencyList; result: any }>({
		depns: [],
		result: null,
	});

	if (ref.current.depns.length === 0 && ref.current.result === null) {
		ref.current.result = factory();
		ref.current.depns = deps;
		return ref.current.result;
	}

	if (!equals(ref.current.depns, deps)) {
		ref.current.result = factory();
		ref.current.depns = deps;
	}

	return ref.current.result;
}
