import { shallowEquals } from "../equalities"
import { ComponentType, createElement } from "react"
import { useRef } from "../hooks/useRef"

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  return (props: P) => {
    // 저장할 ref
    const ref = useRef<P | null>(null)

    // ref가 없거나, props가 ref와 다르다면
    if (!equals(props, ref.current)) {
      // ref에 props를 저장
      ref.current = props
      // Component를 생성해서 반환
      return createElement(Component, { ...props })
    }
  }
}
