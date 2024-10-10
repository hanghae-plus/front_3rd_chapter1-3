import { Component, FC, useState } from "react";
import { memo, useCallback, useMemo } from "./@lib";

// // 클래스형 컴포넌트
// class MyClassComponent extends Component {
//   render() {
//     return <div>클래스형 컴포넌트</div>;
//   }
// }
// // 함수형 컴포넌트
// const MyFunctionalComponent: FC = () => {
//   return <div>함수형 컴포넌트</div>;
// };

const Test = () => {
  // const MemoTest1 = memo(MyClassComponent);
  // const MemoTest2 = memo(MyFunctionalComponent);
  const [count, setCount] = useState(0);
  const c = useMemo(() => count + 1, [count]);
  const callback = useCallback(() => {
    console.log("콜백함수 입니다!", count);
  }, [count]);

  return (
    <div>
      {c}
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <Button onClick={callback}>콜백</Button>
    </div>
  );
};

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Test;
