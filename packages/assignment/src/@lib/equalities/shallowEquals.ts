// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;

  if (typeof objA !== typeof objB) return false;

  if (typeof objA !== "object" || typeof objB !== "object") return false;

  if (objA === null || objB === null) return false;

  if (Array.isArray(objA)) {
    if (objA.length !== objB.length) return false;
    return objA.filter((item) => objB.includes(item)).length === objA.length;
  }

  const intersection: any[] = [];
  const keys = Object.keys(objB);

  for (const [key, value] of Object.entries(objA)) {
    if (keys.includes(key)) {
      if (objB[key] === value) {
        intersection.push(key);
      }
    }
  }

  return intersection.length === keys.length;
}
