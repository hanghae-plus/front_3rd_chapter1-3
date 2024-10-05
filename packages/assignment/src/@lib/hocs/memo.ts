import { shallowEquals } from "../equalities";
import { ComponentType } from "react";

export function memo<P extends object>(
	Component: ComponentType<P>,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	equals = shallowEquals
) {
	let prevProps = null;
	let memoizedComponent = null;

	return function (props) {
		if (prevProps === null || !equals(prevProps, props)) {
			memoizedComponent = Component(props);
		}

		prevProps = props;
		return memoizedComponent;
	};
}
