// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  
  if(objA === objB) return true;

  // 1. 기본 타입이거나 null인 경우 처리
  if(typeof objA !== typeof objB) return false;

  if(objA == null || objB == null) return false;

  if(typeof objA !== 'object' && typeof objB !== 'object') {
    // 원시타입인 경우 동등비교
    return objA === objB;
  }

  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  if(Array.isArray(objA) && Array.isArray(objB)) {
    if(objA.length !== objB.length) return false;
    for(let i=0; i<objA.length; i++) {
      // 같으면(true) !와 만나서 false가 되어 if문이 실행하지 않고 true 반환
      // 다르면(false) !와 만나서 true가 되어 if문 실행하여 flase 반환
      if(!deepEquals(objA[i], objB[i])) {
        return false;
      }
    }
    return true;
  }

  //    - 객체의 키 개수가 다른 경우 처리
  // 키를 배열에 담아서 시도
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if(keysA.length !== keysB.length) return false;

  //    - 재귀적으로 각 속성에 대해 deepEquals 호출
  for(let key of keysA) {
    // objB가 A의 키값을 가지고 있지 않으면 다른 객체므로 false
    // 키가 같다면 값을 비교하기 위해 두 객체의 동일 키의 값을 넣어서 deepEquals을 통해 재귀적으로 확인
    if(!objB.hasOwnProperty(key) || !deepEquals((objA)[key], (objB)[key])){
      return false;
    }
  }

  return true;

}
