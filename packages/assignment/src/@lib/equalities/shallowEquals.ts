// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;

  if (objA == null || objB == null) return false;

  if (typeof objA !== 'object' || typeof objB !== 'object') {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  return Object.entries(objA).every(
    ([key, value]) =>
      Object.hasOwnProperty.call(objB, key) && objB[key] === value
  );
}
