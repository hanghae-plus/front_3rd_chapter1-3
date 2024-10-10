import { useState } from "react";

type Ref<T> = { current: T | null };
export function useRef<T>(initialValue: T | null): Ref<T> {
  const [ref] = useState<Ref<T>>({ current: initialValue });

  return ref;
}
