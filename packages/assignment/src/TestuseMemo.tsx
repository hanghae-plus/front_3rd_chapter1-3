import { useState } from "react";
import { useMemo } from "./@lib/hooks/useMemo";

export default function TestMemo() {
  // useState로 상태 관리
  const [stateValue, setStateValue] = useState(0);
  const [otherValue, setOtherValue] = useState(0);

  // 복잡한 연산을 하는 함수
  const expensiveCalculation = (num: number) => {
    console.log("Expensive calculation running...");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += num;
    }
    return total;
  };

  // useMemo로 값 관리 (비싼 연산을 메모이제이션하여 재렌더링 시 재계산하지 않음)
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(stateValue);
  }, [stateValue]); // stateValue가 바뀔 때만 재계산

  // 상태값을 증가시키는 함수
  const incrementState = () => {
    setStateValue((prev) => prev + 1);
  };

  // 다른 상태값을 증가시키는 함수
  const incrementOther = () => {
    setOtherValue((prev) => prev + 1);
  };

  console.log("Rendering component"); // 재렌더링될 때마다 출력

  return (
    <div>
      <h1>Test useMemo</h1>
      <div>
        <p>State value (causing re-calculation): {stateValue}</p>
        <p>Other value (does not affect memoized value): {otherValue}</p>
        <p>Memoized value (expensive calculation result): {memoizedValue}</p>
      </div>
      <button onClick={incrementState}>Increment State</button>
      <button onClick={incrementOther}>Increment Other</button>
    </div>
  );
}
