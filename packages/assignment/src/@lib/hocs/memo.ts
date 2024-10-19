/* eslint-disable react-hooks/exhaustive-deps */
import { shallowEquals } from "../equalities";
import { ComponentType } from "react";
import { useMemo, useRef } from "../hooks";
import React from "react";

// export function memo<P extends object>(
//   Component: ComponentType<P>,
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   equals = shallowEquals
// ) {
//   return React.memo(Component, equals);
// }

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
      () => React.createElement(Component, prevPropsRef.current as P),

      [prevPropsRef.current]
    );

    return MemoizedComponent;
  };
}
