import { shallowEquals } from "../equalities";
import { ComponentType, createElement, useRef } from "react";
import { useMemo } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  equals = shallowEquals
) {
  return function MemoizedComponents(props: P) {
    const prevPropsRef = useRef<P | null>(null);
    const shouldRender = useMemo(() => {
      if (prevPropsRef.current === null) {
        prevPropsRef.current = props;
        return true;
      }

      const isEqual = equals(prevPropsRef.current, props);

      prevPropsRef.current = props;

      return !isEqual;
    }, [props]);

    return shouldRender ? createElement(Component, props) : null;
  };
}
