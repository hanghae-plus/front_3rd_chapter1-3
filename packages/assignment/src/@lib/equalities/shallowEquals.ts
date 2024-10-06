// shallowEquals 함수는 두 값의 얕은 비교를 수행합니다.
export function shallowEquals(objA: any, objB: any): boolean {
  //기본타입 비교
  if (isPrimitive(objA) && isPrimitive(objB)) {
    // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
    return objA === objB;
  } else if (Array.isArray(objA) && Array.isArray(objB)) {
    // 2. 둘 중 하나라도 객체가 아닌 경우 처리
    //배열
    if (objA.length !== objB.length) return false;
    else {
      for (let i in objA) {
        if (objA[i] !== objB[i]) {
          return false;
        }
      }
      return true;
    }
  } else {
    //객체
    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);
    if (aKeys.length !== bKeys.length) {
      // 3. 객체의 키 개수가 다른 경우 처리
      return false;
    }

    for (let k of aKeys) {
      // 4. 모든 키에 대해 얕은 비교 수행
      if (objA[k] !== objB[k]) {
        return false;
      }
    }
    return true;
  }
}

function isPrimitive(val: any) {
  return val === null || typeof val !== "object";
}
