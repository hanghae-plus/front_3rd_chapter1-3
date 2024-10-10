import { createContext, useContext } from 'react';

export function renderLog(message: string) {
  console.log(message);
}

// 대규모 데이터 생성 함수
export const generateItems = (count: number) => {
  const categories = ['전자기기', '의류', '도서', '식품'];
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    name: `상품 ${index}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    price: Math.floor(Math.random() * 100000) + 1000
  }));
};

export const createTypedContext = <T>() => {
  const context = createContext<T | undefined>(undefined);

  const useTypedContext = () => {
    const useTypedContext = useContext(context);
    if (!useTypedContext) {
      throw new Error('Context를 제공하는 Provider 안에서 호출해야 합니다!');
    }
    return useTypedContext;
  };

  return { context, useContext: useTypedContext };
};
