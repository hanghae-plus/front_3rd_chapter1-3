import { shallowEquals } from '../equalities';
import { ComponentType, createElement, ReactElement } from 'react';
import { useRef } from '../hooks';

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return (props: P) => {
    const prevProps = useRef<P | null>(null);
    const memorizedComponent = useRef<ReactElement | null>(null);

    const isUpdateNeeded =
      prevProps.current === null || !equals(prevProps.current, props);

    if (isUpdateNeeded) {
      memorizedComponent.current = createElement(Component, props);
      prevProps.current = props;
    }

    return memorizedComponent.current;
  };
}
