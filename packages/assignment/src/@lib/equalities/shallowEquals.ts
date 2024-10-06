// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  // 기본 타입 비교
  if (Object.is(objA, objB)) {
    return true;
  }

  // null과 undefined 처리
  if (
    objA === null ||
    objA === undefined ||
    objB === null ||
    objB === undefined
  ) {
    return false;
  }

  // 타입 체크
  if (typeof objA !== typeof objB) {
    return false;
  }

  // 배열 처리
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }
    return objA.every((val, index) => Object.is(val, objB[index]));
  }

  // 객체 처리
  if (typeof objA === "object" && typeof objB === "object") {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    return keysA.every(
      (key) =>
        Object.prototype.hasOwnProperty.call(objB, key) &&
        Object.is(objA[key], objB[key])
    );
  }

  return false;
}
