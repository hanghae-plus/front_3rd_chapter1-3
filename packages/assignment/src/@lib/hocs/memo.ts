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
    const prevProps = useRef<P | null>(null)
    const prevComponent = useRef<JSX.Element | null>(null)

    // ref가 없거나, props가 ref와 다르다면
    if (!equals(props, prevProps.current)) {
      // ref에 props를 저장
      prevProps.current = props
      prevComponent.current = createElement(Component, props)
    }

    return prevComponent.current
  }
}
