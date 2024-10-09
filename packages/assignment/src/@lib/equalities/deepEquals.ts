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
    if (arrayA.length === arrayB.length) {
        for (let i = 0; i < arrayA.length; i++) {
            if (Array.isArray(arrayA[i]) && Array.isArray(arrayB[i])) {
                if (!deepEquals(arrayA[i], arrayB[i])) {
                    return false;
                }
                continue;
            }
            if (!deepEquals(arrayA[i], arrayB[i])) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

const objectEquals = (objA: any, objB: any): boolean => {
    if (objA === objB) {
        return true;
    }
    if(Object.keys(objA).length === 0 && Object.keys(objB).length === 0) {
        return true;
    }
    let result = false;
    if (Object.keys(objA).length === Object.keys(objB).length) {
        Object.keys(objA).forEach((key) => {
            result = objA[key] === objB[key]
            if (objA[key] instanceof Object && objB[key] instanceof Object) {
                result = deepEquals(objA[key], objB[key]);
            }
        });
    }

    return result;
}