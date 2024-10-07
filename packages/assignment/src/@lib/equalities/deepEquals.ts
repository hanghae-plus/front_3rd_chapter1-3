export function deepEquals(objA: any, objB: any): boolean {
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  if (objA === objB) {
    return true;
  }

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  if (typeof objA !== 'object' || typeof objB !== 'object' || objA === null || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (const key of keysA) {
   // 재귀적으로 각 속성에 대해 deepEquals 호출
    if (!keysB.includes(key) || !deepEquals(objA[key], objB[key])) {
      return false;
    }
  }
  return true;
}
