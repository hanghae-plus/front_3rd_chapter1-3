import { DependencyList, useRef } from "react"
import { shallowEquals } from "../equalities"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.

  const ref = useRef<{
    deps: DependencyList | undefined
    value: T | undefined
  }>({ deps: undefined, value: undefined })

  // ref deps가 없거나 , deps가 ref deps와 다르다면
  if (!ref.current.deps || !equals(ref.current.deps, deps)) {
    ref.current.value = factory()
    ref.current.deps = deps
  }

  return ref.current.value as T
}
