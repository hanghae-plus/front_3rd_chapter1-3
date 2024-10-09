// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;
  if (objA === null || objB === null) return false;
  if (typeof objA !== 'object' || typeof objB !== 'object') return false;

 // - 배열인지 확인
 if (Array.isArray(objA) && Array.isArray(objB)) {
  if (objA.length !== objB.length) return false;
  for (let i = 0; i < objA.length; i++) {
    if (!deepEquals(objA[i], objB[i])) return false;
  }
  return true;
}
 // 객체이지만 배열이 아닌 경우
 if (Array.isArray(objA) || Array.isArray(objB)) return false;

 // - 객체의 키 개수가 다른 경우 처리
 const keysA = Object.keys(objA);
 const keysB = Object.keys(objB);
 if (keysA.length !== keysB.length) return false;

 // - 재귀적으로 각 속성에 대해 deepEquals 호출
 for (const key of keysA) {
  if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
  if (!deepEquals(objA[key], objB[key])) return false;
}
return true;
}