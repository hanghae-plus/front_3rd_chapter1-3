// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) return true;

  // 2. 둘 다 객체인 경우:
  if (typeof objA !== 'object' || typeof objB !== 'object') {
    return false;
  }
  //    - 배열인지 확인
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);

  console.log(isArrayA, isArrayB);
  if (isArrayA !== isArrayB) {
    return false;
  }
  //    - 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  console.log(keysA, keysB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  //    - 재귀적으로 각 속성에 대해 deepEquals 호출
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEquals(objA[key], objB[key])) {
      return false;
    }
  }
  // 이 부분을 적절히 수정하세요.
  return true;
}
