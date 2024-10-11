// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
 // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  if(objA === objB) return true;
  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  if(typeof objA !== 'object' || objA === null) return false;
  if(typeof objB !== 'object' || objB === null) return false;

  // 3. 배열인 경우 배열 길이와 각 요소 재귀적 비교
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;

    return objA.every((element, index) => deepEquals(element, objB[index]));
  }

  // 4. 객체인 경우 키의 개수와 재귀적 비교
  if (!Array.isArray(objA) && !Array.isArray(objB)) {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) return false;

    return keysA.every(key => 
      Object.prototype.hasOwnProperty.call(objB, key) && deepEquals(objA[key], objB[key])
    );
  }

  // 5. 배열과 객체가 혼재된 경우 false 반환 (구조가 다름)
  return false;
}
