/* eslint-disable @typescript-eslint/no-explicit-any */
export function deepEquals(objA: any, objB: any): boolean {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  const hasOwnProp = Object.prototype.hasOwnProperty;

  for (let i = 0; i < keysA.length; i++) {
    const currentKey = keysA[i];

    if (!hasOwnProp.call(objB, currentKey)) {
      return false;
    }

    const valueA = objA[currentKey];
    const valueB = objB[currentKey];

    const isObjectA = typeof valueA === "object" && valueA !== null;
    const isObjectB = typeof valueB === "object" && valueB !== null;

    if (isObjectA && isObjectB) {
      if (!deepEquals(valueA, valueB)) {
        return false;
      }
    } else if (!Object.is(valueA, valueB)) {
      return false;
    }
  }

  return true;
}
