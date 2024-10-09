// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;

  if (typeof objA !== "object" || typeof objB !== "object") {
    return false;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    return objA.every((value, index) => value === objB[index]);
  }

  const mapA = new Map(Object.entries(objA));
  const mapB = new Map(Object.entries(objB));

  if (mapA.size !== mapB.size) return false;

  for (const [key, value] of mapA) {
    if (!mapB.has(key)) return false;
    if (value !== mapB.get(key)) return false;
  }
  return true;
}
