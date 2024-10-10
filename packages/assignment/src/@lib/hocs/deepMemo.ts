import { deepEquals } from "../equalities";
import { ComponentType } from "react";
import { memo } from "./memo.ts";

export function deepMemo<P extends object>(Component: ComponentType<P>) {
  //깊은걸 통해서
  return memo(Component, deepEquals);
}
