// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  if (typeof objA !== typeof objB) return false;

  if (typeof objA === "object" && !!objA && !!objB) {
    return Object.keys(objA).every((key) => deepEquals(objA[key], objB[key]));
  }

  return objA === objB;
}
