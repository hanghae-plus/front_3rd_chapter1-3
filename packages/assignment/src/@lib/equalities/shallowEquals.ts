// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;

  // 두 값 중 하나라도 객체가 아니거나 null이면 false
  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  // 객체의 키들을 가져옴
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 프로퍼티의 개수가 다르면 false
  if (keysA.length !== keysB.length) return false;

  // 각 프로퍼티의 참조값이 동일한지 확인
  for (const key of keysA) {
    if (objA[key] !== objB[key]) return false;
  }

  return true;
}
