// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
    // Handle null cases
    if (objA === null && objB === null) return true;
    if (objA === null || objB === null) return false;

    // Determine types
    const typeA = Array.isArray(objA) ? 'array' : typeof objA;
    const typeB = Array.isArray(objB) ? 'array' : typeof objB;

    // If types are different, they are not equal
    if (typeA !== typeB) return false;

    switch (typeA) {
        case 'array': {
            if (objA.length !== objB.length) return false;
            for (let i = 0; i < objA.length; i++) {
                if (deepEquals(objA[i], objB[i]) === false) return false;
            }
            return true;
        }
        case 'object': {
            const keysA = Object.keys(objA);
            const keysB = Object.keys(objB);

            if (keysA.length !== keysB.length) return false;

            for (const key of keysA) {
                if (deepEquals(objA[key], objB[key]) === false) return false;
            }
            return true;
        }
        default:
            return objA === objB;
    }
}
