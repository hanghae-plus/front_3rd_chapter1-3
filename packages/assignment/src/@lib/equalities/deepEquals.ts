// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {

  const typeOfA = typeof objA
  const typeOfB = typeof objB

  if (typeOfA !== typeOfB) return false

  // 2. 둘 다 객체인 경우
  if (typeOfA === 'object' && !!objA && !!objB) {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    //    - 객체의 키 개수가 다른 경우 처리
    if (keysA.length !== keysB.length) return false

    //    - 재귀적으로 각 속성에 대해 deepEquals 호출
    for (const key of keysA) {
      if (!deepEquals(objA[key], objB[key])) {
        return false
      }
    }

    return true
  }

  // 1. 기본 타입이거나 null인 경우 처리
  return objA === objB
}
