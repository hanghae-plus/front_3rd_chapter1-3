// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
	if (Object.is(objA, objB)) return true;
	if (objA === null || objB === null || typeof objA !== "object" || typeof objB !== "object")
		return false;

	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) return false;

	for (const key of keysA) {
		if (!Object.prototype.hasOwnProperty.call(objB, key) || !Object.is(objA[key], objB[key]))
			return false;
	}

	return true;
}
