// deepEquals 함수는 두 값의 깊은 비교를 수행합니다.
export function deepEquals(objA: any, objB: any): boolean {
  if (objA === objB) {
    return true;
  }
  // 1. 기본 타입이거나 null인 경우 처리
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  //    - 객체의 키 개수가 다른 경우 처리
  //    - 재귀적으로 각 속성에 대해 deepEquals 호출

  // 배열 비교
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }

    // 각 요소를 재귀적으로 비교
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) {
        return false;
      }
    }
    return true;
  }
  // 객체 비교
  const keys1 = Object.keys(objA);
  const keys2 = Object.keys(objB);

  // 객체의 키 개수가 다르면 false
  if (keys1.length !== keys2.length) {
    return false;
  }

  // 각 키를 순회하면서 재귀적으로 비교
  for (let key of keys1) {
    if (!deepEquals(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
