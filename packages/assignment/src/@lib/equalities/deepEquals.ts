// deepEquals 함수는 두 값의 깊은 비교를 수행합니다.
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) return true;
  if (objA == null || objB == null) return false;
  if (typeof objA !== "object" || typeof objB !== "object") return false;

  // 2. 둘 다 객체인 경우:
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);

  // 배열 여부 확인
  if (isArrayA !== isArrayB) return false;

  // 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  // 3. 재귀적으로 각 속성에 대해 deepEquals 호출
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEquals(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
