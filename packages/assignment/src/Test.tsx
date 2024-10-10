import React, { useState } from "react";
import { useRef } from "./@lib/hooks/useRef";

export default function Test() {
  // useState로 상태 관리
  const [stateValue, setStateValue] = useState(0);

  // useRef로 값 관리 (재렌더링을 일으키지 않음)
  const refValue = useRef(0);

  // stateValue를 증가시키는 함수
  const incrementState = () => {
    setStateValue((prev) => prev + 1);
  };

  // refValue를 증가시키는 함수
  const incrementRef = () => {
    refValue.current += 1;
    console.log("Current ref value:", refValue.current); // 콘솔에 출력하여 확인
  };
  console.log("Rendering component"); // 재렌더링될 때마다 출력

  return (
    <div>
      <h1>Test</h1>
      <div>
        <p>State value: {stateValue}</p>
        <p>Ref value (not causing re-render): {refValue.current}</p>
      </div>
      <button onClick={incrementState}>Increment State</button>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
}
