/**
 * @function shallowEquals
 * @description 두 객체가 얕은 수준에서 동등한지 비교
 * @param {any} objA - 비교할 첫 번째 객체
 * @param {any} objB - 비교할 두 번째 객체
 * @returns {boolean} 두 객체가 얕은 수준에서 동일하면 true, 그렇지 않으면 false를 반환
 */

export function shallowEquals(objA: any, objB: any): boolean {
  // 참조가 같은 경우, 즉시 true 반환
  if (objA === objB) {
    return true;
  }

  // 둘 중 하나라도 객체가 아니거나 null인 경우, false 반환
  if (typeof objA !== 'object' || typeof objB !== 'object' || objA === null || objB === null) {
    return false;
  }

  // 두 매개변수가 모두 배열인 경우, 배열의 내용을 비교
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;
    for (let i = 0; i < objA.length; i++) {
      if (objA[i] !== objB[i]) return false;
    }
    return true;
  }

  // 객체의 키를 비교하고 각 키에 대해 값 비교를 수행
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!objB.hasOwnProperty(key) || objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}
