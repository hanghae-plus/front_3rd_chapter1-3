import { deepEquals } from "../equalities";
import { FunctionComponent } from "react";
import { memo } from "./memo";

export function deepMemo<P extends object>(
  Component: FunctionComponent<P>,
) {
  return memo(Component, deepEquals);
}
