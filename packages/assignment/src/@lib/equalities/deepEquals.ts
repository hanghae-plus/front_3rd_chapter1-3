import { isObject, compareArrays, compareObjects } from '@/utils'

export function deepEquals(objA: unknown, objB: unknown): boolean {
  if (objA === objB) {
    return true
  }

  if (!isObject(objA) || !isObject(objB)) {
    return false
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    return compareArrays(objA, objB, deepEquals)
  }

  return compareObjects(objA, objB, deepEquals)
}
