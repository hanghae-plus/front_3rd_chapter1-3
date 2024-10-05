// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
	if (typeof objA !== typeof objB) return false;

	if (objA === objB) return true;

	if (Array.isArray(objA)) {
		if (!Array.isArray(objB)) return false;
		if (objA.length !== objB.length) return false;

		for (let i = 0; i < objA.length; i++) {
			if (!deepEquals(objA[i], objB[i])) {
				return false;
			}
		}
		return true;
	}

	if (typeof objA === "object") {
		if (typeof objB !== "object") return false;

		for (const key in objA) {
			if (!deepEquals(objA[key], objB[key])) {
				return false;
			}
		}
		return true;
	}

	return false;
}
