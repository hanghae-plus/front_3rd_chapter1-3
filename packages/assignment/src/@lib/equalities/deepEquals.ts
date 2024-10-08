// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  if (objA === objB) {
    return true;
  }

  if (objA == null || objB == null) {
    return false;
  }

  if (typeof objA !== "object" || typeof objB !== "object") {
    return objA === objB;
  }

  // 유사배열 유무 비교
  if (Array.isArray(objA) !== Array.isArray(objB)) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!keysB.includes(key)) {
      return false;
    }

    if (!deepEquals(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
