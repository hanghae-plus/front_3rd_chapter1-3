import { ComponentType, createElement } from "react";
import { shallowEquals } from "../equalities";
import { useMemo, useRef } from "../hooks";

export function memo<P extends object>(Component: ComponentType<P>, equals = shallowEquals) {
  return (props: P) => {
    const oldProps = useRef<P | null>(null);

    if (!equals(props, oldProps.current)) {
      oldProps.current = props;
    }

    const MemoizedComponent = useMemo(() => {
      return createElement(Component, oldProps.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [oldProps.current]);

    return MemoizedComponent;
  };
}
