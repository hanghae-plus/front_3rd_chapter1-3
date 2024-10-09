import { shallowEquals } from "../equalities";
import React, { ComponentType } from "react";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  
  // 1. 이전 props를 저장할 ref 생성
  let prevProps: P | undefined = undefined;
  let memorizedResult: React.ReactElement | undefined = undefined;

  // 2. 메모이제이션된 컴포넌트 생성
  const memorizedComponent = (props: P) => {

    // 3. equals 함수를 사용하여 props 비교
    if (prevProps === undefined || !equals(prevProps, props)) {
      memorizedResult = React.createElement(Component, props);
    }
    prevProps = props;
     // 4. props가 변경된 경우에만 새로운 렌더링 수행
    return memorizedResult;
  }

  return memorizedComponent;
}
