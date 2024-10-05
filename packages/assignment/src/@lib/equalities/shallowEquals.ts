// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
	if (objA === undefined || objA === null || typeof objA !== "object") return objA === objB;

	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) return false;

	for (const key of keysA) {
		if (objA[key] !== objB[key]) return false;
	}

	return true;
}
