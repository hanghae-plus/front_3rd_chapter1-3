import { ComponentType, createElement } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  return (props: P) => {
    const propsRef = useRef<P>(null);
    const RenderComponentRef = useRef<JSX.Element>(null);

    const isPropsEquals =
      propsRef.current !== null && equals(propsRef.current, props);

    if (!isPropsEquals) {
      propsRef.current = props;
      RenderComponentRef.current = createElement(Component, props);
    }

    return RenderComponentRef.current;
  };
}
