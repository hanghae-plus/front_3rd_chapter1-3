// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (Array.isArray(objA) && Array.isArray(objB)) {
    return objA.every((item, index) => item === objB[index]);
  }
  if (typeof objA === "object" && typeof objB === "object") {
    for (const i in objA) {
      if (objA[i] !== objB[i]) {
        return false;
      }
    }
    return true;
  }

  return objA === objB;
}
