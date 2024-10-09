// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  //1. 두 값이 정확히 같은지 확인
  if (objA === objB) return true;

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리 (숫자, 문자열, 불리언 등)
  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  )
    return false; // 원시 값이거나 null일 경우

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  //3. 객체의 키 개수가 다른 경우 처리
  if (keysA.length !== keysB.length) return false;

  //4. 모든 키에 대해 얕은 비교 수행
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (objA[key] !== objB[key]) return false;
  }

  return true;
}
