// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (typeof objA !== typeof objB) return false;

  if (typeof objA === "object" && !!objA && !!objB) {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) return false;

    return Object.keys(objA).every((key) => objA[key] === objB[key]);
  }

  return objA === objB;
}
