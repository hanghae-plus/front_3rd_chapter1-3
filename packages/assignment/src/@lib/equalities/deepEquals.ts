import { shallowEquals } from './shallowEquals'

export function deepEquals(objA: unknown, objB: unknown): boolean {
  return shallowEquals(objA, objB, deepEquals)
}
