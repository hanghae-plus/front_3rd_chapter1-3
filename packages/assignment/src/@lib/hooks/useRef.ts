import { useState } from 'react';

export function useRef<T>(initialValue: T): { current: T } {
  // React의 useState를 이용해서 만들어보세요.
  // value.current 값을 조작하면 값 변경은 되지만 React 상태관리 시스템에 의해 감지되지 않아 리렌더링 되지 않음
  const [value] = useState<{ current: T }>({ current: initialValue });

  return value;
}
