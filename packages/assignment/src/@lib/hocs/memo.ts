import { ComponentType, createElement } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return (props: P) => {
    const propsRef = useRef<P>(null);
    const componentRef = useRef<JSX.Element>(null);

    const isPropsDiff =
      propsRef.current === null || !equals(propsRef.current, props);

    if (isPropsDiff) {
      propsRef.current = props;
      componentRef.current = createElement(Component, props);
    }

    return componentRef.current;
  };
}
