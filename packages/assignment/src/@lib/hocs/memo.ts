import { shallowEquals } from '../equalities';
import { ComponentType, createElement, JSX } from 'react';

export function memo<P extends object>(
    Component: ComponentType<P>,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    equals = shallowEquals
) {
    let prevProps: P | null = null;
    let memoizedResult: JSX.Element | null = null;

    return function (props: P) {
        // propsCompareFn을 사용하여 이전 props와 현재 props를 비교
        if (prevProps === null || equals(prevProps, props) === false) {
            memoizedResult = createElement(Component, props);
        } else {
        }
        prevProps = props;
        return memoizedResult;
    };
}
