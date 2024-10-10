import { shallowEquals } from '../equalities'
import { createElement, FunctionComponent } from 'react'
import { useRef } from '../hooks'

export function memo<P extends object>(Component: FunctionComponent<P>, equals = shallowEquals): FunctionComponent<P> {
  const MemoizedComponent: FunctionComponent<P> = (newProps: P) => {
    const previousPropsRef = useRef<P | null>(null)
    const previousComponentRef = useRef<ReturnType<typeof createElement> | null>(null)

    if (!equals(previousPropsRef.current, newProps)) {
      previousPropsRef.current = newProps
      previousComponentRef.current = createElement(Component, newProps)
    }

    return previousComponentRef.current!
  }

  return MemoizedComponent
}
