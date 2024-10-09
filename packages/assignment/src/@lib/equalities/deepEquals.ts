// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return true;
  }

  // null 체크: 한쪽이 null이면 같을 수 없으므로 false
  if (
    objA === null ||
    objB === null ||
    typeof objA !== "object" ||
    typeof objB !== "object"
  ) {
    return false;
  }

  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);

  if (isArrayA !== isArrayB) {
    return false; // 배열과 객체는 서로 다름
  }

  if (isArrayA) {
    // 배열일 경우 처리: 길이가 다르면 다르다고 판단
    if (objA.length !== objB.length) {
      return false;
    }

    // 배열 요소를 재귀적으로 비교
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) {
        return false;
      }
    }
  } else {
    // 객체일 경우 처리
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    // 객체의 키 개수가 다른 경우 처리
    if (keysA.length !== keysB.length) {
      return false;
    }

    // Object.prototype.hasOwnProperty를 안전하게 호출
    const hasOwnProp = Object.prototype.hasOwnProperty;

    // 재귀적으로 각 속성에 대해 deepEquals 호출
    for (const key of keysA) {
      if (!hasOwnProp.call(objB, key) || !deepEquals(objA[key], objB[key])) {
        return false;
      }
    }
  }

  return true; // 모든 조건을 만족하면 두 객체는 깊이 비교 시 동일함
}
