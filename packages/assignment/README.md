# 기본 과제 관련 메모

1. package.json

   - "main": "index.js", // 프로젝트에 index.js가 없음

2. tsconfig

   - Cannot find type definition file for 'estree'. The file is in the program because: Entry point for implicit type library 'estree'ts

3. shallowEquals 관련 시행착오

```ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) return true;

  // TODO: typeof null은 'object'를 반환하므로, 미리 체크하는 로직을 추가하는 것이 좋음
  if (objA === null || objB === null) return false;

  if (typeof objA !== 'object' || typeof objB !== 'object') {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // TODO: length 속성은 배열에만 적용되므로 객체 비교시에는 length 체크가 잘못된 결과를 줄 수 있음
  if (keysA.length !== keysB.length) return false;

  // TODO: Object.entries는 객체의 자체 속성만을 순회하므로, 상속된 속성은 포함되지 않습니다.
  return Object.entries(objA).every(([key, value]) => {
    // TODO: https://eslint.org/docs/latest/rules/no-prototype-builtins
    return Object.hasOwnProperty.call(objB, key) && objB[key] === value;
  });
}
```
