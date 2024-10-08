import { isObject, compareArrays, compareObjects } from '@/utils'

export function shallowEquals(objA: unknown, objB: unknown): boolean {
  if (objA === objB) {
    return true
  }

  if (!isObject(objA) || !isObject(objB)) {
    return false
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    return compareArrays(objA, objB, (a, b) => a === b)
  }

  return compareObjects(objA, objB, (a, b) => a === b)
}
