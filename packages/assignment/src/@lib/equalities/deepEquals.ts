// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(targetA: any, targetB: any): boolean {
  if (Object.is(targetA, targetB)) return true;

  if (typeof targetA !== 'object' || targetA === null ||
    typeof targetB !== 'object' || targetB === null) {
    return false;
  }

  const isArrayA = Array.isArray(targetA);
  const isArrayB = Array.isArray(targetB);

  if (isArrayA !== isArrayB) return false;

  if (isArrayA && isArrayB) {
    if (targetA.length !== targetB.length) return false;
    return targetA.every((value, index) => deepEquals(value, targetB[index]))
  }

  const keysA = Object.keys(targetA);
  const keysB = Object.keys(targetB);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(key => deepEquals(targetA[key], targetB[key]));
}
