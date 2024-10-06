import { shallowEquals } from "../equalities";
import React, { ComponentType } from "react";
import { useMemo, useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
): ComponentType<P> {
  // React.memo를 직접 구현해보세요.
  return (props: P) => {
    const prevProps = useRef<P | null>(null);

    if (!prevProps.current || !equals(prevProps.current, props)) {
      prevProps.current = props;
    }

    const MemoizedComponent = useMemo(() => {
      return React.createElement(Component, prevProps.current);
    }, [prevProps.current]);
    return MemoizedComponent;
  };
}
