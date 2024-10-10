// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
    if (typeof objA !== typeof objB) {
        return false;
    }

    if (objA instanceof Array && objB instanceof Array) {
        return arrayEquals(objA, objB);
    }

    if (objA instanceof Object && objB instanceof Object) {
        return objectEquals(objA,objB);
    }

    return objA === objB;
}

const arrayEquals = (arrayA: Array<any>, arrayB: Array<any>): boolean => {
    if (arrayA.length === arrayB.length) {
        for (let i = 0; i < arrayA.length; i++) {
            if (arrayA[i] !== arrayB[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

const objectEquals = (objA: any, objB: any):boolean => {
    let result = false;
    if (Object.keys(objA).length === Object.keys(objB).length) {
        Object.keys(objA).forEach((key)=> result = objA[key] === objB[key]);
    }
    return result;
}