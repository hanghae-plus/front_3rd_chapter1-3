// shallowEquals 함수는 두 값의 얕은 비교를 수행합니다.
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let key of keysA) {
    if (!objB.hasOwnProperty(key) || objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}
