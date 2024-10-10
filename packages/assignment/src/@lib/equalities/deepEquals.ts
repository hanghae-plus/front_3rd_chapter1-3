// deepEquals 함수는 두 값의 깊은 비교를 수행합니다.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === null || objB === null || typeof objA !== 'object' || typeof objB !== 'object') return objA === objB;
  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  if (Array.isArray(objA) && Array.isArray(objB)) {
    //    - 객체의 키 개수가 다른 경우 처리
    if (objA.length !== objB.length) return false;
    //    - 재귀적으로 각 속성에 대해 deepEquals 호출
    return objA.every((value, index) => deepEquals(value, objB[index]));
  } else {
    //    - 객체의 키 개수가 다른 경우 처리
    if (Object.keys(objA).length !== Object.keys(objB).length) return false;
    //    - 재귀적으로 각 속성에 대해 deepEquals 호출
    return Object.keys(objA).every((key) => deepEquals(objA[key], objB[key]));
  }
}
