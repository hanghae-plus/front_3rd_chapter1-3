// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {

    if (typeof objA !== typeof objB) {
        return false;
    }

    if (objA === null || objB === null) {
        return objA === objB;
    }

    if (objA instanceof Array && objB instanceof Array) {
        return arrayEquals(objA, objB);
    }

    if (objA instanceof Object && objB instanceof Object) {
        return objectEquals(objA, objB);
    }

    return objA === objB;
}

const arrayEquals = (arrayA: Array<any>, arrayB: Array<any>): boolean => {
    if (arrayA.length !== arrayB.length) {
        return false;
    }

    for (let i = 0; i < arrayA.length; i++) {
        if (!deepEquals(arrayA[i], arrayB[i])) {
            return false;
        }
    }
    return true;
}

const objectEquals = (objA: any, objB: any): boolean => {
    if (objA === objB) {
        return true;
    }
    
    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false;
    }

    Object.keys(objA).forEach((key) => {
        if(!deepEquals(objA[key], objB[key])){
            return false;
        }
    });
    return true;
}