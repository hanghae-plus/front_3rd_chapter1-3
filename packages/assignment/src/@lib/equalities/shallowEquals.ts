/**
 * 두 값을 얕게 비교하는 함수
 * @param objA 첫 번째 비교 대상 값
 * @param objB 두 번째 비교 대상 값
 * @returns 두 값이 얕은 비교에서 동일하면 true, 그렇지 않으면 false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  // 1. 두 값이 같은 참조를 가지거나 값이 같으면 true 반환
  if (objA === objB) return true;

  // 2. 하나라도 객체가 아니거나 null인 경우 false 반환
  //    (null의 typeof는 'object'지만 원시값이므로 따로 처리)
  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  // 3. 객체의 키 배열을 구하고, 키 개수가 다르면 false 반환
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  // 4. 모든 키에 대해 값을 비교 (첫번째 depth만)
  for (const key of keysA) {
    // - 다른 경우가 하나라도 있으면 false 반환
    if (objA[key] !== objB[key]) return false;
  }

  // - 모든 키에 대해 값이 같으면 true 반환
  return true;
}
