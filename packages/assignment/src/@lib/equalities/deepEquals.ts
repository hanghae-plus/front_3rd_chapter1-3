// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  if (isPrimitive(objA) && isPrimitive(objB)) {
    return objA === objB;
  } else if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;
    else {
      for (let i in objA) {
        if (objA[i] !== objB[i]) {
          if (typeof objA[i] === "object" && typeof objB[i] === "object") {
            return deepEquals(objA[i], objB[i]);
          }
          return false;
        }
      }
      return true;
    }
  } else {
    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);
    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (let k of aKeys) {
      if (objA[k] !== objB[k]) {
        if (typeof objA[k] === "object" && typeof objB[k] === "object") {
          return deepEquals(objA[k], objB[k]);
        }
        return false;
      }
    }
    return true;
  }
}

function isPrimitive(val: any) {
  return val === null || typeof val !== "object";
}

// function isNestedArray(arr: any) {
//   if (!Array.isArray(arr)) return false;
//   for (let i in arr) {
//     if (Array.isArray(arr[i])) {
//       return true;
//     }
//   }
//   return false;
// }
