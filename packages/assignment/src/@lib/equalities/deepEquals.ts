// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
	if (objA === undefined || objA === null || typeof objA !== "object") return objA === objB;

	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) return false;

	for (const key of keysA) {
		if (typeof objA[key] === "object" && typeof objB[key] === "object") {
			if (!deepEquals(objA[key], objB[key])) return false;
		} else if (objA[key] !== objB[key]) return false;
	}

	return true;
}
