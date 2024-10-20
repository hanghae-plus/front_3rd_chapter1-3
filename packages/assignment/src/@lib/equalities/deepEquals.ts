// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;

  if (typeof objA !== typeof objB) return false;

  if (Array.isArray(objA)) {
    if (!Array.isArray(objB)) return false;
    if (objA.length !== objB.length) return false;

    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) {
        return false;
      }
    }
    return true;
  }

  if (typeof objA === "object") {
    if (typeof objB !== "object") return false;
    if (objA === null || objB === null) return false;

    const objBkeys = Object.keys(objB);
    const objAKeys = Object.keys(objA);

    if (objAKeys.length !== objBkeys.length) return false;

    deepEquals(objBkeys, objAKeys);

    for (const [key, value] of Object.entries(objA)) {
      if (!objBkeys.includes(key)) return false;

      if (!deepEquals(value, objB[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
}
