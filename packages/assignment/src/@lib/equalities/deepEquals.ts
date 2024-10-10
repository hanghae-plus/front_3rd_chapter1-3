// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return true; // 동일한 참조이거나 값이 같은 경우
  }

  if (
    objA == null ||
    objB == null ||
    (typeof objA !== "object" && typeof objB !== "object")
  ) {
    return false; // 둘 중 하나가 null이거나 기본 타입인 경우
  }

  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);

  if (isArrayA !== isArrayB) {
    return false; // 둘 중 하나는 배열이고 다른 하나는 객체인 경우
  }

  //    - 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false; // 키 개수가 다르면 false
  }

  //    - 재귀적으로 각 속성에 대해 deepEquals 호출
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEquals(objA[key], objB[key])) {
      return false; // 키가 없거나 값이 같지 않으면 false
    }
  }

  return true; // 모든 검사를 통과하면 true
}
