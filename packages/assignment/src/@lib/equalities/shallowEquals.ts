// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  // shallowEquals 함수는 두 값의 얕은 비교를 수행합니다.
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  // 3. 객체의 키 개수가 다른 경우 처리
  // 4. 모든 키에 대해 얕은 비교 수행

  const isEqual = true;

  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  if (objA === objB) return isEqual;

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  )
    return !isEqual;

  // 3. 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return !isEqual;

  // 4. 모든 키에 대해 얕은 비교 수행
  // NOTE : 객체의 최상위 속성만을 비교하는 얕은 비교를 수행합니다. 중첩된 객체나 배열의 내용은 비교하지 않습니다.
  for (const key of keysA) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      objA[key] !== objB[key]
    )
      return !isEqual;
  }

  return isEqual;
}
