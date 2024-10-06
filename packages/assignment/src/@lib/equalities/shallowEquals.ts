interface AnyObject {
  [key: string]: any;
}

export function shallowEquals(objA: any, objB: any): boolean {
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  if (objA === objB) {
    return true;
  }

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  if (typeof objA !== 'object' || typeof objB !== 'object' || objA === null || objB === null) {
    return false;
  }

  // 배열인 경우
  if (Array.isArray(objA) && Array.isArray(objB)) {
    return shallowCompareArrays(objA, objB);
  }

  // 일반 객체인 경우
  if (!Array.isArray(objA) && !Array.isArray(objB)) {
    return shallowCompareObjects(objA, objB);
  }

  // 타입이 일치하지 않는 경우 (한쪽은 배열이고 다른 한쪽은 객체)
  return false;
}

function shallowCompareArrays(arrayA: any[], arrayB: any[]): boolean {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

function shallowCompareObjects(objA: AnyObject, objB: AnyObject): boolean {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  // 3. 객체의 키 개수가 다른 경우 처리
  if (keysA.length !== keysB.length) {
    return false;
  }
  // 4. 모든 키에 대해 얕은 비교 수행
  for (const key of keysA) {
    if (!objB.hasOwnProperty(key) || objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}
