// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;

  if (
    objA === null ||
    objB === null ||
    typeof objA !== "object" ||
    typeof objB !== "object"
  )
    return false;

  //배열인지 확인
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);
  if (isArrayA !== isArrayB) return false; //하나는 배열이고, 하나는 배열이아니면 false

  //배열의 경우 각 요소에 대해 재귀적 비교
  if (isArrayA && isArrayB) {
    if (objA.length !== objB.length) return false;
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) return false;
    }
    return true;
  }

  //객체의 키 개수가 다른경우 처리
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  //객체인 경우 각 속성에 대해 재귀적 비교
  for (let key of keysA) {
    if (!deepEquals(objA[key], objB[key])) return false;
  }

  return true;
}
