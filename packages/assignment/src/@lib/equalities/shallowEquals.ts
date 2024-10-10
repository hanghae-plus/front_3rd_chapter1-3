import { J } from "vitest/dist/chunks/reporters.DAfKSDh5.js"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true

  // null 비교
  if (objA === null || objB === null) {
    return objA === objB
  }

  if (typeof objA === "object" && typeof objB === "object") {
    // 배열 비교
    if (Array.isArray(objA) && Array.isArray(objB)) {
      // 길이가 다르면 false
      if (objA.length !== objB.length) {
        return false
      }

      for (let i = 0; objA.length > i; i++) {
        if (objA[i] !== objB[i]) {
          return false
        }
      }
      return true
    }

    const keysA = Object.keys(objA)
    const keysB = Object.keys(objB)

    // 키의 길이가 다르면 false
    if (keysA.length !== keysB.length) {
      return false
    }

    // 모든 키와 그 값을 비교 (원시 값은 값 비교, 객체는 참조 비교)
    for (let key of keysA) {
      if (!objB.hasOwnProperty(key) || objA[key] !== objB[key]) {
        return false
      }
    }

    return true
  }

  return objA === objB
}
