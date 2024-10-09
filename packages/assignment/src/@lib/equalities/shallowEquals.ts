import { isObject } from "../../utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  // 두 값이 동일한 경우
  if (objA === objB) return true;

  // null 또는 객체가 아닌 경우
  if (!isObject(objA) || !isObject(objB)) return false;

  // 배열인 경우
  if (Array.isArray(objA) && Array.isArray(objB)) {
    return (
      objA.length === objB.length &&
      objA.every((value, index) => value === objB[index])
    );
  }

  // 객체인 경우
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 키의 개수가 다르면 false
  if (keysA.length !== keysB.length) return false;

  // 각 키에 대해 참조 비교
  for (const key of keysA) {
    if (!keysB.includes(key) || objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}
