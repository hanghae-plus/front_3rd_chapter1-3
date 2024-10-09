// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  const hasPrimitiveValue =
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null;

  if (hasPrimitiveValue) {
    return objA === objB;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }

    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) {
        return false;
      }
    }

    return true;
  }

  const keysOfA = Object.keys(objA);
  const keysOfB = Object.keys(objB);

  if (keysOfA.length !== keysOfB.length) {
    return false;
  }

  for (const key of keysOfA) {
    if (!deepEquals(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
