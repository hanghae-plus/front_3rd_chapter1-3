/* eslint-disable @typescript-eslint/no-explicit-any */
export default function deepEqualObject(
  objA: { [key: string]: any },
  objB: { [key: string]: any },
  equalFunction: (...args: any) => boolean,
  stack?: Map<any, any> | null
) {
  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  if (aKeys.length !== bKeys.length) return false;

  // 순환 참조일 경우
  if (stack?.has(objA) && stack?.has(objB)) {
    return stack.get(objA) === objB;
  }

  stack = stack || new Map();
  stack.set(objA, objB);
  stack.set(objB, objA);

  try {
    for (const key of aKeys) {
      if (!bKeys.includes(key) || !equalFunction(objA[key], objB[key], stack)) {
        return false;
      }
    }
  } finally {
    stack.delete(objA);
    stack.delete(objB);
  }

  return true;
}
