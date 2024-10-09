// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) {
    return true;
  }

  const hasPrimitiveValue =
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null;

  if (hasPrimitiveValue) {
    return false;
  }

  const keysOfA = Object.keys(objA);
  const keysOfB = Object.keys(objB);

  if (keysOfA.length !== keysOfB.length) {
    return false;
  }

  for (const key of keysOfA) {
    const isComparisonTargetSame =
      Object.prototype.hasOwnProperty.call(objB, key) &&
      objA[key] === objB[key];

    if (!isComparisonTargetSame) {
      return false;
    }
  }

  return true;
}
