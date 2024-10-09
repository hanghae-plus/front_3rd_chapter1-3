// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return true;
  }
  if (
    objA == null ||
    objB == null ||
    typeof objA !== "object" ||
    typeof objB !== "object"
  ) {
    return false;
  }

  // 2. 둘 다 객체인 경우
  // 2-1. 둘 다 배열인 경우
  if (Array.isArray(objA) && Array.isArray(objB)) {
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
  // 2-2. 하나만 배열인 경우
  if (Array.isArray(objA) !== Array.isArray(objB)) {
    return false;
  }
  // 2-3. 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (const key of keysA) {
    // 2-4. 키 이름이 다른 경우 처리 (length가 같기 때문에 양방향 체크x)
    if (!Object.hasOwnProperty.call(objB, key)) {
      return false;
    }
    // 2-5. 재귀적으로 각 속성에 대해 deepEquals 호출
    if (!deepEquals(objA[key], objB[key])) {
      return false;
    }
  }
  return true;
}
