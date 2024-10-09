import { shallowEquals } from "../equalities";
import { ComponentType, ReactElement } from "react";
import { useRef } from "../hooks";
import React from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
): ComponentType<P> {

  return function MemoizedComponent(props: P) : ReactElement{
    const prevProps = useRef<P | null>(null);

    if(prevProps.current === null || !equals(props, prevProps.current)){

      prevProps.current = props;
      return React.createElement(Component,props);
    }
   
   
  }
 
}
