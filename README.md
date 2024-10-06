# ✨ 3주차 `React, Beyond the Basics` 기능 구현 목록

## 기본 과제 구현 목록

### 1) 비교 함수 구현하기
- [x] `shallowEquals` 함수 구현
  - [x] 기본 타입 값들을 정확히 비교 (예: 숫자, 문자열, 불리언, `null`, `undefined`)
  - [x] 배열을 얕게 비교
  - [x] 객체를 얕게 비교
  - [x] 중첩된 구조는 깊게 비교하지 않음

- [x] `deepEquals` 함수 구현
  - [x] 기본 타입 값들을 정확히 비교
  - [x] 배열을 깊게 비교 (중첩된 배열 포함)
  - [x] 객체를 깊게 비교 (중첩된 객체 포함)
  - [x] 중첩된 구조를 정확히 비교

### 2) Hook 구현하기
- [x] `useRef` 구현
  - [x] 리렌더링이 되어도 `useRef`의 참조값 유지
  - [x] `ref` 값을 유지하고, 값 변경 시 리렌더링을 트리거하지 않음

- [x] `useCallback` 구현
  - [x] `useCallback`으로 메모이제이션된 콜백 함수 제공
  - [x] 의존성 배열의 값들이 변경될 때만 콜백 함수 재생성

- [x] `useMemo` 구현
  - [x] 의존성 배열의 값이 변경될 때만 메모이제이션된 값 재계산
  - [x] 선택적으로 `deps` 비교 함수를 주입받아 사용

### 3) Custom Hook 만들기
- [x] `useDeepMemo` 구현(수정 x)
    - [x] dependencies의 값에 대해 깊은 비교를 하여 메모이제이션 수행

### 4) Higher Order Component (HOC) 만들기
- [x] `memo`와 `deepMemo` 구현
  - [x] props 변경 시만 컴포넌트 리렌더링
  - [x] `deepMemo`는 깊은 객체와 배열 비교 수행
