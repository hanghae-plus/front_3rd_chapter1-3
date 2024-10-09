// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;

  if (typeof objA !== "object" || typeof objB !== "object") {
    return false;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;
    for (let i = 0; i < objA.length; i++) {
      if (typeof objA[i] === "object" && typeof objB[i] === "object") {
        if (!deepEquals(objA[i], objB[i])) return false;
      }
    }
  }

  const mapA = new Map(Object.entries(objA));
  const mapB = new Map(Object.entries(objB));

  if (mapA.size !== mapB.size) return false;

  for (const [key, value] of mapA) {
    if (!mapB.has(key)) return false;
    if (!deepEquals(value, mapB.get(key))) return false;
  }

  return true;
}
