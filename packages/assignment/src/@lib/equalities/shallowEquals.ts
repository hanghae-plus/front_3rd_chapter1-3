// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || typeof objB !== "object" || objA === null || objB === null) {
    return false;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }
    for (let i = 0; i < objA.length; i++) {
      if (objA[i] !== objB[i]) {
        return false;
      }
    }
    return true;
  }

  if (Array.isArray(objA) !== Array.isArray(objB)) {
    return false;
  }

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }
  
  for (const key of Object.keys(objA)) {
    if (!Object.prototype.hasOwnProperty.call(objB, key) || objA[key] !== objB[key]) {
      return false;
    }
  };
  
  return true;
}