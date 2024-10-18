/**
 * value가 Object인지 체크
 * @param value - 체크할 값
 * @returns value가 object 이면 true, 아니면 false
 */
export const isObject = (value: unknown): value is object =>
  value !== null && typeof value === 'object';

/**
 * object로 부터 keys를 얻기
 * @param obj
 * @returns keys의 array
 */
export const keys = <T extends object>(obj: T): Array<keyof T> =>
  Object.keys(obj) as Array<keyof T>;

/**
 * object에 특정 property가 있는지 체크
 * @param obj - 체크할  Object
 * @param key - 체크할 키값
 * @returns property가 있다면 true, 아니면 false
 */
export const has = <T extends object>(obj: T, key: keyof T): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

export const isArray = <T>(value: unknown): value is T[] => {
  return Array.isArray(value);
};

export const isNull = (value: unknown) => value === null;
