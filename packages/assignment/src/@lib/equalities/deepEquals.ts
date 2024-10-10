// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) return true;
  
  if (objA === null || objB === null) return false;
  
  // NaN 처리 (NaN은 자기 자신과 같지 않음)
  if (Number.isNaN(objA) && Number.isNaN(objB)) return true;

  // 2. 타입이 다른 경우
  if (typeof objA !== typeof objB) return false;

  // 3. 기본 타입인 경우 (이미 === 비교를 통과하지 않았으므로 false)
  if (typeof objA !== 'object') return false;

  // 4. 함수인 경우
  if (typeof objA === 'function') {
    return objA.toString() === objB.toString();
  }

  // 5. 날짜 객체인 경우
  if (objA instanceof Date && objB instanceof Date) {
    return objA.getTime() === objB.getTime();
  }

  // 6. 정규식인 경우
  if (objA instanceof RegExp && objB instanceof RegExp) {
    return objA.toString() === objB.toString();
  }

  // 7. 배열인 경우
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) return false;
    }
    return true;
  }

  // 8. 일반 객체인 경우
  if (!Array.isArray(objA) && !Array.isArray(objB)) {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!objB.hasOwnProperty(key)) return false;
      if (!deepEquals(objA[key], objB[key])) return false;
    }

    return true;
  }

  // 9. 하나는 배열이고 하나는 객체인 경우
  return false;
}
