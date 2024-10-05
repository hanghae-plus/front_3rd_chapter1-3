import { useState } from "react";

type Ref<T> = { current: T | null };
export function useRef<T>(initialValue: T | null): Ref<T> {
  // React의 useState를 이용해서 만들어보세요.
  const [ref] = useState<Ref<T>>({ current: initialValue });

  return ref;
}
