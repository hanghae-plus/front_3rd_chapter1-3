import { shallowEquals } from '../equalities';
import { ComponentType, createElement } from 'react';
import { useRef } from '../hooks';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return (props: P) => {
    const prevComponet = useRef<JSX.Element | null>(null);
    const prevProps = useRef<P | null>(null);

    if (prevProps.current !== null && equals(prevProps.current, props)) {
      return prevComponet.current;
    }

    prevProps.current = props;
    prevComponet.current = createElement(Component, props);

    return prevComponet.current;
  };
}
