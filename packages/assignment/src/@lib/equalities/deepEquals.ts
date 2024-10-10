// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return true;
  }

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리 (null 또는 undefined 포함)
  if (objA === null || objB === null) {
    return false;
  }

  if (typeof objA !== "object" || typeof objB !== "object") {
    return false;
  }

  // 3. 둘 다 객체인 경우 처리
  // - 배열인지 확인

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  //길이비교
  if (keysA.length !== keysB.length) {
    return false;
  }

  //
  for (let key of keysA) {
    if (!keysB.includes(key)) {
      return false;
    }

    if (!deepEquals(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
