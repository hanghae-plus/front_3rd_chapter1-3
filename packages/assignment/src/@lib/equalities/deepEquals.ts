interface AnyObject {
  [key: string]: any;
}

export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) {
    return true;
  }

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  if (typeof objA !== 'object' || typeof objB !== 'object' || objA === null || objB === null) {
    return false;
  }

  // 3. 배열인 경우
  if (Array.isArray(objA) && Array.isArray(objB)) {
    // 3-1. 배열의 길이가 같은지 확인 후, 각 요소에 대해 깊은 비교 수행
    return deepCompareArrays(objA, objB);
  }

  // 4. 일반 객체인 경우
  if (!Array.isArray(objA) && !Array.isArray(objB)) {
    // 4-1. 객체의 키 개수가 같은지 확인 후, 각 키에 대해 깊은 비교 수행
    return deepCompareObjects(objA, objB);
  }

  // 5. 타입이 일치하지 않는 경우 (한쪽은 배열이고 다른 한쪽은 객체)
  return false;
}

function deepCompareArrays(arrayA: any[], arrayB: any[]): boolean {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (!deepEquals(arrayA[i], arrayB[i])) {
      return false;
    }
  }
  return true;
}

function deepCompareObjects(objA: AnyObject, objB: AnyObject): boolean {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (const key of keysA) {
    // 4-2. 재귀적으로 각 속성에 대해 deepEquals 호출
    if (!keysB.includes(key) || !deepEquals(objA[key], objB[key])) {
      return false;
    }
  }
  return true;
}
