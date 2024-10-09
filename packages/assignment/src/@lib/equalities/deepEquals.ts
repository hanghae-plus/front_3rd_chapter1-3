// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEquals(objA: any, objB: any): boolean {
	// 기본 타입이거나 null인 경우 처리
	if (Object.is(objA, objB)) {
		return true;
	}

	if (typeof objA !== typeof objB) {
		return false;
	}

	if (objA === null || objB === null) {
		return false;
	}

	// 둘 다 객체인 경우:
	if (typeof objA === 'object' && typeof objB === 'object') {
		// 배열인지 확인
		if (Array.isArray(objA) && Array.isArray(objB)) {
			// 길이가 다르면 false
			if (objA.length != objB.length) {
				return false;
			}

			for (let i = 0; i < objA.length; i++) {
				if (!deepEquals(objA[i], objB[i])) {
					return false;
				}
			}

			return true;
		} else if (!(Array.isArray(objA) || Array.isArray(objB))) {
			// 둘다 배열이 아니면
			// 일반 객체 비교
			const keysA = Object.keys(objA);
			const keysB = Object.keys(objB);

			// 객체의 키 개수가 다른 경우 처리
			if (keysA.length !== keysB.length) {
				return false;
			}

			for (const key of keysA) {
				if (!Object.prototype.hasOwnProperty.call(objB, key) || !deepEquals(objA[key], objB[key])) {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	}

	return false;
}
