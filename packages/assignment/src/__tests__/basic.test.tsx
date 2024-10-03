import { describe, expect, it, vi } from 'vitest';
import { deepEquals, shallowEquals, useCallback, useContextSelector, useDeepMemo, useMemo, useRef } from '../@lib';
import { renderHook } from "@testing-library/react";
import React, { createContext } from "react";

describe('Chapter 1-3 기본과제: hooks 구현하기 > ', () => {
  describe('비교 함수 구현하기 > ', () => {
    describe('shallowEquals 함수', () => {
      it('기본 타입 값들을 정확히 비교해야 한다', () => {
        expect(shallowEquals(1, 1)).toBe(true);
        expect(shallowEquals('안녕', '안녕')).toBe(true);
        expect(shallowEquals(true, true)).toBe(true);
        expect(shallowEquals(null, null)).toBe(true);
        expect(shallowEquals(undefined, undefined)).toBe(true);
        expect(shallowEquals(1, 2)).toBe(false);
        expect(shallowEquals('안녕', '잘가')).toBe(false);
        expect(shallowEquals(true, false)).toBe(false);
        expect(shallowEquals(null, undefined)).toBe(false);
      });

      it('배열을 얕게 비교해야 한다', () => {
        expect(shallowEquals([1, 2, 3], [1, 2, 3])).toBe(true);
        expect(shallowEquals([1, 2, 3], [1, 2, 4])).toBe(false);
        const arr1 = [1, {}];
        const arr2 = [1, {}];
        expect(shallowEquals(arr1, arr2)).toBe(false); // 다른 객체 참조
      });

      it('객체를 얕게 비교해야 한다', () => {
        expect(shallowEquals({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
        expect(shallowEquals({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
        expect(shallowEquals({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
        const obj1 = { a: {} };
        const obj2 = { a: {} };
        expect(shallowEquals(obj1, obj2)).toBe(false); // 다른 객체 참조
      });

      it('중첩된 구조를 깊게 비교하지 않아야 한다', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 2 } };
        expect(shallowEquals(obj1, obj2)).toBe(false); // 중첩된 객체의 참조가 다름
      });
    });

    describe('deepEquals 함수', () => {
      it('기본 타입 값들을 정확히 비교해야 한다', () => {
        expect(deepEquals(1, 1)).toBe(true);
        expect(deepEquals('안녕', '안녕')).toBe(true);
        expect(deepEquals(true, true)).toBe(true);
        expect(deepEquals(null, null)).toBe(true);
        expect(deepEquals(undefined, undefined)).toBe(true);
        expect(deepEquals(1, 2)).toBe(false);
        expect(deepEquals('안녕', '잘가')).toBe(false);
        expect(deepEquals(true, false)).toBe(false);
        expect(deepEquals(null, undefined)).toBe(false);
      });

      it('배열을 정확히 비교해야 한다', () => {
        expect(deepEquals([1, 2, 3], [1, 2, 3])).toBe(true);
        expect(deepEquals([1, 2, 3], [1, 2, 4])).toBe(false);
        expect(deepEquals([1, [2, 3]], [1, [2, 3]])).toBe(true);
        expect(deepEquals([1, [2, 3]], [1, [2, 4]])).toBe(false);
      });

      it('객체를 정확히 비교해야 한다', () => {
        expect(deepEquals({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
        expect(deepEquals({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
        expect(deepEquals({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
        expect(deepEquals({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true);
        expect(deepEquals({ a: { b: 2 } }, { a: { b: 3 } })).toBe(false);
      });

      it('중첩된 구조를 정확히 비교해야 한다', () => {
        const obj1 = { a: 1, b: { c: 2, d: [3, 4, { e: 5 }] } };
        const obj2 = { a: 1, b: { c: 2, d: [3, 4, { e: 5 }] } };
        const obj3 = { a: 1, b: { c: 2, d: [3, 4, { e: 6 }] } };
        expect(deepEquals(obj1, obj2)).toBe(true);
        expect(deepEquals(obj1, obj3)).toBe(false);
      });
    });
  })

  describe.each([
    // 직접 구현한 hook들
    { spec: "직접 구현한 hooks", useRef, useCallback, useMemo },

    // React에서 만들어진 훅들
    { spec: "React에서 제공하는 hooks", useRef: React.useRef, useCallback: React.useCallback, useMemo: React.useMemo },
  ])('$spec > ', ({ useRef, useCallback, useMemo }) => {

    describe('useRef 훅', () => {
      it('초기값으로 ref 객체를 생성해야 한다', () => {
        const { result } = renderHook(() => useRef(10));
        expect(result.current.current).toBe(10);
      });

      it('리렌더링 시에도 동일한 ref 객체를 유지해야 한다', () => {
        const { result, rerender } = renderHook(() => useRef(10));
        const initialRef = result.current;

        rerender();
        expect(result.current).toBe(initialRef);
      });

      it('ref의 current 값을 변경할 수 있어야 한다', () => {
        const { result } = renderHook(() => useRef(10));
        result.current.current = 20;
        expect(result.current.current).toBe(20);
      });
    });

    describe('useMemo 훅', () => {
      it('의존성 배열이 변경되지 않으면 메모이제이션된 값을 반환해야 한다', () => {
        const factory = vi.fn(() => 'result');
        const { result, rerender } = renderHook(
          ({ dep }) => useMemo(factory, [dep]),
          { initialProps: { dep: 1 } }
        );

        expect(result.current).toBe('result');
        expect(factory).toHaveBeenCalledTimes(1);

        rerender({ dep: 1 });
        expect(factory).toHaveBeenCalledTimes(1);
      });

      it('의존성 배열이 변경되면 팩토리 함수를 재실행해야 한다', () => {
        const factory = vi.fn(() => 'result');
        const { rerender } = renderHook(
          ({ dep }) => useMemo(factory, [dep]),
          { initialProps: { dep: 1 } }
        );

        rerender({ dep: 2 });
        expect(factory).toHaveBeenCalledTimes(2);

      });
    });

    describe('useCallback 훅', () => {
      it('의존성 배열이 변경되지 않으면 메모이제이션된 콜백을 반환해야 한다', () => {
        const { result, rerender } = renderHook(
          ({ dep }) => useCallback(() => dep, [dep]),
          { initialProps: { dep: 1 } }
        );

        const initialCallback = result.current;
        rerender({ dep: 1 });
        expect(result.current).toBe(initialCallback);
      });

      it('의존성 배열이 변경되면 새로운 콜백을 반환해야 한다', () => {
        const { result, rerender } = renderHook(
          ({ dep }) => useCallback(() => dep, [dep]),
          { initialProps: { dep: 1 } }
        );

        const initialCallback = result.current;
        rerender({ dep: 2 });
        expect(result.current).not.toBe(initialCallback);
      });

      it('새로운 콜백은 새로운 의존성 값을 사용해야 한다', () => {
        const { result, rerender } = renderHook(
          ({ dep }) => useCallback(() => dep, [dep]),
          { initialProps: { dep: 1 } }
        );

        expect(result.current()).toBe(1);
        rerender({ dep: 2 });
        expect(result.current()).toBe(2);
      });
    });
  })

  describe('custom hook 만들어보기', () => {


    it('useMemo를 사용할 때 커스텀 비교 함수를 사용할 수 있어야 한다', () => {
      const factory = vi.fn(() => 'result');
      const customEquals = vi.fn((a, b) => a[0] === b[0]);
      const { rerender } = renderHook(
        ({ dep }) => useMemo(factory, [dep], customEquals),
        { initialProps: { dep: [1, 2] } }
      );

      expect(factory).toHaveBeenCalledTimes(1);
      rerender({ dep: [1, 2] });
      expect(factory).toHaveBeenCalledTimes(2);
      expect(customEquals).toHaveBeenCalled();

      rerender({ dep: [2, 3] });
      expect(factory).toHaveBeenCalledTimes(3);
    });

    describe('useDeepMemo 훅', () => {
      it('의존성 객체가 깊은 비교로 같으면 메모이제이션된 값을 반환해야 한다', () => {
        const factory = vi.fn(() => 'result');
        const { result, rerender } = renderHook(
          ({ dep }) => useDeepMemo(factory, [dep]),
          { initialProps: { dep: { nested: { value: 1 } } } }
        );

        expect(result.current).toBe('result');
        expect(factory).toHaveBeenCalledTimes(1);

        rerender({ dep: { nested: { value: 1 } } });
        expect(factory).toHaveBeenCalledTimes(1);
      });

      it('의존성 객체가 깊은 비교로 다르면 팩토리 함수를 재실행해야 한다', () => {
        const factory = vi.fn(() => 'result');
        const { rerender } = renderHook(
          ({ dep }) => useDeepMemo(factory, [dep]),
          { initialProps: { dep: { nested: { value: 1 } } } }
        );

        rerender({ dep: { nested: { value: 2 } } });
        expect(factory).toHaveBeenCalledTimes(2);
      });
    });

    describe('useContextSelector 훅', () => {
      it('선택된 컨텍스트 값을 반환해야 한다', () => {
        const TestContext = createContext({ foo: 'bar', baz: 'qux' });
        const selector = vi.fn((value) => value.foo);

        const { result } = renderHook(() => useContextSelector(TestContext, selector));

        expect(result.current).toBe('bar');
        expect(selector).toHaveBeenCalledWith({ foo: 'bar', baz: 'qux' });
      });

      it('선택된 값이 변경되면 새로운 값을 반환해야 한다', () => {
        const TestContext = createContext({ foo: 'bar', baz: 'qux' });
        const selector = vi.fn((value) => value.foo);

        const { result, rerender } = renderHook(
          () => useContextSelector(TestContext, selector),
          {
            wrapper: ({ children }) => (
              <TestContext.Provider value={{ foo: 'newbar', baz: 'qux' }}>
                {children}
              </TestContext.Provider>
            ),
          }
        );

        rerender();
        expect(result.current).toBe('newbar');
      });

      it('커스텀 비교 함수를 사용할 수 있어야 한다', () => {
        const TestContext = createContext({ foo: { nested: 'bar' }, baz: 'qux' });
        const selector = vi.fn((value) => value.foo);
        const customEquals = vi.fn((a, b) => a.nested === b.nested);

        const { result, rerender } = renderHook(
          () => useContextSelector(TestContext, selector, customEquals),
          {
            wrapper: ({ children }) => (
              <TestContext.Provider value={{ foo: { nested: 'bar' }, baz: 'newqux' }}>
                {children}
              </TestContext.Provider>
            ),
          }
        );

        rerender();
        expect(customEquals).toHaveBeenCalled();
        expect(result.current).toEqual({ nested: 'bar' });
      });
    });
  })

})
