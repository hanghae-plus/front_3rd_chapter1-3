import { shallowEquals } from "../equalities";
import { Component, ComponentType, FunctionComponent } from "react";

let previousProps: any = null;
let previousComponent: any = null;

export function memo<P extends object>(
	Component: ComponentType<P>,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	equals = shallowEquals
) {
	return function (currentProps: any) {
		if (previousProps && !equals(previousProps, currentProps)) {
			return previousComponent;
		}

		previousProps = currentProps;

		if (typeof Component === "function") {
			previousComponent = (Component as FunctionComponent)(currentProps);
		}

		return previousComponent;
	};
}
