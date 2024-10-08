import { useState } from 'react';

export function useRef<T>(initialValue: T): { current: T } {
  console.log('useRef.initialValue:', initialValue);
  // React의 useState를 이용해서 만들어보세요.
  const [ref] = useState<{ current: T }>({ current: initialValue });
  return ref;
}
