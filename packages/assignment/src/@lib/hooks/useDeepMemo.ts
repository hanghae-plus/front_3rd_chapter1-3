import { DependencyList } from "react";
import {deepEquals} from "../equalities";
import {useMemo} from "./useMemo.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  return useMemo(factory,deps,deepEquals);
}
