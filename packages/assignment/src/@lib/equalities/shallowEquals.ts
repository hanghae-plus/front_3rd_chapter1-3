/**
 *
 * @param objA
 * @param objB
 * @returns
 */

import { has, isObject, keys } from '../lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(valueA: any, valueB: any): boolean {
  if (valueA === valueB) {
    return true;
  }

  if (!isObject(valueA) || !isObject(valueB)) {
    return false;
  }

  const keysA = keys(valueA);
  const keysB = keys(valueB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  return keysA.every((key) => has(valueB, key) && valueA[key] === valueB[key]);
}
