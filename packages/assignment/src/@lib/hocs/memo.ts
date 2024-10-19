import { useMemo, useRef } from '..';
import { shallowEquals } from '../equalities';
import { ComponentType, createElement } from 'react';

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  equals = shallowEquals
) {
  return (props: P) => {
    const ref = useRef<P | null>(null);

    if (!equals(ref.current, props)) {
      ref.current = props;
    }

    return useMemo(() => createElement(Component, ref.current), [ref.current]);
  };
}
