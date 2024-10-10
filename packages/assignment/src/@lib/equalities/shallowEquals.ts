import { compareObjects } from "./commonUtils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  return compareObjects(objA, objB, (a, b) => a === b);
}
