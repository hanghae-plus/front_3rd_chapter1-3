import { shallowEquals } from "../equalities";
import { ComponentType } from "react";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {

  return function MemoizedComponent(props: P){
    const prevProps = useRef<P | null>(null);

    if(!equals(props, prevProps.current)){
      prevProps.current = props;
    }
   
   return Component;
  }
 
}
