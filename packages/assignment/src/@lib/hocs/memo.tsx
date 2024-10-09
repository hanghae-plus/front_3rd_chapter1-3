import { shallowEquals } from "../equalities";
import { ComponentType } from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  let prevProps: P | null = null;
  let prevResult: JSX.Element | null = null;

  return (props: P): JSX.Element => {
    if (!prevProps || !equals(prevProps, props)) {
      prevProps = props;
      prevResult = <Component {...props} />;
    }

    return prevResult as JSX.Element;
  };
}
