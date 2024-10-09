// eslint-disable-next-line @typescript-eslint/no-explicit-any
// deepEquals 함수는 두 값의 깊은 비교를 수행합니다.
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리
  if (checkPrimitiveType(objA) && checkPrimitiveType(objB)) {
    return objA === objB;
  }

  // 2. 둘 다 객체인 경우 재귀적으로 각 속성에 대해 deepEquals 호출
  //    - 배열인지 확인
  if (Array.isArray(objA) && Array.isArray(objB)) {
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) {
        return false;
      }
    }
  }
  //    - 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  } else {
    for (const key of keysA) {
      if (!deepEquals(objA[key], objB[key])) {
        return false;
      }
    }
  }

  return true;
}

function checkPrimitiveType(obj: any) {
  return obj === null || typeof obj !== "object";
}
