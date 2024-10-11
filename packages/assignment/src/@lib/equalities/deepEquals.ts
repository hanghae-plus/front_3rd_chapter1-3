/**
 * @function deepEquals
 * @description 두 객체 또는 값이 깊은 수준에서 동일한지 재귀적으로 비교
 * 객체의 내부 구조까지 깊이 들어가서 모든 속성이 동일한지 확인
 * 
 * @param {any} objA - 비교할 첫 번째 객체 또는 값
 * @param {any} objB - 비교할 두 번째 객체 또는 값
 * @returns {boolean} 두 객체 또는 값이 깊은 수준에서 완전히 동일하면 true, 그렇지 않으면 false를 반환
 */

export function deepEquals(objA: any, objB: any): boolean {
  // 참조가 같은 경우, 즉시 true 반환
  if (objA === objB) {
    return true;
  }

  // 둘 중 하나라도 객체가 아니거나 null인 경우, false 반환
  if (typeof objA !== 'object' || typeof objB !== 'object' || objA === null || objB === null) {
    return false;
  }

  // 두 객체의 키 배열을 비교
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 모든 키에 대해 재귀적으로 비교 수행
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEquals(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
