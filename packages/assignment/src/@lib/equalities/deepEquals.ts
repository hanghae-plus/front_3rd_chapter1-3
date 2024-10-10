// deepEquals 함수는 두 값의 깊은 비교를 수행합니다.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return true;
  }

  if ([null, undefined].includes(objA) || [null, undefined].includes(objB)) {
    return false;
  }

  if (typeof objA !== 'object' || typeof objB !== 'object') {
    return false;
  }

  // 2. 둘 다 객체인 경우:
  // - 객체의 키 개수가 다른 경우 처리
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  // - 재귀적으로 각 속성에 대해 deepEquals 호출
  for (const [aKey, aValue] of Object.entries(objA)) {
    // objB에 objA의 속성이 없거나 값이 다르면 false
    if (!(aKey in objB)) {
      return false;
    }

    if (!deepEquals(aValue, objB[aKey])) {
      return false;
    }
  }

  // 이 부분을 적절히 수정하세요.
  return true;
}
