import { shallowEquals } from "../equalities";
import { ComponentType, ReactElement, useRef } from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return (props: P) => {
    const prevPropsRef = useRef<P | null>(null);
    const MemoizedComponent = useRef<ReactElement | null>(null);

    if (!prevPropsRef.current || !equals(prevPropsRef.current, props)) {
      prevPropsRef.current = props;
      MemoizedComponent.current = <Component {...props} />;
    }

    return MemoizedComponent.current;
  };
}
