import { shallowEquals } from "../equalities";
import { createElement, FunctionComponent } from "react";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: FunctionComponent<P>,
  equals = shallowEquals
) {
  const MemoizedComponent = (newProps: P) => {
    const prevPropsRef = useRef<P | null>(null);
    const prevComponentRef = useRef<React.ReactNode>(null);

    if (!equals(prevPropsRef.current, newProps)) {
      prevPropsRef.current = newProps;
      prevComponentRef.current = createElement(Component, newProps);
    }

    return prevComponentRef.current!;
  };

  return MemoizedComponent;
}
