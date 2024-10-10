export function deepEquals(objA: unknown, objB: unknown): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) return true;

  // 2. 둘 다 객체인 경우:
  if (typeof objA !== "object" || typeof objB !== "object") return false;

  //    - 배열인지 확인
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);

  if (isArrayA !== isArrayB) return false;

  //    - 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA as object);
  const keysB = Object.keys(objB as object);

  if (keysA.length !== keysB.length) return false;

  //    - 재귀적으로 각 속성에 대해 deepEquals 호출
  const keysBSet = new Set(keysB);

  for (const key of keysA) {
    if (!keysBSet.has(key)) return false;

    if (
      !deepEquals(
        (objA as Record<string, unknown>)[key],
        (objB as Record<string, unknown>)[key]
      )
    )
      return false;
  }

  return true;
}
