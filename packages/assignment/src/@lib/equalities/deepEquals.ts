export function deepEquals(objA: unknown, objB: unknown): boolean {
  if (objA === objB) {
    return true;
  }

  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  const _objA = objA as Record<string, unknown>;
  const _objB = objB as Record<string, unknown>;

  const keysA = Object.keys(_objA);
  const keysB = Object.keys(_objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!deepEquals(_objA[key], _objB[key])) {
      return false;
    }
  }
  return true;
}
