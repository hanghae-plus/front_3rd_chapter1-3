// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  console.log("objA:", typeof objA, objA, "objB:", typeof objB, objB);
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  if (objA === objB) return true;

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  if (typeof objA !== "object" || typeof objB !== "object") return objA === objB;

  // 3. 객체의 키 개수가 다른 경우 처리
  if (Object.keys(objA).length !== Object.keys(objB).length) return false;

  // 4. 모든 키에 대해 얕은 비교 수행
  if (Object.entries(objA).some(([key, value]) => objB[key] !== value)) return false;

  // 이 부분을 적절히 수정하세요.
  return true;
}
