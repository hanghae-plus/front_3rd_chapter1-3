// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
    if (Object.is(objA, objB)) {
        return true;
    }

    if (typeof objA !== "object" || typeof objB !== "object") {
        return false;
    }

    if (objA === null || objB === null) {
        return false;
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        // objA에 있는 모든 키가 objB에도 존재하는지 확인
        if (!keysB.includes(key) || !Object.is(objA[key], objB[key])) {
            return false;
        }
    }

    return true;
}
