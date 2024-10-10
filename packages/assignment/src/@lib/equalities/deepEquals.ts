// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true

  if (objA === null || objB === null) {
    return objA === objB
  }

  if (typeof objA === "object" && typeof objB === "object") {
    if (Array.isArray(objA) && Array.isArray(objB)) {
      if (objA.length !== objB.length) {
        return false
      }

      for (let i = 0; objA.length > i; i++) {
        if (JSON.stringify(objA[i]) !== JSON.stringify(objB[i])) {
          return false
        }
      }
      return true
    }

    const keysA = Object.keys(objA)
    const keysB = Object.keys(objB)

    if (keysA.length !== keysB.length) {
      return false
    }

    for (let key of keysA) {
      if (!objB.hasOwnProperty(key) || JSON.stringify(objA[key]) !== JSON.stringify(objB[key])) {
        return false
      }
    }

    return true
  }

  return objA === objB
}
