// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // deepEquals 함수는 두 값의 깊은 비교를 수행합니다.
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return true
  }

  if (objA == null || objB == null || typeof objA !== 'object' || typeof objB !== 'object') {
    return false
  }

  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  const isArrayA = Array.isArray(objA)
  const isArrayB = Array.isArray(objB)

  if (isArrayA !== isArrayB) {
    return false
  }
  //배열 길이 다를 경우 처리
  if (isArrayA) {
    if (objA.length !== objB.length) {
      return false
    }
    //배열 재귀적으로 호출
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) {
        return false
      }
    }
  } else {
    //객체일 경우 처리
    const keysA = Object.keys(objA)
    const keysB = Object.keys(objB)
    //    - 객체의 키 개수가 다른 경우 처리
    if (keysA.length !== keysB.length) {
      return false
    }

    //    - 재귀적으로 각 속성에 대해 deepEquals 호출
    for (const key of keysA) {
      if (!Object.prototype.hasOwnProperty.call(objB, key) || !deepEquals(objA[key], objB[key])) {
        return false
      }
    }
  }

  // 이 부분을 적절히 수정하세요.
  return true
}
