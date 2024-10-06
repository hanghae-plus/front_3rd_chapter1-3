import { ComponentType } from 'react';
import { deepEquals } from "../equalities";
import { memo } from "./memo.tsx";

export function deepMemo<P extends object>(Component: ComponentType<P>): ComponentType<P> {
  return memo(Component, deepEquals);
}