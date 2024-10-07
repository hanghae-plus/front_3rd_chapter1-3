import { ComponentType } from "react";
import { shallowEquals } from "../equalities";
import { useRef, useMemo } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return function MemoizedComponent(props: P) {
    const oldProps = useRef<P | null>(null);

    const needRender = useMemo(() => {
      const isSame = equals(props, oldProps.current);
      oldProps.current = props;
      return !isSame;
    }, [props]);

    return needRender ? <Component {...props} /> : null;
  };
}
