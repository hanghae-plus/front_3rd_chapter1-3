// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 같은 레퍼런스 또는 값이 같은 경우 true를 반환
  if (Object.is(objA, objB)) {
    return true;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    // 두 배열의 길이가 다르면 false를 반환합니다.
    if (objA.length !== objB.length) {
      return false;
    }

    // 배열의 모든 요소에 대해 재귀적으로 deepEquals를 호출합니다.
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) {
        return false;
      }
    }

    return true;
  }

  // object가 아니거나 null인 경우 false를 반환합니다.
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  // 여기서 이제 objA와 objB는 object 타입이 보장됩니다.
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 키의 개수가 다르면 false를 반환합니다.
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 모든 키에 대해 재귀적으로 deepEquals를 호출합니다.
  for (let i = 0; i < keysA.length; i++) {
    const currentKey = keysA[i];
    if (
      // hasOwnProperty가 오버라이드 되었을 경우를 대비하여 Object.prototype.hasOwnProperty를 사용합니다.
      // 프로퍼티가 없다면 false를 반환합니다.
      !Object.prototype.hasOwnProperty.call(objB, currentKey) ||
      // 두 객체의 프로퍼티가 같은지 재귀적으로 확인합니다
      !deepEquals(objA[currentKey], objB[currentKey])
    ) {
      return false;
    }
  }

  return true;
}

