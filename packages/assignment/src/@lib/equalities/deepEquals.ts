import { has, isArray, isNull, isObject, keys } from '../lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(valueA: any, valueB: any): boolean {
  if (valueA === valueB) {
    return true;
  }

  if (isNull(valueA) || isNull(valueB)) {
    return false;
  }

  if (isArray(valueA) && isArray(valueB)) {
    return (
      valueA.length === valueB.length &&
      valueA.every((item, index) => deepEquals(item, valueB[index]))
    );
  }

  if (isArray(valueA) || isArray(valueB)) {
    return false;
  }

  if (!isObject(valueA) || !isObject(valueB)) {
    return false;
  }

  const keysA = keys(valueA);
  const keysB = keys(valueB);

  return (
    keysA.length === keysB.length &&
    keysA.every(
      (key) => has(valueB, key) && deepEquals(valueA[key], valueB[key])
    )
  );
}
