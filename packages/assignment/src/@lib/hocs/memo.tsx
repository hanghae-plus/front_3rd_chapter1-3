import { shallowEquals } from "../equalities";
import { ComponentType } from "react";
import { useMemo, useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return (props: P) => {
    const prevPropsRef = useRef<P | undefined>(undefined);
    if (
      prevPropsRef.current === undefined ||
      !equals(props, prevPropsRef.current)
    ) {
      prevPropsRef.current = props;
    }
    const MemoizedComponent = useMemo(
      () => <Component {...(prevPropsRef.current as P)} />,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [prevPropsRef.current]
    );

    return MemoizedComponent;
  };
}
