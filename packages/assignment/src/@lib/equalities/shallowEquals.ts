import { checkReferenceEquality, checkEmptyValues, comparePrimitiveValues, areBothObjects } from "../../utils";

/**
 * @description 두 객체의 얕은 비교를 수행하는 함수입니다. 두 객체의 참조 또는 각 속성 값이 동일한지 확인합니다.
 * @param objA - 비교할 객체
 * @param objB - 비교할 객체
 * @returns 두 객체가 동일하면 true, 그렇지 않으면 false를 반환합니다.
 */
export function shallowEquals(objA: unknown, objB: unknown): boolean {
  if (checkReferenceEquality(objA, objB)) return true; // 참조가 같으면 true 반환
  if (checkEmptyValues(objA, objB)) return false; // 비어 있는 값 확인
  if (comparePrimitiveValues(objA, objB)) return true; // 기본 타입 값 비교
  if (!areBothObjects(objA, objB)) return false; // 객체 확인 (둘 다 객체여야 함)

  const objAKeys = Object.keys(objA as object); // objA를 객체로 간주하고 키를 가져옴
  const objBKeys = Object.keys(objB as object); // objB를 객체로 간주하고 키를 가져옴
  if (objAKeys.length !== objBKeys.length) return false; // 객체의 키 개수가 다르면 false 반환

  return objAKeys.every((key) => (objA as Record<string, unknown>)[key] === (objB as Record<string, unknown>)[key]);
}
