import { useState } from 'react';

export function useRef<T>(initialValue: T): { current: T } {
    // React의 useState를 이용해서 만들어보세요.
    // useRef 훅은 렌더링 사이에 값을 유지하는 가변 ref 객체를 생성합니다.
    // useRef는 렌더링에 필요하지 않은 변경 가능한 값을 저장하는 데 사용
    // 또한 DOM 요소에 직접 접근할 때도 사용

    // 반환된 ref 객체는 컴포넌트의 전체 생명주기 동안 유지됩니다.
    // ref 객체의 .current 속성을 변경해도 리렌더링이 트리거되지 않습니다.
    // DOM 요소에 접근하거나 이전 상태를 저장하는 등 다양한 용도로 사용될 수 있습니다.

    const [ref] = useState({ current: initialValue });

    return ref;
}
