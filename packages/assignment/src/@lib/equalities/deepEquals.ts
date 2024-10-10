// deepEquals 함수는 두 값의 깊은 비교를 수행합니다.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || typeof objB !== 'object' || objA === null || objB === null) {
    return false;
  }

  if (objA.constructor !== objB.constructor) {
    return false;
  }

  // 둘 다 배열일 경우
  if (Array.isArray(objA)) {
    if (objA.length !== objB.length) {
      return false;
    }

    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) {
        return false;
      }
    }

    return true;
  }

  // 둘 다 객체인 경우
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];

    if (!Object.prototype.hasOwnProperty.call(objB, key) || !deepEquals(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
