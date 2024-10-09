/* eslint-disable @typescript-eslint/no-explicit-any */

export default function deepEqualArray(
  arrayA: Array<any>,
  arrayB: Array<any>,
  equalFunction: (...args: any) => boolean,
  stack?: Map<any, any> | null
) {
  if (arrayA.length !== arrayB.length) return false;

  // 순환 참조일 경우
  if (stack?.has(arrayA) && stack?.has(arrayB)) {
    return stack.get(arrayA) === arrayB;
  }

  stack = stack || new Map();
  stack.set(arrayA, arrayB);
  stack.set(arrayB, arrayA);

  try {
    const remainingItemsB = new Set(arrayB);

    for (const itemA of arrayA) {
      let foundMatch = false;
      for (const itemB of arrayB) {
        if (!remainingItemsB.has(itemB)) continue;
        if (itemA === itemB || equalFunction(itemA, itemB, stack)) {
          remainingItemsB.delete(itemB);
          foundMatch = true;
          break;
        }
      }

      if (!foundMatch) return false;
    }
  } finally {
    stack.delete(arrayA);
    stack.delete(arrayB);
  }

  return true;
}
