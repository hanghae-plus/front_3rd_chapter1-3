import { deepEquals } from "../equalities";
import { ComponentType } from "react";
import { memo } from "./";

export function deepMemo<P extends object>(Component: ComponentType<P>) {
	return memo(Component, deepEquals);
}
