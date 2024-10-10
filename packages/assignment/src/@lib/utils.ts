/**
 * @description 주어진 값이 기본 타입인지 확인하는 함수
 * @param value - 확인할 값
 * @returns 기본 타입이면 true, 그렇지 않으면 false
 */
export const isPrimitive = (value: unknown): boolean =>
  ["string", "number", "boolean", "symbol", "bigint", "undefined"].includes(typeof value) || value === null;

/**
 * @description 주어진 값이 undefined 또는 null인지 확인하는 함수
 * @param value - 확인할 값
 * @returns 값이 없으면 true, 있으면 false
 */
export const isEmpty = (value: unknown): boolean => value === undefined || value === null;

/**
 * @description 주어진 값이 객체인지 확인하는 함수
 * @param value - 확인할 값
 * @returns 객체이면 true, 아니면 false
 */
export const isObject = (value: unknown): boolean => typeof value === "object" && value !== null;

/**
 * @description 주어진 값이 숫자인지 확인하는 함수
 * @param value - 확인할 값
 * @returns 값이 숫자이면 true, 아니면 false
 */
export const isNumber = (value: unknown): boolean => typeof value === "number" && !isNaN(value);

/**
 * @description 두 값의 참조가 같은지 확인하는 함수입니다.
 * @returns 두 값의 참조가 같으면 true, 그렇지 않으면 false를 반환합니다.
 */
export const checkReferenceEquality = (objA: unknown, objB: unknown): boolean => objA === objB;

/**
 * @description 두 값 중 하나가 null 또는 undefined인지 확인하는 함수입니다.
 * @returns 값 중 하나라도 null 또는 undefined이면 true, 그렇지 않으면 false를 반환합니다.
 */
export const checkEmptyValues = (objA: unknown, objB: unknown): boolean =>
  objA === undefined || objA === null || objB === undefined || objB === null;

/**
 * @description 두 값이 기본 타입(primitive)인지, 그리고 같은 값인지 확인하는 함수입니다.
 * @returns 두 값이 기본 타입이며 같으면 true, 그렇지 않으면 false를 반환합니다.
 */
export const comparePrimitiveValues = (objA: unknown, objB: unknown): boolean => {
  if (isPrimitive(objA) && isPrimitive(objB)) {
    if (isNumber(objA) && isNumber(objB)) {
      return objA === objB; // isNumber가 NaN까지 처리
    }
    return objA === objB; // 그 외의 기본 타입은 값 비교
  }
  return false;
};

/**
 * @description 두 객체 간에 하나라도 객체나 배열이 아닌 경우 false를 반환하는 함수입니다.
 * @returns 두 값 중 하나가 객체나 배열이 아니면 false, 그렇지 않으면 true를 반환합니다.
 */
export const isBothObjects = (objA: unknown, objB: unknown): boolean =>
  typeof objA === "object" && objA !== null && typeof objB === "object" && objB !== null;
