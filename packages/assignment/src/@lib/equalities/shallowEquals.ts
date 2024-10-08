// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;

  if (!isObj(objA) || !isObj(objB)) return false;

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (
      !keysB.includes(key) ||
      !Object.is(
        (objA as Record<string, unknown>)[key],
        (objB as Record<string, unknown>)[key]
      )
    ) {
      return false;
    }
  }

  return true;
}

const isObj = (value: unknown) => {
  return value !== null && typeof value === "object";
};
