export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return true; // 값이 같으면 true
  }

  // null이거나 객체가 아닌 경우 (즉, 기본 타입이거나 둘 중 하나가 null인 경우)
  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  // 2. 둘 다 객체인 경우
  // 배열인지 확인
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);

  // 배열 여부가 다르면 false
  if (isArrayA !== isArrayB) {
    return false;
  }

  // 배열인 경우
  if (isArrayA && isArrayB) {
    // 배열 길이가 다르면 false
    if (objA.length !== objB.length) {
      return false;
    }

    // 배열의 각 요소에 대해 재귀적으로 비교
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) {
        return false;
      }
    }
    return true;
  }

  // 배열이 아닌 객체인 경우
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 객체의 키 개수가 다르면 false
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 각 키에 대해 재귀적으로 deepEquals 호출
  for (let key of keysA) {
    // objB가 해당 키를 가지고 있지 않거나 값이 같지 않으면 false
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      !deepEquals(objA[key], objB[key])
    ) {
      return false;
    }
  }

  return true;
}
