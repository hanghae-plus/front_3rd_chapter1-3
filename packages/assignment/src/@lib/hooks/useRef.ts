import { useState } from 'react';

export function useRef<T>(initialValue: T): { current: T } {
  // useRef를 제대로 구현해야 합니다.
  // 1. useRef 구현
  // 2. 직접 만든 useRef로 useMemo 구현
  // 3. 직접 만든 useMemo로 useDeepMemo, useCallback 구현
  // useRef 훅은 렌더링 사이에 값을 유지하는 가변 ref 객체를 생성합니다.
  // React의 useState를 이용해서 만들어보세요.

  /*
  Q. useState로 어떻게 useRef 를 만들 수 있지
  A. (by Claude)
    useRef는 컴포넌트의 전체 수명 주기 동안 동일한 객체를 유지해야 하며, 이 객체의 current 속성을 통해 값을 저장하고 접근할 수 있어야 합니다.
    
    useRef를 useState를 사용하여 구현할 수 있습니다.
    - 여기서 중요한 점은 상태 업데이트 함수를 사용하지 않고, 초기 상태만을 사용한다는 것입니다.
    - 컴포넌트가 리렌더링되더라도 항상 동일한 객체를 반환하게 됩니다.
    
    useRef는 useState를 사용해 초기화되지만, 그 이후의 current 값 변경은 React의 상태 시스템을 거치지 않고 직접 이루어집니다.
    이 때문에 useRef는 렌더링에 영향을 주지 않는 값을 저장하는 데 유용합니다.

    이 함수는 컴포넌트의 생명주기 동안 단 한 번만 실행됩니다.
  */
  /*
  Q. useState 훅을 써서 반환받는 거면 어쨌든 state 일 텐데 current에 접근해서 값을 변경할 수 있다는 게 신기하다
  A. (by Claude)
    - 참조와 불변성:
      React의 state는 일반적으로 불변(immutable)으로 취급되지만, useState가 반환하는 것은 "객체에 대한 참조"입니다.
      객체 자체의 참조는 변경되지 않지만, 그 내부 속성은 변경 가능합니다.
    - 얕은 비교:
      React는 state 변경을 감지할 때 얕은 비교(shallow comparison)를 사용합니다.
      즉, 객체의 참조가 변경되었는지만 확인하고, 내부 속성의 변경은 감지하지 않습니다.
    - 클로저(Closure):
      useRef의 구현은 클로저를 이용합니다.
      useState로 생성된 객체의 참조는 컴포넌트의 생명주기 동안 유지되며, 이 참조를 통해 current 속성에 접근할 수 있습니다.
    - 의도적인 설계:
      이는 React의 의도적인 설계입니다.
      useRef는 렌더링에 영향을 주지 않고 값을 저장하고 변경할 수 있는 방법을 제공하기 위해 만들어졌습니다.
  */
  const [ref] = useState<{ current: T }>({ current: initialValue });
  return ref;
}
