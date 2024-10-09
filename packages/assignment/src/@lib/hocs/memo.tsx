import { shallowEquals } from '../equalities';
import { ComponentType } from 'react';
import { useRef } from '../hooks';

export function memo<P extends object>(
	Component: ComponentType<P>,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore

	equals = shallowEquals
) {
	return function MemoizedComponent(props: P) {
		const prevProps = useRef<P | null>(null);
		const renderedComponent = useRef<JSX.Element | null>(null);
		if (prevProps === null || !equals(prevProps.current, props)) {
			prevProps.current = props;
			renderedComponent.current = <Component {...props} />;
		}

		return renderedComponent.current;
	};
}
