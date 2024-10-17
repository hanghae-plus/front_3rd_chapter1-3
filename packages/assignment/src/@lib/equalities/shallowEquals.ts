/**
 *
 * @see https://github.com/facebook/react/blob/main/packages/shared/shallowEqual.js
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;

  if (
    objA == null ||
    typeof objA !== 'object' ||
    objB == null ||
    typeof objB !== 'object'
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    const currentKey = keysA[i];

    if (
      !Object.prototype.hasOwnProperty.call(objB, currentKey) ||
      objA[currentKey] !== objB[currentKey]
    ) {
      return false;
    }
  }

  return true;
}
