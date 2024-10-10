import { useState } from 'react';

/** @see https://ko.react.dev/learn/referencing-values-with-refs#how-does-useref-work-inside */
export function useRef<T>(initialValue: T): { current: T } {
  const [ref] = useState({ current: initialValue });
  return ref;
}
