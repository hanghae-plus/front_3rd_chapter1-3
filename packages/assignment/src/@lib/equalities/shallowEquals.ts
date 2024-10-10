// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  // 3. 객체의 키 개수가 다른 경우 처리 
  // 4. 모든 키에 대해 얕은 비교 수행

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const objAKeys = Object.keys(objA);
  const objBKeys = Object.keys(objB);

  if (objAKeys.length !== objBKeys.length) {
    return false;
  }

  return objAKeys.every(key => key in objB && objA[key] === objB[key]);

}
