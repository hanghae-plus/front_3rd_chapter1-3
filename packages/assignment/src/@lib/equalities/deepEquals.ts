// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  if (typeof objA !== typeof objB) return false;

  if (typeof objA === "object" && !!objA && !!objB) {
    const objAKeys = Object.keys(objA);
    const objBKeys = Object.keys(objB);

    if (objAKeys.length !== objBKeys.length) return false;

    return objAKeys.every((key) => deepEquals(objA[key], objB[key]));
  }

  return objA === objB;
}
