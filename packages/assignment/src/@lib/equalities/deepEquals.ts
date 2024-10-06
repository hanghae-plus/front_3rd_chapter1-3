// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  // 기본 타입 및 null, undefined 비교
  if (objA === objB) return true;

  // 타입이 다르면 false
  if (typeof objA !== typeof objB) return false;

  // null 또는 undefined 체크 (위의 === 비교에서 걸러지지 않은 경우)
  if (objA === null || objB === null) return false;

  // 배열 비교
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) return false;
    }
    return true;
  }

  // 객체 비교
  if (typeof objA === "object" && typeof objB === "object") {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEquals(objA[key], objB[key])) return false;
    }
    return true;
  }

  // 그 외의 경우 (예: 함수) false 반환
  return false;
}
