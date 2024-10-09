import { isObject } from './base/isObject';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function shallowEquals(objA: any, objB: any): boolean {
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  if (objA === objB) return true;
  if (typeof objA !== typeof objB) return false;

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  if (!isObject(objA) || !isObject(objB)) return objA === objB;

  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);
  if (isArrayA !== isArrayB) return false;

  // 3. 객체의 키 개수가 다른 경우 처리 / 4. 모든 키에 대해 얕은 비교 수행
  if (!isArrayA && !isArrayB) return equalObject(objA, objB);

  // 5. 배열일 경우 모든 배열 얕은 비교 수행
  if (isArrayA && isArrayB) return equalArray(objA, objB);

  return objA === objB;
}

// 배열 얕은 비교
function equalArray(arrayA: Array<any>, arrayB: Array<any>): boolean {
  // 5-1. 배열 길이가 다른 경우
  if (arrayA.length !== arrayB.length) return false;
  // 5-2. 모든 배열 얕은 비교 수행
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) return false;
  }
  return true;
}

// 객체 얕은 비교
function equalObject(objA: { [key: string]: any }, objB: { [key: string]: any }): boolean {
  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  // 3. 객체의 키 개수가 다른 경우 처리
  if (aKeys.length !== bKeys.length) return false;
  // 4. 모든 키에 대해 얕은 비교 수행
  for (const key of aKeys) {
    if (objA[key] !== objB[key] || !bKeys.includes(key)) return false;
  }
  return true;
}
