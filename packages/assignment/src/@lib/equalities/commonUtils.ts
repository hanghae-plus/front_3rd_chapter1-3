/* eslint-disable @typescript-eslint/no-explicit-any */
export function compareObjects(
  objA: any,
  objB: any,
  compareValues: (a: any, b: any) => boolean
): boolean {
  if (objA === objB) return true;

  if (objA === null || objB === null) return false;

  if (!isBothObjects(objA, objB)) {
    return false;
  }

  const mapA = new Map(Object.entries(objA));
  const mapB = new Map(Object.entries(objB));

  if (mapA.size !== mapB.size) return false;

  for (const [key, value] of mapA) {
    if (!mapB.has(key)) return false;
    if (!compareValues(value, mapB.get(key))) return false;
  }
  return true;
}

function isBothObjects(objA: any, objB: any): boolean {
  return typeof objA === "object" && typeof objB === "object";
}
