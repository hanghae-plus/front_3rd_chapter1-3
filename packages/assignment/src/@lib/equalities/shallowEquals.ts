// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (Array.isArray(objA) && Array.isArray(objB)) {
    for (let i = 0; i < Math.max(objA.length, objB.length); i++) {
      if (objA[i] !== objB[i]) {
        return false;
      }
    }
    return true;
  }
  if (typeof objA === "object" && typeof objB === "object") {
    // obj가 null일 때 비교
    if (objA === null && objB === null) {
      return true;
    } else if (objA === null || objB === null) {
      return false;
    }

    for (const i in objA) {
      if (objA[i] !== objB[i]) {
        return false;
      }
    }
    return true;
  }

  return objA === objB;
}
