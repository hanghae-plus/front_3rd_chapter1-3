import {shallowEquals} from "../equalities";
import {ComponentType, createElement, ReactElement} from "react";
import {useRef} from "../hooks";


export function memo<P extends object>(
    Component: ComponentType<P>,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    equals = shallowEquals
) {
    return (props: P) => {
        const previousPropsRef = useRef<P | null>(null);
        const previousComponentRef = useRef<ReactElement | null>(null);
        const shouldRender = previousPropsRef.current === null || !equals(previousPropsRef.current, props);


        if (shouldRender) {
            previousComponentRef.current = createElement(Component, props);
            previousPropsRef.current = props;
        }

        return previousComponentRef.current;
    };
}

