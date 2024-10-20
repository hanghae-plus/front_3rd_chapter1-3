import { shallowEquals } from "../equalities";
import { ComponentType } from "react";
import { useRef } from "../hooks";

export function memo<P extends object>(Component: ComponentType<P>, equals = shallowEquals) {
	return function (props: P): React.ReactElement | null {
		// 1. 이전 props를 저장할 ref 생성
		// 2. 메모이제이션된 컴포넌트 생성
		const prevProps = useRef<P | null>(null);
		const MemoizedComponent = useRef<React.ReactElement | null>(null);

		// 3. equals 함수를 사용하여 props 비교
		// 4. props가 변경된 경우에만 새로운 렌더링 수행
		if (!prevProps.current || !equals(prevProps.current, props)) {
			MemoizedComponent.current = <Component {...props} />;
			prevProps.current = props;
		}

		return MemoizedComponent.current;
	};
}
