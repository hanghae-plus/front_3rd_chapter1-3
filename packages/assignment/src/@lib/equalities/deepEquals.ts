// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) return true;

  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  //    - 객체의 키 개수가 다른 경우 처리
  //    - 재귀적으로 각 속성에 대해 deepEquals 호출
  if (typeof objA === "object" && typeof objB === "object") {
    if (Object.keys(objA).length !== Object.keys(objB).length) return false;
    if (Array.isArray(objA) && Array.isArray(objB)) {
      return !objA.map((obj, i) => deepEquals(obj, objB[i])).some((result) => !result);
    } else if (Array.isArray(objA) || Array.isArray(objB)) {
      return false;
    } else {
      return !Object.keys(objA)
        .map((key) => deepEquals(objA[key], objB[key]))
        .some((result) => !result);
    }
  }

  // 이 부분을 적절히 수정하세요.
  return false;
}
