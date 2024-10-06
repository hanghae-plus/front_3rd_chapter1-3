// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
  
  if(objA === objB) return true;

  if(typeof objA !== typeof objB) return false;

  // 1. 기본 타입이거나 null인 경우 처리
  if(objA == null || objB == null) return false;

  
  if(typeof objA !== 'object' && typeof objB !== 'object') {
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
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if(keysA.length !== keysB.length) return false;

  //    - 재귀적으로 각 속성에 대해 deepEquals 호출
  for(let key of keysA) {
    if(!objB.hasOwnProperty(key) || !deepEquals((objA)[key], (objB)[key])){
      return false;
    }
  }

  return true;

}
