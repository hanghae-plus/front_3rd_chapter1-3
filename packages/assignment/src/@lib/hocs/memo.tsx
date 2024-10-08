import React, { useRef } from "react"; // React import
import { shallowEquals } from "../equalities"; // equality check import
import { ComponentType } from "react"; // ComponentType import

// memo 함수 정의
export function memo<P extends object>(Component: ComponentType<P>, equals = shallowEquals) {
    // 메모이제이션된 컴포넌트 생성
    const MemoizedComponent = (props: P) => {
        const prevPropsRef = useRef<P | null>(null);
        const prevProps = prevPropsRef.current;

        if (!equals(prevProps, props)) {
            prevPropsRef.current = props;
            return <Component {...props} />;
        }

        return null;
    };

    return MemoizedComponent;
}
