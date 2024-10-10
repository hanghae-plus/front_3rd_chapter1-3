import { deepEquals } from "../equalities";
import { ComponentType, memo } from "react";

export function deepMemo<P extends object>(Component: ComponentType<P>) {
  return memo(Component, deepEquals);
}
