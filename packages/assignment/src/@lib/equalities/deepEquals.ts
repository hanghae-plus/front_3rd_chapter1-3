import deepEqualArray from './base/deepEqualArray';
import deepEqualObject from './base/deepEqualObject';
import { isObject } from './base/isObject';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function deepEquals(objA: any, objB: any): boolean {
  return baseEqualFc(objA, objB);
}

function baseEqualFc(objA: any, objB: any, stack?: Map<any, any> | null) {
  // 참조값이 같은 경우
  if (objA === objB) return true;

  // 둘 중 하나만 null , undefined 이라면 또는 둘 다 type이 object가 아니라면
  if (objA == null || objB == null || (!isObject(objA) && !isObject(objB))) {
    // 둘 다 NaN일 경우에만 true 반환
    return objA !== objA && objB !== objB;
  }

  const isArrayObjA = Array.isArray(objA);
  const isArrayObjB = Array.isArray(objB);
  if (isArrayObjA && isArrayObjB) {
    stack = stack || new Map();
    return deepEqualArray(objA, objB, baseEqualFc, stack);
  }
  if (isArrayObjA !== isArrayObjB) return false;

  stack = stack || new Map();
  return deepEqualObject(objA, objB, baseEqualFc, stack);
}
