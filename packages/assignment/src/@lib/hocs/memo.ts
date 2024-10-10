import React from "react";
import { shallowEquals } from "../equalities";
import { ComponentType } from "react";
import { useMemo, useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  return function MemorizedComponent(props: P) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const previousPropsRef = useRef<P | undefined>(undefined);
    const previousComponentRef = useRef<JSX.Element | null>(null);

    const renderedComponent = useMemo(() => {
      if (previousPropsRef.current && previousComponentRef.current) {
        // 이전 props와 현재 props를 비교
        if (equals(previousPropsRef.current, props)) {
          return previousComponentRef.current;
        }
      }

      const newComponent = React.createElement(Component, props);
      previousPropsRef.current = props;
      previousComponentRef.current = newComponent;

      return newComponent;
    }, [props]);

    return renderedComponent;
  };
}