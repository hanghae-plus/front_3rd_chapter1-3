import { isObject } from "../../utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 두 값이 동일한 경우
  if (objA === objB) return true;

  // null 또는 객체가 아닌 경우
  if (!isObject(objA) || !isObject(objB)) return false;

  // 객체 비교 (배열도 포함)
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEquals(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
