// ? 무슨 짓을 해도 코드가 보기 불편한 듯..

// for	배열 인덱스 기반 순회	유연하지만 verbose
// forEach	배열 요소 순회	간결하지만 중간에 중단 불가
// for...in	객체 속성 순회	순서 보장 X, 프로토타입 체인 순회
// for...of	이터러블 객체 순회	값 직접 접근, 인덱스는 제공되지 않음

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (objA === objB) return true;

  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  //    - 객체의 키 개수가 다른 경우 처리
  //    - 재귀적으로 각 속성에 대해 deepEquals 호출
  if (typeof objA === "object" && typeof objB === "object") {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) return false;

    if (Array.isArray(objA) && Array.isArray(objB)) {
      // 배열인 경우 배열 내부 값 재귀로 deepEquals 실행
      for (let i = 0; i < keysA.length; i++) {
        if (!deepEquals(objA[i], objB[i])) return false; // 하나라도 값 다르면 false 반환
      }
      return true; // 다 같으면 true 반환
    } else if (Array.isArray(objA) || Array.isArray(objB)) {
      // 둘 중 하나가 Array인 경우 false 반환
      return false;
    } else {
      for (const key of keysA) {
        if (!deepEquals(objA[key], objB[key])) return false; // 하나라도 값 다르면 false 반환
      }
      return true;
    }
  }

  return false;
}
