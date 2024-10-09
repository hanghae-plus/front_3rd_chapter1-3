import React from 'react';
import { shallowEquals } from "../equalities";
import { ComponentType } from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {

  let prevProps: P | null = null;
  let prevResult: React.ReactElement|null = null;

  const MemoizedComponent = (props:P) => {
    if(prevProps === null || !equals(prevProps, props)) {
      prevProps = props;
      prevResult = React.createElement(Component, props);
  }
return prevResult;
  }
  
  MemoizedComponent.displayName = `Memo(${Component.displayName || Component.name|| 'Component'})`;


  return MemoizedComponent;
}

