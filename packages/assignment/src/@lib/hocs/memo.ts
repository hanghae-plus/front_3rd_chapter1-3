import { shallowEquals } from '../equalities';
import { ComponentType } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  let prevProps = null;
  let memoizedResult = null;

  return function (props) {
    if (prevProps === null || !equals(prevProps, props)) {
      memoizedResult = Component(props);
    }
    prevProps = props;
    return memoizedResult;
  };
}
