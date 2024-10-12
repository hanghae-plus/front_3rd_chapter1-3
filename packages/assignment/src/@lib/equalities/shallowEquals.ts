import { J } from "vitest/dist/chunks/reporters.DAfKSDh5.js"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  if (objA === objB) {
    return true
  }

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리, null의 type은 object이므로 따로 처리해줘야 함
  if (objA === null || objB === null) {
    return objA === objB
  }

  if (typeof objA !== "object" || typeof objB !== "object") {
    return false
  }

  // 3. 객체의 키 개수가 다른 경우 처리
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false
  }

  // 4. 모든 키에 대해 얕은 비교 수행
  for (const [aKey, aValue] of Object.entries(objA)) {
    // objB에 objA의 속성이 없거나 값이 다르면 false
    if (!(aKey in objB)) {
      return false
    }

    if (objB[aKey] !== aValue) {
      return false
    }
  }

  return true
}
