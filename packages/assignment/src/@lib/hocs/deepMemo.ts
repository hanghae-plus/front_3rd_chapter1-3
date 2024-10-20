import { ComponentType } from "react";
import { deepEquals } from "@/@lib/equalities";
import { memo } from "@/@lib/hocs/memo.ts";

export function deepMemo<P extends object>(Component: ComponentType<P>) {
  return memo(Component, deepEquals);
}
