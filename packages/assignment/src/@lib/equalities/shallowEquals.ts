function isObject(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === 'object' && obj !== null
}

function compareArrays(arrA: unknown[], arrB: unknown[], callback: (a: unknown, b: unknown) => boolean): boolean {
  if (arrA.length !== arrB.length) {
    return false
  }

  return arrA.every((item, index) => callback(item, arrB[index]))
}

function compareObjects(
  objA: Record<string, unknown>,
  objB: Record<string, unknown>,
  callback: (a: unknown, b: unknown) => boolean
): boolean {
  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) {
    return false
  }

  return keysA.every((key) => key in objB && callback(objA[key], objB[key]))
}

function handleShallowEquals(a: unknown, b: unknown): boolean {
  return a === b
}

export function shallowEquals(objA: unknown, objB: unknown, equals = handleShallowEquals): boolean {
  if (objA === objB) {
    return true
  }

  if (!isObject(objA) || !isObject(objB)) {
    return false
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    return compareArrays(objA, objB, equals)
  }

  return compareObjects(objA, objB, equals)
}
