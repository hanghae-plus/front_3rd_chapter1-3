/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowEquals } from "../equalities";
import { ComponentType } from "react";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return function (currentProps: Record<string, string>) {
    const prevProps = useRef<Record<string, string> | null>(null);
    const prevComponent = useRef<ComponentType<P> | null>(null);

    if (prevProps.current !== null && equals(prevProps.current, currentProps)) {
      return prevComponent.current;
    }

    prevProps.current = currentProps;

    prevComponent.current = (Component as any)(currentProps);

    return prevComponent.current;
  };
}
