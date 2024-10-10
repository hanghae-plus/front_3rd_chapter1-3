import { ComponentType, createElement, ReactNode } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from '../hooks';

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  equals = shallowEquals
) {
  return function MemoisedComponent(props: P) {
    const prevPropsRef = useRef<P | null>(null);

    const prevResultRef = useRef<ReactNode>(null);

    if (!prevPropsRef.current || !equals(prevPropsRef.current, props)) {
      prevResultRef.current = createElement(Component, props);
      prevPropsRef.current = { ...props };
    }

    return prevResultRef.current;
  };
}
