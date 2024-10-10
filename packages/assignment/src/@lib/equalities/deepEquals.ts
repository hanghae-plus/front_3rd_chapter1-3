import { compareObjects } from "./commonUtils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  return compareObjects(objA, objB, deepEquals);
}
