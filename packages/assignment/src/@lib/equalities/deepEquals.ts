// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
    if (Object.is(objA, objB)) {
        return true;
    }

    if (typeof objA !== "object" || objA === null || typeof objA !== "object" || objB === null) {
        return false;
    }

    //배열
    if (Array.isArray(objA) && Array.isArray(objB)) {
        if (objA.length !== objB.length) {
            return false;
        }

        for (const key in objA) {
            if (!deepEquals(objA[key], objB[key])) {
                return false;
            }
        }

        return true;
    }

    // 객체
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        if (!deepEquals(objA[key], objB[key])) {
            return false;
        }
    }

    return true;
}
