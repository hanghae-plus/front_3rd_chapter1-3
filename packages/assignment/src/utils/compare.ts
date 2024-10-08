export function isObject(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === 'object' && obj !== null
}

export function compareArrays(
  arrA: unknown[],
  arrB: unknown[],
  callback: (a: unknown, b: unknown) => boolean
): boolean {
  if (arrA.length !== arrB.length) {
    return false
  }

  return arrA.every((item, index) => callback(item, arrB[index]))
}

export function compareObjects(
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
