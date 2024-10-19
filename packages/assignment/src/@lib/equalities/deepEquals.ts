import { shallowEquals } from '.';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  return shallowEquals(objA, objB, true);
}
