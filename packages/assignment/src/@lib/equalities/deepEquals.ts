// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // deepEquals 함수는 두 값의 깊은 비교를 수행합니다.
  // 1. 기본 타입이거나 null인 경우 처리
  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  //    - 객체의 키 개수가 다른 경우 처리
  //    - 재귀적으로 각 속성에 대해 deepEquals 호출

  const isEqual = true;

  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return isEqual;
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return !isEqual;
  }

  // 2. 둘 다 객체인 경우:
  // 배열인지 확인
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);

  if (isArrayA !== isArrayB) return !isEqual;

  if (isArrayA && isArrayB) {
    const lengthA = objA.length;
    const lengthB = objB.length;
    if (lengthA !== lengthB) return !isEqual;

    for (let i = 0; i < lengthA; i++) {
      if (!deepEquals(objA[i], objB[i])) return !isEqual;
    }
    return isEqual;
  }

  // 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return !isEqual;

  // 재귀적으로 각 속성에 대해 deepEquals 호출
  for (const key of keysA) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      !deepEquals(objA[key], objB[key])
    )
      return !isEqual;
  }

  return isEqual;
}
