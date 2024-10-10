export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return true;
  }

  // 2. 둘 다 객체인지 확인
  if ((!objA && objB && typeof objA !== 'object' || typeof objB !== 'object')) {
    return false;
  }

  // 3. 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // 3. 재귀적으로 각 속성에 대해 깊은 비교 수행
  return keysA.every(key => {
    const dataA = objA[key];
    const dataB = objB[key];

    // - 배열인지 확인하고, 배열이면 요소를 순서대로 비교
    if (Array.isArray(dataA) && Array.isArray(dataB)) {
      if (dataA.length !== dataB.length) {
        return false;
      }
      return dataA.every((item, index) => deepEquals(item, dataB[index]));
    }

    // - 배열이 아닌 경우 일반 객체/기본 타입으로 비교
    return deepEquals(dataA, dataB);
  });
}
