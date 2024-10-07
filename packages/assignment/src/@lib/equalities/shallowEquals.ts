// shallowEquals 함수는 두 값의 얕은 비교를 수행합니다.
export function shallowEquals(objA: any, objB: any): boolean {
  // 1. 참조가 같으면 true 반환
  if (objA === objB) {
    return true;
  }

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  // 3. 객체의 키 개수가 다른 경우 false 반환
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // 4. 모든 키에 대해 얕은 비교 수행
  for (let key of keysA) {
    // objB가 해당 키를 가지고 있지 않거나, 해당 키의 값이 같지 않으면 false 반환
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      objA[key] !== objB[key]
    ) {
      return false;
    }
  }

  // 모든 조건을 통과하면 true 반환
  return true;
}
