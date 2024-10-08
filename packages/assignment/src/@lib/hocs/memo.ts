import { shallowEquals } from '../equalities';
import { ComponentType, createElement } from 'react';

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals: (prevProps: P, nextProps: P) => boolean = shallowEquals,
) {
  let prevProps: P | null = null;
  let memoizedComponent: React.ReactElement<P> | null = null;

  return (props: P) => {
    if (prevProps === null || !equals(prevProps, props)) {
      memoizedComponent = createElement(Component, props);
    } else if (memoizedComponent === null) {
      memoizedComponent = createElement(Component, props);
    }

    prevProps = props;

    return memoizedComponent;
  };
}
