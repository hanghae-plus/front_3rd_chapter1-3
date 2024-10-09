// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  //비교함수 구현하기 두 값의 얕은 비교 수행
  if (objA === objB) return true;

  // objA와 objB의 타입이 다르면 바로 false 반환
  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  // 배열일 경우 비교
  if (Array.isArray(objA)) {
    if (objA.length !== objB.length) return false;
    for (let i = 0; i < objA.length; i++) {
      if (objA[i] !== objB[i]) return false;
    }
    return true;
  }

  // 객체일 경우 비교
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 객체의 키 개수가 다른 경우 처리
  if (keysA.length !== keysB.length) return false;

  // 모든 키에 대해 얕은 비교 수행
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (objA[key] !== objB[key]) return false; // 얕은 비교
  }

  return true;
}
