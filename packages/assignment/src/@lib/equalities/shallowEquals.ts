export function shallowEquals(objA: unknown, objB: unknown): boolean {
  if (objA === objB) return true;
  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  )
    return false;
  const keysA = Object.keys(objA as Record<string, unknown>);
  const keysB = Object.keys(objB as Record<string, unknown>);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(
    (key) =>
      Object.prototype.hasOwnProperty.call(objB, key) &&
      (objA as Record<string, unknown>)[key] ===
        (objB as Record<string, unknown>)[key]
  );
}
