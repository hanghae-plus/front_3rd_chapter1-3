// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  if (Array.isArray(objA) && Array.isArray(objB)) {
    return JSON.stringify(objA) === JSON.stringify(objB);
  }

  if (typeof objA === "object" && typeof objB === "object") {
    for (const i in objA) {
      // 객체항목중 배열이나 객체가 중첩되어 있을 때 재귀
      if (typeof objA[i] === "object" || Array.isArray(objA[i])) {
        if (!deepEquals(objA[i], objB[i])) {
          return false;
        }
      }
      // 중첩항목 없이 단순 참조 비교
      else {
        if (objA[i] !== objB[i]) {
          return false;
        }
      }
    }
    return true;
  }

  return objA === objB;
}
