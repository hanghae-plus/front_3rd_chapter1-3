import { ComponentType, useEffect } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "../hooks";

export function memo<P extends object>(Component: ComponentType<P>, equals = shallowEquals) {
  return function MemorizedComponent(props: P) {
    const prevProps = useRef<P | null>(null);
    const isRequiredRender = !equals(prevProps.current, props);

    useEffect(() => {
      if (isRequiredRender) {
        prevProps.current = props;
      }
    }, [props, isRequiredRender]);

    return isRequiredRender ? <Component {...props} /> : null;
  };
}
