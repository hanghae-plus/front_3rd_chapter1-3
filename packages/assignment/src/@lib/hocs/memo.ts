import { shallowEquals } from "../equalities";
import {
	Component,
	ComponentType,
	FunctionComponent,
	ReactElement,
} from "react";

export function memo<P extends object>(
	Component: ComponentType<P>,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	equals = shallowEquals
) {
	let previousProps: any = null;
	let previousComponent: ReactElement | null = null;

	return function (currentProps: any) {
		if (previousProps !== null && equals(previousProps, currentProps)) {
			return previousComponent;
		}

		previousProps = currentProps;

		if (typeof Component === "function") {
			previousComponent = (Component as FunctionComponent)(currentProps);
		}

		return previousComponent;
	};
}
