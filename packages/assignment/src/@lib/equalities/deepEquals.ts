// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {

  if(objA===objB) return true;

  if(typeof objA !== 'object' || typeof objB !== 'object')
    return false;

  if((objA === null || objA === undefined) && (objB === null || objB === undefined))  
    return true;

  const keyA = Object.keys(objA);
  const keyB = Object.keys(objB);

 
  if(keyA.length !== keyB.length) return false;
    
   

  for(const key of keyA){
    //!objB.hasOwnProperty(key) || 키 존재 여부도 체크하면 좋을것 같은 생각.
    if( !deepEquals(objA[key],objB[key]))
      return false;
  }
  

  return true
}
